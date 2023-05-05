import {Link} from '@shopify/hydrogen';

export default function NavLifeJackets() {
  return (
    <ul className="obrien-nav-container__list">
      <li className="obrien-nav-container__list-item">
        <Link to="/collections/life-jackets">Life Jackets</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/">Men&apos;s</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/">Women&apos;s</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/">Kids&apos;</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/">Pets</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/">Boat Safety</Link>
      </li>
      <li className="image-holder"></li>
    </ul>
  );
}
