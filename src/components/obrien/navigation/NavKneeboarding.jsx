import {Link} from '@shopify/hydrogen';

export default function NavKneeboarding() {
  return (
    <ul className="obrien-nav-container__list">
      <li className="obrien-nav-container__list-item">
        <Link to="/collections/kneeboarding">Kneeboarding</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/collections/kneeboards">Kneeboards</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/collections/kneeboard-ropes">Kneeboard Ropes</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/collections/kneeboard-accessories">Accessories</Link>
      </li>
      <li className="image-holder"></li>
    </ul>
  );
}
