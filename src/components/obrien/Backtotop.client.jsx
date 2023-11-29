import {Link} from 'react-scroll';

export default function Backtotop() {
  return (
    <div className="backToTop" title="Back To Top">
      <Link to="obrienHero">
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"></path>
        </svg>
      </Link>
    </div>
  );
}
