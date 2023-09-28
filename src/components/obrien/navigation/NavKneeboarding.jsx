import {Link} from '@shopify/hydrogen';

export default function NavKneeboarding({onClick}) {
  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events
    <ul className="obrien-nav-container__list" onClick={onClick}>
      <li className="obrien-nav-container__list-item">
        <Link to="/collections/kneeboarding">Kneeboarding</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/collections/kneeboards">Kneeboards</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/collections/kneeboard-ropes">Kneeboard Ropes</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/collections/kneeboard-accessories">Accessories</Link>
      </li>
      <li className="image-holder"></li>
    </ul>
  );
}
