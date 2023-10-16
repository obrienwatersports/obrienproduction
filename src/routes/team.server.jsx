import {
  useLocalization,
  useShopQuery,
  Seo,
  useServerAnalytics,
  ShopifyAnalyticsConstants,
  gql,
} from '@shopify/hydrogen';
import {Suspense} from 'react';

import {PageHeader} from '~/components';
import {NotFound, Layout} from '~/components/index.server';

import {BannerImage} from '../components/obrien/meta/BannerImage.client';
import TeamList from '../components/obrien/TeamList.client';

export default function Page({params}) {
  const {
    language: {isoCode: languageCode},
  } = useLocalization();

  const {handle} = params;
  const {
    data: {page},
  } = useShopQuery({
    query: PAGE_QUERY,
    variables: {languageCode, handle},
  });

  if (!page) {
    return <NotFound />;
  }

  useServerAnalytics({
    shopify: {
      pageType: ShopifyAnalyticsConstants.pageType.page,
      resourceId: page.id,
    },
  });

  const bannerImage = page.metafieldbanner?.reference?.image
    ? page.metafieldbanner?.reference?.image
    : null;

  return (
    <Layout>
      <div className="collectionPage">
        <Suspense>
          <Seo type="page" data={page} />
        </Suspense>
        {bannerImage !== null && <BannerImage myImage={bannerImage} />}

        <PageHeader
          className="notPage flex-vertical"
          heading={page.title}
        ></PageHeader>
        <div className="theRest">
          <TeamList />
          <div className="inside-xl">
            {page.body && (
              <div
                dangerouslySetInnerHTML={{__html: page.body}}
                className="padd-vert-20"
              />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

const PAGE_QUERY = gql`
  query PageDetails {
    page(handle: "team") {
      id
      title
      body
      seo {
        description
        title
      }
      metafieldbanner: metafield(namespace: "custom", key: "banner") {
        value
        reference {
          ... on MediaImage {
            image {
              url
              width
              height
              id
              altText
            }
          }
        }
      }
    }
  }
`;
