import {Link} from '@shopify/hydrogen';

export default function NavWaterskiing() {
  return (
    <ul className="obrien-nav-container__list">
      <li className="obrien-nav-container__list-item">
        <Link to="/collections/water-skiing">Waterskiing</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/collections/water-skis">Waterskis</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/collections/water-ski-bindings">Ski Bindings</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/collections/water-ski-ropes">Ski Ropes</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/collections/water-ski-accessories">Accessories</Link>
      </li>
      <li className="image-holder"></li>
    </ul>
  );
}
