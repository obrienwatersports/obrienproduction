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
import DealerList from '../components/obrien/DealerList.client';

import MetaPixelPageView from '../components/metaPixel/MetaPixelPageView.client';

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

  const iframe =
    '<div id="storelocatorwidget" class="dealers-page" style="width:100%;"><p>Loading <a href="https://www.storelocatorwidgets.com">Locator Software</a>...</p></div> <script type="text/javascript" src="//maps.googleapis.com/maps/api/js?key=AIzaSyBmuZ4dB6S3kpFgkUviSfAoP5h9QoH8Pbg&libraries=places"></script> <script type="text/javascript" id="storelocatorscript" data-uid="MKPAHXoXV568tSmJYOG1dMsHyOYmxF5t" data-settings="store_list_layout=Left" src="//cdn.storelocatorwidgets.com/widget/widget.js"></script>';

  return (
    <Layout>
      <Suspense>
        <Seo type="page" data={page} />
      </Suspense>
      <div className="collectionPage actualPage">
        <div className="theRest">
          <div className="inside-lg padd-vert-10">
            <PageHeader heading={page.title}></PageHeader>
            {page.body && (
              <div
                dangerouslySetInnerHTML={{__html: page.body}}
                className="padd-vert-20"
              />
            )}
            <div
              dangerouslySetInnerHTML={{__html: iframe}}
              className="padd-vert-20"
            />
            <PageHeader
              className="secondHeader"
              heading="Online Retailers"
            ></PageHeader>
            <DealerList />
          </div>
        </div>
      </div>
      <MetaPixelPageView />
    </Layout>
  );
}

const PAGE_QUERY = gql`
  query PageDetails {
    page(handle: "dealers") {
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
