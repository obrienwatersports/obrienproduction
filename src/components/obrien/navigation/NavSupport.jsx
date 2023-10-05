import {Link} from '@shopify/hydrogen';

export default function NavSupport({onClick}) {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <ul className="obrien-nav-container__list" onClick={onClick}>
      <li className="obrien-nav-container__list-item">
        <Link to="/catalog">Product Catalog</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/about">About Us</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/contact">Contact Us</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/warranty">Warranty &amp; Claims</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/returns">Returns</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/registration">Product Registration</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/faqs">FAQ&apos;s</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/size-charts">Size Charts</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/owners-manuals-safety-information">
          Manuals &amp; Safety
        </Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/dealers">Dealers</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <a href="https://obrien365.com/ob-wp/">Dealer Portal</a>
      </li>
    </ul>
  );
}
