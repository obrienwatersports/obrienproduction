// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import {Link} from '@shopify/hydrogen';

export default function NavWakesurfing({onClick}) {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <ul className="obrien-nav-container__list" onClick={onClick}>
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
