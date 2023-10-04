import {Link} from '@shopify/hydrogen';

export default function NavMargaritaville({onClick}) {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <ul className="obrien-nav-container__list" onClick={onClick}>
      <li className="obrien-nav-container__list-item">
        <Link to="/collections/margaritaville-pool-floats">Pool Floats</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/collections/margaritabille-inflatable-pool-floats">
          Inflatable Pool Floats
        </Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/collections/margaritaville-foam-floats">
          Foam Pool Floats
        </Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/collections/margaritaville-stand-up-paddleboards">
          Stand Up Paddleboards
        </Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/collections/margaritaville-life-jackets">Life Jackets</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/collections/landshark-products">LandShark Products</Link>
      </li>
    </ul>
  );
}
