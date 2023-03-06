import {Link} from '@shopify/hydrogen';

export default function NavPaddleboarding() {
  return (
    <ul className="obrien-nav-container__list">
      <li className="obrien-nav-container__list-item">
        <Link to="/">Paddleboarding</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/">Paddleboards</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/">Paddles</Link>
      </li>
      <li className="obrien-nav-container__list-item">
        <Link to="/">Accessories</Link>
      </li>
      <li className="image-holder"></li>
    </ul>
  );
}
