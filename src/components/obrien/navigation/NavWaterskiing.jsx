import {Link} from '@shopify/hydrogen';

export default function NavWaterskiing({onClick}) {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <ul className="obrien-nav-container__list" onClick={onClick}>
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
