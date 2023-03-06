import {Link} from '@shopify/hydrogen';

export default function NavWaterskiing() {
  return (
    <ul className="obrien-nav-container__list">
      <li className="obrien-nav-container__list-item">
        <Link to="/">Waterskiing</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/">Waterskis</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/">Ski Bindings</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/">Ski Ropes</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/">Accessories</Link>
      </li>
      <li className="image-holder"></li>
    </ul>
  );
}
