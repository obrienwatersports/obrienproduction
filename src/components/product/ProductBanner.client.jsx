// @ts-expect-error @headlessui/react incompatibility with node16 resolution

//import {Text} from '~/components';
//import {ProductForm} from '~/components';

import {Image} from '@shopify/hydrogen';

export function ProductBanner({image, sizes}) {
  return (
    <>
      <div className="bannerImage">
        <Image data={image} alt="Banner" widths={sizes} />
      </div>
    </>
  );
}
