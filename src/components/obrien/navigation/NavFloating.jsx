import {Link} from '@shopify/hydrogen';

export default function NavFloating() {
  return (
    <ul className="obrien-nav-container__list">
      <li className="obrien-nav-container__list-item">
        <Link to="/collections/floating">Floating</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/collections/party-floats">Party Floats</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/collections/foam-floats">Foam Floats</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/collections/pool-floats">Pool Floats</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/collections/float-accessories">Accessories</Link>
      </li>
      <li className="image-holder"></li>
    </ul>
  );
}
