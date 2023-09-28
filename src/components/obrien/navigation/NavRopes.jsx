import {Link} from '@shopify/hydrogen';

export default function NavRopes({onClick}) {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <ul className="obrien-nav-container__list" onClick={onClick}>
      <li className="obrien-nav-container__list-item">
        <Link to="/collections/tow-ropes">Tow Ropes</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/collections/ropes-and-handles">Ropes &amp; Handles</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/collections/tube-ropes">Tube Ropes</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/collections/rope-accessories">Accessories</Link>
      </li>
      <li className="image-holder"></li>
    </ul>
  );
}
