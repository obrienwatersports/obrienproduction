import {Link} from '@shopify/hydrogen';

export default function NavLifeJackets({onClick}) {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <ul className="obrien-nav-container__list" onClick={onClick}>
      <li className="obrien-nav-container__list-item">
        <Link to="/collections/life-jackets-and-vests">Life Jackets</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/collections/mens-life-jackets-and-vests">Men&apos;s</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/collections/womens-life-jackets-and-vests">
          Women&apos;s
        </Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/collections/kids-life-jackets-and-vests">Kids&apos;</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/collections/pet-life-jackets">Pets</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/collections/boat-safety">Boat Safety</Link>
      </li>
      <li className="image-holder"></li>
    </ul>
  );
}
