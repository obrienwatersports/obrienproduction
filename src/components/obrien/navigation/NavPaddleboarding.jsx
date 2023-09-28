import {Link} from '@shopify/hydrogen';

export default function NavPaddleboarding({onClick}) {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <ul className="obrien-nav-container__list" onClick={onClick}>
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
