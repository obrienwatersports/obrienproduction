import {Link} from '@shopify/hydrogen';

export default function NavWakeboarding({onClick}) {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <ul className="obrien-nav-container__list" onClick={onClick}>
      <li className="obrien-nav-container__list-item">
        <Link to="/collections/wakeboarding">Wakeboarding</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/collections/wakeboards">Wakeboards</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/collections/wakeboard-bindings">Wake Bindings</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/collections/wakeboard-ropes">Wake Ropes</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/collections/wakeboard-accessories">Accessories</Link>
      </li>
      <li className="image-holder"></li>
    </ul>
  );
}
