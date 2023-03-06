import {Link} from '@shopify/hydrogen';

export default function NavWakeboarding() {
  return (
    <ul className="obrien-nav-container__list">
      <li className="obrien-nav-container__list-item">
        <Link to="/">Wakeboarding</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/">Wakeboards</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/">Wake Bindings</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/">Wake Ropes</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/">Accessories</Link>
      </li>
      <li className="image-holder"></li>
    </ul>
  );
}
