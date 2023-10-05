import {Component} from 'react';
import {Link} from '@shopify/hydrogen';
import NavWakesurfing from './NavWakesurfing';
import NavWakeboarding from './NavWakeboarding';

import NavPaddleboarding from './NavPaddleboarding';
import NavWaterskiing from './NavWaterskiing';
import NavKneeboarding from './NavKneeboarding';
import NavTubing from './NavTubing';
import NavFloating from './NavFloating';
import NavRopes from './NavRopes';
import NavLifeJackets from './NavLifeJackets';
import NavGear from './NavGear';
import NavMargaritavilleDesktop from './NavMargaritavilleDesktop';
import NavSupport from './NavSupport';

export class DesktopNav extends Component {
  render() {
    return (
      <>
        <ul className="navBar justify">
          <li className="navbar-item">
            <span>
              <span className="subSpan">Obrien</span>
            </span>
            <div className="submenu">
              <div className="inside-xxl">
                <NavWakesurfing />
                <NavWakeboarding />
                <NavPaddleboarding />
                <NavWaterskiing />
                <NavKneeboarding />
                <NavTubing />
                <NavFloating />
                <NavRopes />
                <NavLifeJackets />
                <NavGear />
              </div>
            </div>
          </li>
          <li className="navbar-item">
            <span>
              <span className="subSpan">Margaritaville</span>
            </span>
            <div className="submenu">
              <NavMargaritavilleDesktop />
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
          <li className="navbar-item">
            <span>
              <span className="subSpan">Support</span>
            </span>
            <div className="submenu">
              <NavSupport />
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
}

export default DesktopNav;
