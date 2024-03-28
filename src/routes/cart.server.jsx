import {Seo} from '@shopify/hydrogen';
import {PageHeader, Section, CartDetails} from '~/components';
import {Layout} from '~/components/index.server';
import MetaPixelPageView from '../components/metaPixel/MetaPixelPageView.client';

export default function Cart() {
  return (
    <Layout>
      <Seo type="page" data={{title: 'Cart'}} />
      <PageHeader heading="Your Cart" className="pageHeader inside-xl" />
      <Section className="inside-xl">
        <CartDetails layout="page" />
      </Section>
      <MetaPixelPageView />
    </Layout>
  );
}
