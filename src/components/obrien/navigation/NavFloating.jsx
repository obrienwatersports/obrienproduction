import {Link} from '@shopify/hydrogen';

export default function NavFloating({onClick}) {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <ul className="obrien-nav-container__list" onClick={onClick}>
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
