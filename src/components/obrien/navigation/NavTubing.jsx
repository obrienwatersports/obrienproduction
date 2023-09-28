import {Link} from '@shopify/hydrogen';

export default function NavTubing({onClick}) {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <ul className="obrien-nav-container__list" onClick={onClick}>
      <li className="obrien-nav-container__list-item">
        <Link to="/collections/tubing">Tubing</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/collections/towable-tubes">Tubes</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/collections/tube-ropes">Tube Ropes</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/collections/tube-accessories">Accessories</Link>
      </li>
      <li className="image-holder"></li>
    </ul>
  );
}
