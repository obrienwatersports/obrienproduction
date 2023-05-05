import {Link} from '@shopify/hydrogen';

export default function NavRopes() {
  return (
    <ul className="obrien-nav-container__list">
      <li className="obrien-nav-container__list-item">
        <Link to="/collections/tow-ropes">Tow Ropes</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/">Ropes &amp; Handles</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/">Tube Ropes</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/">Accessories</Link>
      </li>
      <li className="image-holder"></li>
    </ul>
  );
}
