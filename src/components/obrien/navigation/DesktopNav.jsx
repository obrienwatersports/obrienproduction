//import {Component} from 'react';

import {useState} from 'react';

import {Link} from '@shopify/hydrogen';

import ObrienDeskMenu from './ObrienDeskMenu';
import NavMargaritavilleDesktop from './NavMargaritavilleDesktop';
import NavSupport from './NavSupport';

export default function DesktopNav() {
  const [ObrienMenu, setObrienMenu] = useState(false);
  const [MargaritavilleMenu, setMargaritavilleMenu] = useState(false);
  const [SupportMenu, setSupportMenu] = useState(false);
  return (
    <>
      <ul className="navBar justify">
        <li
          className="navbar-item"
          onMouseEnter={() => setObrienMenu(!ObrienMenu)}
          onMouseLeave={() => setObrienMenu(!ObrienMenu)}
        >
          <span>
            <span className="subSpan">Obrien</span>
          </span>
          {ObrienMenu && (
            <ObrienDeskMenu onClick={() => setObrienMenu(!ObrienMenu)} />
          )}
        </li>
        <li
          className="navbar-item"
          onMouseEnter={() => setMargaritavilleMenu(!MargaritavilleMenu)}
          onMouseLeave={() => setMargaritavilleMenu(!MargaritavilleMenu)}
        >
          <span>
            <span className="subSpan">Margaritaville</span>
          </span>
          <div className="submenu">
            {MargaritavilleMenu && (
              <NavMargaritavilleDesktop
                onClick={() => setMargaritavilleMenu(!MargaritavilleMenu)}
              />
            )}
          </div>
        </li>
        <li className="navbar-item">
          <Link to="/collections/hydroslide">
            <span>Hydroslide</span>
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/collections/sale">
            <span>Sale</span>
          </Link>
        </li>
        <li
          className="navbar-item"
          onMouseEnter={() => setSupportMenu(!SupportMenu)}
          onMouseLeave={() => setSupportMenu(!SupportMenu)}
        >
          <span>
            <span className="subSpan">Support</span>
          </span>
          <div className="submenu">
            {SupportMenu && (
              <NavSupport onClick={() => setSupportMenu(!SupportMenu)} />
            )}
          </div>
        </li>
        <li className="navbar-item">
          <Link to="/team">
            <span>Team</span>
          </Link>
        </li>
      </ul>
    </>
  );
}
