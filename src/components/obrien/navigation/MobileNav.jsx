import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from '@shopify/hydrogen';

//import { Link } from '@shopify/hydrogen';
import PinLogo from '../Pinlogo';
import NavWakesurfing from './NavWakesurfing';
import NavWakeboarding from './NavWakeboarding';
import NavMargaritaville from './NavMargaritaville';
import NavPaddleboarding from './NavPaddleboarding';
import NavWaterskiing from './NavWaterskiing';
import NavKneeboarding from './NavKneeboarding';
import NavTubing from './NavTubing';
import NavFloating from './NavFloating';
import NavRopes from './NavRopes';
import NavLifeJackets from './NavLifeJackets';
import NavGear from './NavGear';
import NavSupport from './NavSupport';

export default function MobileNav({onClick}) {
  return (
    <>
      <menu className="navigation">
        <PinLogo />
        <div className="nav-buffer">
          <Accordion
            //defaultActiveKey="0"
            flush
          >
            <ul className="navBar-mobile">
              <li className="navbar-item">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <span>Obrien</span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Accordion
                      //defaultActiveKey="0"
                      flush
                    >
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          <span>Wakesurfing</span>
                        </Accordion.Header>
                        <Accordion.Body>
                          <NavWakesurfing onClick={onClick} />
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          <span>Wakeboarding</span>
                        </Accordion.Header>
                        <Accordion.Body>
                          <NavWakeboarding onClick={onClick} />
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>
                          <span>Paddleboarding</span>
                        </Accordion.Header>
                        <Accordion.Body>
                          <NavPaddleboarding onClick={onClick} />
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header>
                          <span>Waterskiing</span>
                        </Accordion.Header>
                        <Accordion.Body>
                          <NavWaterskiing onClick={onClick} />
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="4">
                        <Accordion.Header>
                          <span>Kneeboarding</span>
                        </Accordion.Header>
                        <Accordion.Body>
                          <NavKneeboarding onClick={onClick} />
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="5">
                        <Accordion.Header>
                          <span>Tubing</span>
                        </Accordion.Header>
                        <Accordion.Body>
                          <NavTubing onClick={onClick} />
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="6">
                        <Accordion.Header>
                          <span>Floating</span>
                        </Accordion.Header>
                        <Accordion.Body>
                          <NavFloating onClick={onClick} />
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="7">
                        <Accordion.Header>
                          <span>Tow Ropes</span>
                        </Accordion.Header>
                        <Accordion.Body>
                          <NavRopes onClick={onClick} />
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="8">
                        <Accordion.Header>
                          <span>Life Jackets</span>
                        </Accordion.Header>
                        <Accordion.Body>
                          <NavLifeJackets onClick={onClick} />
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="9">
                        <Accordion.Header>
                          <span>More Gear</span>
                        </Accordion.Header>
                        <Accordion.Body>
                          <NavGear onClick={onClick} />
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <span>Margaritaville</span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <NavMargaritaville onClick={onClick} />
                  </Accordion.Body>
                </Accordion.Item>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <Link to="/" className="accordion-button almostButton">
                      <span>Hydroslide</span>
                    </Link>
                  </h2>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <Link to="/" className="accordion-button almostButton">
                      <span>Sale</span>
                    </Link>
                  </h2>
                </div>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <span>Support</span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <NavSupport />
                  </Accordion.Body>
                </Accordion.Item>
              </li>
            </ul>
          </Accordion>
        </div>
      </menu>
    </>
  );
}
