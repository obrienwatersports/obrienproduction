import {Link} from '@shopify/hydrogen';

export default function NavWakeboarding() {
  return (
    <ul className="obrien-nav-container__list">
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
