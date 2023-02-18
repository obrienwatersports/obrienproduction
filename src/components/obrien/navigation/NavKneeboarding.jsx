import { Link } from "@shopify/hydrogen"

export default function NavKneeboarding() {
  return (
    <ul className='obrien-nav-container__list'>
        <li className='obrien-nav-container__list-item'>
            <Link to='/'>Kneeboarding</Link>
        </li>
        <li className='obrien-nav-container__list-item'>
            <Link to='/'>Kneeboards</Link>
        </li>
        <li className='obrien-nav-container__list-item'>
            <Link to='/'>Kneeboard Ropes</Link>
        </li>
        <li className='obrien-nav-container__list-item'>
            <Link to='/'>Accessories</Link>
        </li>
    </ul>
  )
}
