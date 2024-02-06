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
import Locator from '../../components/obrien/Locator/Locator.client';
import Dinp from '../../components/obrien/Prop65/Dinp.client';
import Dnhp from '../../components/obrien/Prop65/Dnhp.client';

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
    metatab2,
    metaPerformancetitle1,
    metaperformanceanimation1,
    metaPerformancetitle2,
    metaperformanceanimation2,
    metaPerformancetitle3,
    metaperformanceanimation3,
    metaPerformancetitle4,
    metaperformanceanimation4,
    metaPerformancetitle5,
    metaperformanceanimation5,
    metaperformanceimage1,
    metaperformanceimage1title,
    metaperformanceimage2,
    metaperformanceimage2title,
    metaperformancetitlebottom,
    productvideo,
    productvideo2,
    id,
    productType,
    metafieldbanner,
    dinp,
    dnhp,
    //metafields,
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
  const metaTab2 = metatab2?.value ? metatab2?.value : null;
  const metaPerformanceTitle1 = metaPerformancetitle1?.value
    ? metaPerformancetitle1?.value
    : null;
  const metaPerformanceAnimation1 = metaperformanceanimation1?.value
    ? metaperformanceanimation1?.value
    : null;
  const metaPerformanceTitle2 = metaPerformancetitle2?.value
    ? metaPerformancetitle2?.value
    : null;
  const metaPerformanceAnimation2 = metaperformanceanimation2?.value
    ? metaperformanceanimation2?.value
    : null;
  const metaPerformanceTitle3 = metaPerformancetitle3?.value
    ? metaPerformancetitle3?.value
    : null;
  const metaPerformanceAnimation3 = metaperformanceanimation3?.value
    ? metaperformanceanimation3?.value
    : null;
  const metaPerformanceTitle4 = metaPerformancetitle4?.value
    ? metaPerformancetitle4?.value
    : null;
  const metaPerformanceAnimation4 = metaperformanceanimation4?.value
    ? metaperformanceanimation4?.value
    : null;
  const metaPerformanceTitle5 = metaPerformancetitle5?.value
    ? metaPerformancetitle5?.value
    : null;
  const metaPerformanceAnimation5 = metaperformanceanimation5?.value
    ? metaperformanceanimation5?.value
    : null;
  const metaPerformanceImage1 = metaperformanceimage1?.reference?.image
    ? metaperformanceimage1?.reference?.image
    : null;
  const metaPerformanceImage1Title = metaperformanceimage1title?.value
    ? metaperformanceimage1title?.value
    : null;
  const metaPerformanceImage2 = metaperformanceimage2?.reference?.image
    ? metaperformanceimage2?.reference?.image
    : null;
  const metaPerformanceImage2Title = metaperformanceimage2title?.value
    ? metaperformanceimage2title?.value
    : null;
  const metaPerformanceTitleBottom = metaperformancetitlebottom?.value
    ? metaperformancetitlebottom?.value
    : null;
  const productVideo = productvideo?.value ? productvideo?.value : null;
  const productVideo2 = productvideo2?.value ? productvideo2.value : null;
  const dinpMod = dinp?.value ? dinp?.value : null;
  const dnhpMod = dnhp?.value ? dnhp.value : null;
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
        {dinpMod !== null && (
          <div className="inside-lg">
            <Dinp />
          </div>
        )}
        {dnhpMod !== null && (
          <div className="inside-lg">
            <Dnhp />
          </div>
        )}
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
            <TabbedContainer
              metaMainDescription={metaMainDescription}
              metaTab2={metaTab2}
              metaPerformanceTitle1={metaPerformanceTitle1}
              metaPerformanceAnimation1={metaPerformanceAnimation1}
              metaPerformanceTitle2={metaPerformanceTitle2}
              metaPerformanceAnimation2={metaPerformanceAnimation2}
              metaPerformanceTitle3={metaPerformanceTitle3}
              metaPerformanceAnimation3={metaPerformanceAnimation3}
              metaPerformanceTitle4={metaPerformanceTitle4}
              metaPerformanceAnimation4={metaPerformanceAnimation4}
              metaPerformanceTitle5={metaPerformanceTitle5}
              metaPerformanceAnimation5={metaPerformanceAnimation5}
              metaPerformanceImage1={metaPerformanceImage1}
              metaPerformanceImage1Title={metaPerformanceImage1Title}
              metaPerformanceImage2={metaPerformanceImage2}
              metaPerformanceImage2Title={metaPerformanceImage2Title}
              metaPerformanceTitleBottom={metaPerformanceTitleBottom}
            />
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
      metatab2: metafield(namespace: "custom", key: "tab2") {
        value
      }
      metaPerformancetitle1: metafield(
        namespace: "custom"
        key: "performance_title_1"
      ) {
        value
      }
      metaperformanceanimation1: metafield(
        namespace: "custom"
        key: "performance_animation_1"
      ) {
        value
      }
      metaPerformancetitle2: metafield(
        namespace: "custom"
        key: "performance_title_2"
      ) {
        value
      }
      metaperformanceanimation2: metafield(
        namespace: "custom"
        key: "performance_animation_2"
      ) {
        value
      }
      metaPerformancetitle3: metafield(
        namespace: "custom"
        key: "performance_title_3"
      ) {
        value
      }
      metaperformanceanimation3: metafield(
        namespace: "custom"
        key: "performance_animation_3"
      ) {
        value
      }
      metaPerformancetitle4: metafield(
        namespace: "custom"
        key: "performance_title_4"
      ) {
        value
      }
      metaperformanceanimation4: metafield(
        namespace: "custom"
        key: "performance_animation_4"
      ) {
        value
      }
      metaPerformancetitle5: metafield(
        namespace: "custom"
        key: "performance_title_5"
      ) {
        value
      }
      metaperformanceanimation5: metafield(
        namespace: "custom"
        key: "performance_animation_5"
      ) {
        value
      }
      metaperformanceimage1: metafield(
        namespace: "custom"
        key: "performance_image_1"
      ) {
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
      metaperformanceimage1title: metafield(
        namespace: "custom"
        key: "performance_image_1_title"
      ) {
        value
      }
      metaperformanceimage2: metafield(
        namespace: "custom"
        key: "performance_image_2"
      ) {
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
      metaperformanceimage2title: metafield(
        namespace: "custom"
        key: "performance_image_2_title"
      ) {
        value
      }
      metaperformancetitlebottom: metafield(
        namespace: "custom"
        key: "performance_title_bottom"
      ) {
        value
      }
      productvideo: metafield(namespace: "custom", key: "product_video") {
        value
      }
      productvideo2: metafield(namespace: "custom", key: "product_video_2") {
        value
      }
      dinp: metafield(namespace: "custom", key: "prop_65_dinp") {
        value
      }
      dnhp: metafield(namespace: "custom", key: "prop_65_dnhp") {
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
