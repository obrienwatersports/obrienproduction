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
import Faqs from '../components/obrien/faqs.client.jsx';

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

  return (
    <Layout>
      <Suspense>
        <Seo type="page" data={page} />
      </Suspense>
      <div className="collectionPage actualPage">
        <div className="theRest">
          <div className="inside-lg padd-vert-10">
            <PageHeader heading={page.title}></PageHeader>
            <div
              dangerouslySetInnerHTML={{__html: page.body}}
              className="padd-vert-20"
            />
            <Faqs />
          </div>
        </div>
      </div>
    </Layout>
  );
}

const PAGE_QUERY = gql`
  query PageDetails {
    page(handle: "faqs") {
      id
      title
      body
      seo {
        description
        title
      }
    }
  }
`;
