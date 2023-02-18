import {Link} from '@shopify/hydrogen';

export default function NavSupport() {
  return (
    <ul className="obrien-nav-container__list">
      <li className="obrien-nav-container__list-item">
        <Link to="/">Pool Floats</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/">Inflatable Pool Floats</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/">Foam Pool Floats</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/">Stand Up Paddleboards</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/">Life Jackets</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/">Accessories</Link>
      </li>
    </ul>
  );
}
