import {Suspense} from 'react';
import renderHydrogen from '@shopify/hydrogen/entry-server';
import {
  FileRoutes,
  PerformanceMetrics,
  PerformanceMetricsDebug,
  Route,
  Router,
  ShopifyAnalytics,
  ShopifyProvider,
  CartProvider,
  useSession,
  useServerAnalytics,
  Seo,
} from '@shopify/hydrogen';
import {HeaderFallback, EventsListener} from '~/components';
import {NotFound} from '~/components/index.server';
import {useEffect} from 'react';

function App({request}) {
  const pathname = new URL(request.normalizedUrl).pathname;
  const localeMatch = /^\/([a-z]{2})(\/|$)/i.exec(pathname);
  const countryCode = localeMatch ? localeMatch[1] : undefined;

  const isHome = pathname === `/${countryCode ? countryCode + '/' : ''}`;

  const {customerAccessToken} = useSession();

  useServerAnalytics({
    shopify: {
      isLoggedIn: !!customerAccessToken,
    },
  });

  return (
    <Suspense fallback={<HeaderFallback isHome={isHome} />}>
      <EventsListener />
      <ShopifyProvider countryCode={countryCode}>
        <Seo
          type="defaultSeo"
          data={{
            title:
              "O'Brien Watersports | Wakeboards, Waterskis, Tubes, Life Jackets, Wakesurf, SUP | O'Brien Watersports",
            description:
              'Wakeboards, Waterskis, Tubes, Life Jackets, Wakesurf, SUP',
            titleTemplate: `%s | O'Brien Watersports`,
          }}
        />
        <CartProvider
          countryCode={countryCode}
          customerAccessToken={customerAccessToken}
        >
          <Router>
            <FileRoutes
              basePath={countryCode ? `/${countryCode}/` : undefined}
            />
            <Route path="*" page={<NotFound />} />
          </Router>
        </CartProvider>
        <PerformanceMetrics />
        {import.meta.env.DEV && <PerformanceMetricsDebug />}
        <ShopifyAnalytics cookieDomain="hydrogen.shop" />
      </ShopifyProvider>
      <script
        id="gorgias-chat-widget-install-v3"
        src="https://config.gorgias.chat/bundle-loader/01HKTCXXVCJSJGNZNH55W29XD4"
      >
        {' '}
      </script>
      <YourComponent />
    </Suspense>
  );
}

const YourComponent = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-11157580141';
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      // eslint-disable-next-line no-undef
      dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'AW-11157580141');
  }, []); // Empty dependency array ensures useEffect runs only once

  return <div>{/* Your JSX component content */}</div>;
};

export default renderHydrogen(App);
