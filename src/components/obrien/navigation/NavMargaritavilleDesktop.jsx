/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import {Link} from '@shopify/hydrogen';

export default function NavMargaritavilleDesktop({onClick}) {
  return (
    <>
      <ul className="obrien-nav-container__list" onClick={onClick}>
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
      <ul className="obrien-nav-container__list" onClick={onClick}>
        <li className="obrien-nav-container__list-item">
          <Link to="/collections/margaritaville-stand-up-paddleboards">
            Stand Up Paddleboards
          </Link>
        </li>
      </ul>
      <ul className="obrien-nav-container__list" onClick={onClick}>
        <li className="obrien-nav-container__list-item">
          <Link to="/collections/margaritaville-life-jackets">
            Life Jackets
          </Link>
        </li>
      </ul>
      <ul className="obrien-nav-container__list" onClick={onClick}>
        <li className="obrien-nav-container__list-item">
          <Link to="/collections/landshark-products">LandShark Products</Link>
        </li>
      </ul>
    </>
  );
}
