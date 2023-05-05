import {Link} from '@shopify/hydrogen';

export default function NavTubing() {
  return (
    <ul className="obrien-nav-container__list">
      <li className="obrien-nav-container__list-item">
        <Link to="/collections/tubing">Tubing</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/">Tubes</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/">Tube Ropes</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/">Accessories</Link>
      </li>
      <li className="image-holder"></li>
    </ul>
  );
}
