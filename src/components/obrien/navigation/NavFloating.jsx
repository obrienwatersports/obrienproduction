import {Link} from '@shopify/hydrogen';

export default function NavFloating() {
  return (
    <ul className="obrien-nav-container__list">
      <li className="obrien-nav-container__list-item">
        <Link to="/collections/floating">Floating</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/">Party Floats</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/">Foam Floats</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/">Pool Floats</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/">Accessories</Link>
      </li>
      <li className="image-holder"></li>
    </ul>
  );
}
