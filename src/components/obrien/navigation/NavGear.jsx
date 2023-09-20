import {Link} from '@shopify/hydrogen';

export default function NavGear() {
  return (
    <ul className="obrien-nav-container__list">
      <li className="obrien-nav-container__list-item">
        <Link to="/collections/more-gear">More Gear</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/collections/gloves">Gloves</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/collections/bags">Bags</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/collections/apparel">Apparel</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/collections/merchandise">Merchandise</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/collections/replacement-parts">Replacement Parts</Link>
      </li>
      <li className="image-holder"></li>
    </ul>
  );
}
