import { Link } from "@shopify/hydrogen"

export default function NavLifeJackets() {
  return (
    <ul className='obrien-nav-container__list'>
        <li className='obrien-nav-container__list-item'>
            <Link to='/'>Life Jackets</Link>
        </li>
        <li className='obrien-nav-container__list-item'>
            <Link to='/'>Men's</Link>
        </li>
        <li className='obrien-nav-container__list-item'>
            <Link to='/'>Women's</Link>
        </li>
        <li className='obrien-nav-container__list-item'>
            <Link to='/'>Kids'</Link>
        </li>
        <li className='obrien-nav-container__list-item'>
            <Link to='/'>Pets</Link>
        </li>
        <li className='obrien-nav-container__list-item'>
            <Link to='/'>Boat Safety</Link>
        </li>
    </ul>
  )
}
