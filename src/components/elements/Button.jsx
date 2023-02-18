//import clsx from 'clsx';
import {Link} from '@shopify/hydrogen';

//import {missingClass} from '~/lib/utils';

export function Button({as = 'button', ...props}) {
  const Component = props?.to ? Link : as;

  return <Component {...props} />;
}
