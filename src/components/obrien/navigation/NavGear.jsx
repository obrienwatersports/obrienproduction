import {Link} from '@shopify/hydrogen';

export default function NavGear() {
  return (
    <ul className="obrien-nav-container__list">
      <li className="obrien-nav-container__list-item">
        <Link to="/">More Gear</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/">Gloves</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/">Bags</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/">Apparel</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/">Merchandise</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/">Replacement Parts</Link>
      </li>
      <li className="image-holder"></li>
    </ul>
  );
}
