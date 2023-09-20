import {Link} from '@shopify/hydrogen';

export default function NavPaddleboarding() {
  return (
    <ul className="obrien-nav-container__list">
      <li className="obrien-nav-container__list-item">
        <Link to="/collections/stand-up-paddleboarding">Paddleboarding</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/collections/stand-up-paddleboards">Paddleboards</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/collections/stand-up-paddleboard-paddles">Paddles</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/collections/stand-up-paddleboard-accessories">
          Accessories
        </Link>
      </li>
      <li className="image-holder"></li>
    </ul>
  );
}
