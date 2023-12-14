import AboveFooter from './AboveFooter.client';
import WhiteStackedLogo from './WhiteStackedLogo';
import {Link} from '@shopify/hydrogen';

export default function ObrienFooter() {
  return (
    <>
      <div id="subfooter">
        <AboveFooter />
      </div>
      <footer id="footer">
        <div className="flex-md inside-xl">
          <div className="footCol flex-vertical">
            <div className="stackedContain text-center">
              <WhiteStackedLogo />
              <ul className="footer-list fixedWidth">
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link to="/warranty">Warranty &amp; Claims</Link>
                </li>
                {/* <li>
                  <Link to="/returns">Returns</Link>
                </li>
                <li>
                  <Link to="/product-registration">Product Registration</Link>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="footCol">
            <ul className="footer-list">
              <li>
                <h4>Store</h4>
              </li>
              <li>
                <Link to="">O&apos;Brien</Link>
              </li>
              <li>
                <Link to="/collections/margaritaville-pool-floats">
                  Margaritaville
                </Link>
              </li>
              <li>
                <Link to="/collections/landshark-products">LandShark</Link>
              </li>
              <li>
                <Link to="/collections/hydroslide">Hydroslide</Link>
              </li>
              <li>
                <Link to="/collections/sale">Sale</Link>
              </li>
              <li>
                <Link to="/dealers">Dealers</Link>
              </li>
              <li>
                <Link to="/team">Team</Link>
              </li>
            </ul>
          </div>
          <div className="footCol">
            <ul className="footer-list">
              <li>
                <h4>Support</h4>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/faqs">FAQ&apos;s</Link>
              </li>
              <li>
                <Link to="/size-charts">Size Charts</Link>
              </li>
              <li>
                <Link to="/owners-manuals-safety-information">
                  Manuals &amp; Safety
                </Link>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://obrien365.com/ob-wp/"
                >
                  Dealer Support
                </a>
              </li>
              <li>
                <Link to="/careers">Careers</Link>
              </li>
            </ul>
          </div>
          <div className="footCol">
            <ul className="footer-list">
              <li>
                <h4 className="hiddenFooter">Support</h4>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/ccpa-notice">CCPA Notice</Link>
              </li>
              <li>
                <Link to="/terms-of-service">Terms of Service</Link>
              </li>
              <li>
                <Link to="/accessibility-policy">Accessibility Policy</Link>
              </li>
            </ul>
          </div>
          {/* <div className="footCol">
            <ul className="footer-list">
              <li>
                <h4>My Account</h4>
              </li>
            </ul>
          </div> */}
        </div>
      </footer>
    </>
  );
}
