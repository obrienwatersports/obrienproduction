import {Link} from '@shopify/hydrogen';

export default function NavWakesurfing() {
  return (
    <ul className="obrien-nav-container__list">
      <li className="obrien-nav-container__list-item">
        <Link to="/collections/wakesurfing">Wakesurfing</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/collections/wakesurf-boards">Wakesurf Boards</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/collections/wakesurf-ropes">Surf Ropes</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/collections/wakesurf-accessories">Accessories</Link>
      </li>
      <li className="image-holder"></li>
    </ul>
  );
}
