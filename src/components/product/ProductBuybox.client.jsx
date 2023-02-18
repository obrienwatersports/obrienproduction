// export function ProductBuybox({content}) {
//   return (
//     <>
//       <div
//         className="prose dark:prose-invert"
//         dangerouslySetInnerHTML={{__html: content}}
//       />
//     </>
//   );
// }

import {Heading, ProductDetail, ProductForm} from '~/components';

export function ProductBuybox({content}) {
  return (
    <>
      <div className="thirty contentBoxContainer">
        <section className="padding-20 contentBox">
          <Heading as="h1" format className="noPadding noMargin">
            {content.title}
          </Heading>
          <div className="priceFix">
            {content.descriptionHtml && (
              <ProductDetail
                title="Product Details"
                content={content.descriptionHtml}
              />
            )}
            <ProductForm />
          </div>
        </section>
      </div>
    </>
  );
}
