import {Suspense} from 'react';
import {
  CacheLong,
  gql,
  Seo,
  ShopifyAnalyticsConstants,
  useServerAnalytics,
  useLocalization,
  useShopQuery,
} from '@shopify/hydrogen';

import {MEDIA_FRAGMENT, PRODUCT_CARD_FRAGMENT} from '~/lib/fragments';

//import {ProductGrid} from '~/components';

import {ProductGridHome} from '../components/product/ProductGridHome.client';

import {Layout} from '~/components/index.server';

import ObrienHero from '../components/obrien/ObrienHero.client';
import HomeWhatWeDo from '../components/obrien/HomeWhatWeDo.client';
import HomeBestSellers from '../components/obrien/HomeBestSellers.client';
import HomeActivities from '../components/obrien/HomeActivities.client';
import Backtotop from '../components/obrien/Backtotop.client';

// import {MediaFile} from '@shopify/hydrogen';

export default function Homepage() {
  useServerAnalytics({
    shopify: {
      canonicalPath: '/',
      pageType: ShopifyAnalyticsConstants.pageType.home,
    },
  });

  return (
    <Layout>
      <Suspense>
        <SeoForHomepage />
      </Suspense>
      <Suspense>
        <HomepageContent />
      </Suspense>
    </Layout>
  );
}

function HomepageContent() {
  const {
    language: {isoCode: languageCode},
    country: {isoCode: countryCode},
  } = useLocalization();

  const {
    data: {featuredCollection, heroPage},
  } = useShopQuery({
    query: HOMEPAGE_CONTENT_QUERY,
    variables: {
      language: languageCode,
      country: countryCode,
    },
    preload: true,
  });

  const heroVideo = heroPage.hero.reference;
  const best1Image = heroPage.best1.reference;
  const best2Image = heroPage.best2.reference;
  const best3Image = heroPage.best3.reference;
  const best4Image = heroPage.best4.reference;
  const best5Image = heroPage.best5.reference;
  const best6Image = heroPage.best6.reference;
  const best7Image = heroPage.best7.reference;
  const best8Image = heroPage.best8.reference;

  return (
    <>
      {heroVideo !== null && <ObrienHero video={heroVideo} />}
      <main>
        <ProductGridHome
          key={featuredCollection.id}
          collection={featuredCollection}
        />
        <HomeWhatWeDo />
        <HomeBestSellers
          image1={best1Image}
          image2={best2Image}
          image3={best3Image}
          image4={best4Image}
          image5={best5Image}
          image6={best6Image}
          image7={best7Image}
          image8={best8Image}
        />
        <HomeActivities />
        <Backtotop />
      </main>
    </>
  );
}

function SeoForHomepage() {
  const {
    data: {
      shop: {
        //name,
        description,
      },
    },
  } = useShopQuery({
    query: HOMEPAGE_SEO_QUERY,
    cache: CacheLong(),
    preload: true,
  });

  return (
    <Seo
      type="homepage"
      data={{
        title:
          "O'Brien Watersports | Wakeboards, Waterskis, Tubes, Life Jackets, Wakesurf, SUP | O'Brien Watersports",
        description,
        titleTemplate: "%s | O'Brien Watersports",
      }}
    />
  );
}

/**
 * The homepage content query includes a request for custom metafields inside the alias
 * `heroBanners`. The template loads placeholder content if these metafields don't
 * exist. Define the following five custom metafields on your Shopify store to override placeholders:
 * - hero.title             Single line text
 * - hero.byline            Single line text
 * - hero.cta               Single line text
 * - hero.spread            File
 * - hero.spread_secondary  File
 *
 * @see https://help.shopify.com/manual/metafields/metafield-definitions/creating-custom-metafield-definitions
 * @see https://github.com/Shopify/hydrogen/discussions/1790
 */

const HOMEPAGE_CONTENT_QUERY = gql`
  ${MEDIA_FRAGMENT}
  ${PRODUCT_CARD_FRAGMENT}
  query homepage($country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    heroBanners: collections(
      first: 3
      query: "collection_type:custom"
      sortKey: UPDATED_AT
    ) {
      nodes {
        id
        handle
        title
        descriptionHtml
        heading: metafield(namespace: "hero", key: "title") {
          value
        }
        byline: metafield(namespace: "hero", key: "byline") {
          value
        }
        cta: metafield(namespace: "hero", key: "cta") {
          value
        }
        spread: metafield(namespace: "hero", key: "spread") {
          reference {
            ...Media
          }
        }
        spreadSecondary: metafield(namespace: "hero", key: "spread_secondary") {
          reference {
            ...Media
          }
        }
      }
    }
    featuredProducts: products(first: 12) {
      nodes {
        ...ProductCard
      }
    }
    featuredCollection: collection(handle: "whats-new") {
      title
      products(first: 8) {
        nodes {
          ...ProductCard
        }
      }
    }
    heroPage: page(handle: "home") {
      hero: metafield(namespace: "custom", key: "hero_video") {
        value
        reference {
          ...Media
        }
      }
      best1: metafield(namespace: "custom", key: "best1") {
        value
        reference {
          ...Media
        }
      }
      best2: metafield(namespace: "custom", key: "best2") {
        value
        reference {
          ...Media
        }
      }
      best3: metafield(namespace: "custom", key: "best3") {
        value
        reference {
          ...Media
        }
      }
      best4: metafield(namespace: "custom", key: "best4") {
        value
        reference {
          ...Media
        }
      }
      best5: metafield(namespace: "custom", key: "best5") {
        value
        reference {
          ...Media
        }
      }
      best6: metafield(namespace: "custom", key: "best6") {
        value
        reference {
          ...Media
        }
      }
      best7: metafield(namespace: "custom", key: "best7") {
        value
        reference {
          ...Media
        }
      }
      best8: metafield(namespace: "custom", key: "best8") {
        value
        reference {
          ...Media
        }
      }
    }
  }
`;

const HOMEPAGE_SEO_QUERY = gql`
  query shopInfo {
    shop {
      name
      description
    }
  }
`;
