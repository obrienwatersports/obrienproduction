import {Suspense} from 'react';
import {
  gql,
  ProductOptionsProvider,
  Seo,
  ShopifyAnalyticsConstants,
  useLocalization,
  useRouteParams,
  useServerAnalytics,
  useShopQuery,
} from '@shopify/hydrogen';

import {MEDIA_FRAGMENT} from '~/lib/fragments';
import {NotFound, Layout} from '~/components/index.server';
import {ProductDetail, ProductGallery} from '~/components';

import BannerImage from '../../components/obrien/meta/BannerImage.client';
//import FeatureFocus from '../../components/obrien/meta/FeatureFocus.client';
import TabbedContainer from '../../components/obrien/TabbedContainer/TabbedContainer.client';
import VideoContainer from '../../components/obrien/Video/VideoContainer.client';
// import VideoContainerLoop from '../../components/obrien/Video/VideoContainerLoop.client';
import Locator from '../../components/obrien/Locator/Locator.client';

export default function Product() {
  const {handle} = useRouteParams();
  const {
    language: {isoCode: languageCode},
    country: {isoCode: countryCode},
  } = useLocalization();

  const {
    data: {product},
  } = useShopQuery({
    query: PRODUCT_QUERY,
    variables: {
      country: countryCode,
      language: languageCode,
      handle,
    },
    preload: true,
  });

  if (!product) {
    return <NotFound type="product" />;
  }

  const {
    media,
    title,
    vendor,
    descriptionHtml,
    metamaindescription,
    productvideo,
    productvideo2,
    id,
    productType,
    metafieldbanner,
    //metafields,
    //newvideoarrray,
    // ffimage1,
    // fftitle1,
    // ffdescription1,
    // ffimage2,
    // fftitle2,
    // ffdescription2,
  } = product;

  const {
    priceV2,
    id: variantId,
    sku,
    title: variantTitle,
  } = product.variants.nodes[0];

  useServerAnalytics({
    shopify: {
      canonicalPath: `/products/${handle}`,
      pageType: ShopifyAnalyticsConstants.pageType.product,
      resourceId: id,
      products: [
        {
          product_gid: id,
          variant_gid: variantId,
          variant: variantTitle,
          name: title,
          brand: vendor,
          category: productType,
          price: priceV2.amount,
          sku,
        },
      ],
    },
  });

  const bannerImage = metafieldbanner?.reference?.image
    ? metafieldbanner?.reference?.image
    : null;
  const metaMainDescription = metamaindescription?.value
    ? metamaindescription?.value
    : null;
  const productVideo = productvideo?.value ? productvideo?.value : null;
  const productVideo2 = productvideo2?.value ? productvideo2.value : null;

  // const videoArray = newvideo?.value ? newvideo?.value : null;
  // const ffImage1 = ffimage1?.reference?.image
  //   ? ffimage1?.reference?.image
  //   : null;
  // const ffTitle1 = fftitle1?.value ? fftitle1?.value : null;
  // const ffDescription1 = ffdescription1?.value ? ffdescription1?.value : null;

  // const ffImage2 = ffimage2?.reference?.image
  //   ? ffimage2?.reference?.image
  //   : null;
  // const ffTitle2 = fftitle2?.value ? fftitle2?.value : null;
  // const ffDescription2 = ffdescription2?.value ? ffdescription2?.value : null;

  return (
    <Layout>
      <Suspense>
        <Seo type="product" data={product} />
      </Suspense>
      <ProductOptionsProvider data={product}>
        {bannerImage !== null && (
          <div className="bannerFix">
            <BannerImage myImage={bannerImage} />
          </div>
        )}
        <section
          className={`inside-xl buyBox banner ${
            bannerImage === null && 'noBanner'
          }`}
        >
          <div
            className={`${
              metaMainDescription === null
                ? 'flex-md itsNotHere'
                : 'flex-md itsHere'
            }`}
          >
            <ProductDetail
              title="Product Details"
              content={descriptionHtml}
              heading={title}
            />
            <ProductGallery
              media={media.nodes}
              className="seventy obrienGallery"
            />
          </div>
        </section>
        {
          // This is where you need to add productvideo2 and make all that work.
        }
        {productVideo !== null && (
          <section id="video">
            <VideoContainer
              productVideo={productVideo}
              productVideo2={productVideo2}
            />
          </section>
        )}
        {metaMainDescription !== null && (
          <section id="tabs">
            <TabbedContainer metaMainDescription={metaMainDescription} />
          </section>
        )}
      </ProductOptionsProvider>
      <Suspense>
        <Locator />
      </Suspense>
    </Layout>
  );
}

export const PRODUCT_QUERY = gql`
  ${MEDIA_FRAGMENT}
  query Product(
    $country: CountryCode
    $language: LanguageCode
    $handle: String!
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      id
      title
      vendor
      descriptionHtml
      media(first: 7) {
        nodes {
          ...Media
        }
      }
      newvideoarrray: metafields(
        identifiers: {namespace: "custom", key: "newvideo"}
      ) {
        id
        namespace
        description
        value
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
      metamaindescription: metafield(
        namespace: "custom"
        key: "main_description"
      ) {
        value
      }
      productvideo: metafield(namespace: "custom", key: "product_video") {
        value
      }
      productvideo2: metafield(namespace: "custom", key: "product_video_2") {
        value
      }
      newvideo: metafield(namespace: "custom", key: "newvideo") {
        value
      }
      ffimage1: metafield(namespace: "custom", key: "ff1_image") {
        value
        description
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
      fftitle1: metafield(namespace: "custom", key: "ff1_title") {
        value
      }
      ffdescription1: metafield(namespace: "custom", key: "ff1_description") {
        value
      }
      ffimage2: metafield(namespace: "custom", key: "ff2_image") {
        value
        description
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
      fftitle2: metafield(namespace: "custom", key: "ff2_title") {
        value
      }
      ffdescription2: metafield(namespace: "custom", key: "ff2_description") {
        value
      }
      productType
      variants(first: 100) {
        nodes {
          id
          availableForSale
          selectedOptions {
            name
            value
          }
          image {
            id
            url
            altText
            width
            height
          }
          priceV2 {
            amount
            currencyCode
          }
          compareAtPriceV2 {
            amount
            currencyCode
          }
          sku
          title
          unitPrice {
            amount
            currencyCode
          }
        }
      }
      seo {
        description
        title
      }
    }
    shop {
      shippingPolicy {
        body
        handle
      }
      refundPolicy {
        body
        handle
      }
    }
  }
`;
