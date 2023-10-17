import {Image} from '@shopify/hydrogen';
import {Link} from 'react-scroll';

export default function Scroller() {
  return (
    <div className="scroller text-center">
      <Link to="subHero" spy={true} smooth={true} duration={1000}>
        <div>
          <Image src="/scroller.gif" alt="Scroll Down" width={36} height={36} />
        </div>
      </Link>
    </div>
  );
}
