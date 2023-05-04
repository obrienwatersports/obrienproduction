import {Suspense, useMemo} from 'react';
import {gql, useShopQuery} from '@shopify/hydrogen';
import {PRODUCT_CARD_FRAGMENT} from '~/lib/fragments';
import {ProductCard, Section} from '~/components';

const mockProducts = new Array(12).fill('');

export function ProductSwimlane({
  title = 'Featured Products',
  data = mockProducts,
  count = 12,
  ...props
}) {
  const productCardsMarkup = useMemo(() => {
    // If the data is already provided, there's no need to query it, so we'll just return the data
    if (typeof data[0] === 'object') {
      return <ProductCards products={data} />;
    }

    // If the data provided is a productId, we will query the productRecommendations API.
    // To make sure we have enough products for the swimlane, we'll combine the results with our top selling products.
    if (typeof data[0] === 'string') {
      return (
        <Suspense>
          {data?.map((itm) => (
            <RecommendedProducts key={itm} productId={itm} count={count} />
          ))}
        </Suspense>
      );
    }

    // If no data is provided, we'll go and query the top products
    return <TopProducts count={count} />;
  }, [count, data]);

  return (
    <Section heading={title} padding="y" {...props}>
      <div className="flex-md">{productCardsMarkup}</div>
    </Section>
  );
}

function ProductCards({products}) {
  return (
    <>
      {products.map((product) => (
        <ProductCard
          product={product}
          key={product.id}
          className={'snap-start w-80'}
        />
      ))}
    </>
  );
}

function RecommendedProducts({productId}) {
  const {data: product, errors} = useShopQuery({
    query: PRODUCT_QUERY,
    variables: {
      id: productId,
    },
  });

  const RecommendedProducts = [];
  if (product && !errors) {
    RecommendedProducts.push(product.product);
  }

  return <ProductCards products={RecommendedProducts} />;
}

function TopProducts({count}) {
  const {
    data: {products},
  } = useShopQuery({
    query: TOP_PRODUCTS_QUERY,
    variables: {
      count,
    },
  });

  return <ProductCards products={products.nodes} />;
}

const PRODUCT_QUERY = gql`
  query getProductById($id: ID!) {
    product(id: $id) {
      title
      id
      handle
      variants(first: 100) {
        edges {
          node {
            id
            priceV2 {
              amount
              currencyCode
            }
            compareAtPriceV2 {
              amount
              currencyCode
            }
            image {
              url
            }
          }
        }
      }
    }
  }
`;
// const RECOMMENDED_PRODUCTS_QUERY = gql`
//   ${PRODUCT_CARD_FRAGMENT}
//   query productRecommendations(
//     $productId: ID!
//     $count: Int
//     $countryCode: CountryCode
//     $languageCode: LanguageCode
//   ) @inContext(country: $countryCode, language: $languageCode) {
//     recommended: productRecommendations(productId: $productId) {
//       ...ProductCard
//     }
//     additional: products(first: $count, sortKey: BEST_SELLING) {
//       nodes {
//         ...ProductCard
//       }
//     }
//   }
// `;

const TOP_PRODUCTS_QUERY = gql`
  ${PRODUCT_CARD_FRAGMENT}
  query topProducts(
    $count: Int
    $countryCode: CountryCode
    $languageCode: LanguageCode
  ) @inContext(country: $countryCode, language: $languageCode) {
    products(first: $count, sortKey: BEST_SELLING) {
      nodes {
        ...ProductCard
      }
    }
  }
`;
