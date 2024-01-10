import {Suspense} from 'react';
import {
  useLocalization,
  useShopQuery,
  CacheLong,
  gql,
  loadScript,
} from '@shopify/hydrogen';

import {parseMenu} from '~/lib/utils';

import Header from '../obrien/Header.client';
import ObrienFooter from '../obrien/Footer.client';

import CookieModule from '../obrien/CookieModule.client';

const HEADER_MENU_HANDLE = 'main-menu';
const FOOTER_MENU_HANDLE = 'footer';

const SHOP_NAME_FALLBACK = "O'Brien Watersports";

/**
 * A server component that defines a structure and organization of a page that can be used in different parts of the Hydrogen app
 */
export function Layout({children}) {
  loadScript(
    '//static.klaviyo.com/onsite/js/klaviyo.js?company_id=${WkytYu}',
  ).catch(() => {});
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="">
          <a href="#mainContent" className="sr-only">
            Skip to content
          </a>
        </div>
        <Suspense fallback={<Header title={SHOP_NAME_FALLBACK} />}>
          <Header />
        </Suspense>
        <main role="main" id="mainContent" className="flex-grow">
          {children}
          <CookieModule />
        </main>
      </div>
      <Suspense>
        <FooterWithMenu />
      </Suspense>
      <script href="//static.klaviyo.com/onsite/js/klaviyo.js?company_id=${WkytYu}"></script>
    </>
  );
}

function FooterWithMenu() {
  const {footerMenu} = useLayoutQuery();
  return <ObrienFooter menu={footerMenu} />;
}

function useLayoutQuery() {
  const {
    language: {isoCode: languageCode},
  } = useLocalization();

  const {data} = useShopQuery({
    query: SHOP_QUERY,
    variables: {
      language: languageCode,
      headerMenuHandle: HEADER_MENU_HANDLE,
      footerMenuHandle: FOOTER_MENU_HANDLE,
    },
    cache: CacheLong(),
    preload: '*',
  });

  const shopName = data ? data.shop.name : SHOP_NAME_FALLBACK;

  /*
        Modify specific links/routes (optional)
        @see: https://shopify.dev/api/storefront/unstable/enums/MenuItemType
        e.g here we map:
          - /blogs/news -> /news
          - /blog/news/blog-post -> /news/blog-post
          - /collections/all -> /products
      */
  const customPrefixes = {BLOG: '', CATALOG: 'products'};

  const headerMenu = data?.headerMenu
    ? parseMenu(data.headerMenu, customPrefixes)
    : undefined;

  const footerMenu = data?.footerMenu
    ? parseMenu(data.footerMenu, customPrefixes)
    : undefined;

  return {footerMenu, headerMenu, shopName};
}

const SHOP_QUERY = gql`
  fragment MenuItem on MenuItem {
    id
    resourceId
    tags
    title
    type
    url
  }
  query layoutMenus(
    $language: LanguageCode
    $headerMenuHandle: String!
    $footerMenuHandle: String!
  ) @inContext(language: $language) {
    shop {
      name
    }
    headerMenu: menu(handle: $headerMenuHandle) {
      id
      items {
        ...MenuItem
        items {
          ...MenuItem
        }
      }
    }
    footerMenu: menu(handle: $footerMenuHandle) {
      id
      items {
        ...MenuItem
        items {
          ...MenuItem
        }
      }
    }
  }
`;
