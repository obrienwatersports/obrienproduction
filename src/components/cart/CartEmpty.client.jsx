import {useRef} from 'react';
import {useScroll} from 'react-use';
import {fetchSync} from '@shopify/hydrogen';
import {Text, ProductCard, Heading, Skeleton} from '~/components';
import {Suspense} from 'react';
import {Link} from '@shopify/hydrogen';

export function CartEmpty({onClose, layout = 'drawer'}) {
  const scrollRef = useRef(null);
  const {y} = useScroll(scrollRef);

  const container = {
    drawer: `grid content-start gap-4 px-6 pb-8 transition overflow-y-scroll md:gap-12 md:px-12 h-screen-no-nav md:pb-12 ${
      y > 0 ? 'border-t' : ''
    }`,
    page: `what`,
  };

  const topProductsContainer = {
    drawer: '',
    page: 'theheck',
  };

  return (
    <div ref={scrollRef} className={container[layout]}>
      <section className="text-center emptyCart">
        <Text format>
          Looks like you haven&rsquo;t added anything yet, let&rsquo;s get you
          started!
        </Text>
        <div>
          <Link to="/">Continue shopping</Link>
        </div>
      </section>
      <section className="grid gap-8 pt-4">
        <Heading format size="copy">
          Shop Best Sellers
        </Heading>
        <div className={`${topProductsContainer[layout]}`}>
          <Suspense fallback={<Loading />}>
            <TopProducts onClose={onClose} />
          </Suspense>
        </div>
      </section>
    </div>
  );
}

function TopProducts({onClose}) {
  const response = fetchSync('/api/bestSellers');

  if (!response.ok) {
    console.error(
      `Unable to load top products ${response.url} returned a ${response.status}`,
    );
    return null;
  }

  const products = response.json();

  if (products.length === 0) {
    return <Text format>No products found.</Text>;
  }

  return (
    <>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} onClick={onClose} />
      ))}
    </>
  );
}

function Loading() {
  return (
    <>
      {[...new Array(4)].map((_, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={i} className="grid gap-2">
          <Skeleton className="aspect-[3/4]" />
          <Skeleton className="w-32 h-4" />
        </div>
      ))}
    </>
  );
}
