import {Link} from '@shopify/hydrogen';

export default function NavMargaritavilleDesktop() {
  return (
    <>
      <ul className="obrien-nav-container__list">
        <li className="obrien-nav-container__list-item">
          <Link to="/collections/margaritaville-pool-floats">Pool Floats</Link>
        </li>
        <li className="obrien-nav-container__list-item">
          <Link to="/collections/margaritaville-inflatable-pool-floats">
            Inflatable Pool Floats
          </Link>
        </li>
        <li className="obrien-nav-container__list-item">
          <Link to="/collections/margaritaville-foam-pool-floats">
            Foam Pool Floats
          </Link>
        </li>
      </ul>
      <ul className="obrien-nav-container__list">
        <li className="obrien-nav-container__list-item">
          <Link to="/collections/margaritaville-stand-up-paddleboards">
            Stand Up Paddleboards
          </Link>
        </li>
      </ul>
      <ul className="obrien-nav-container__list">
        <li className="obrien-nav-container__list-item">
          <Link to="/collections/margaritaville-life-jackets">
            Life Jackets
          </Link>
        </li>
      </ul>
      <ul className="obrien-nav-container__list">
        <li className="obrien-nav-container__list-item">
          <Link to="/collections/landshark-products">LandShark Products</Link>
        </li>
      </ul>
    </>
  );
}
