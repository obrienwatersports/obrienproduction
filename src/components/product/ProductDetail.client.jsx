// @ts-expect-error @headlessui/react incompatibility with node16 resolution

//import {Text} from '~/components';
import {ProductForm} from '~/components';

export function ProductDetail({content, heading}) {
  return (
    <>
      <div className="thirty contentBoxContainer flex-vertical">
        <section className="contentBox">
          <h1 className="padding">{heading}</h1>
          <div className="priceFix padding">
            <ProductForm />
            <div className="fixySize">
              <div
                className="buyBoxHTML"
                dangerouslySetInnerHTML={{__html: content}}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
