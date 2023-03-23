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
              <p>
                7926 Bracken PL SE
                <br />
                Snoqualmie, WA 98065
              </p>
              <p>
                <a href="tel:1-800-662-7436">1.800.6.obrien</a>
                <br />
                <a href="mailto:webcontact@obrien.com">webcontact@obrien.com</a>
              </p>
            </div>
          </div>
          <div className="footCol">
            <ul className="footer-list">
              <li>
                <h4>Company</h4>
              </li>
              <li>
                <Link to="">O&apos;Brien</Link>
              </li>
              <li>
                <Link to="">Margaritaville</Link>
              </li>
              <li>
                <Link to="">Team</Link>
              </li>
              <li>
                <Link to="">Dealers</Link>
              </li>
              <li>
                <Link to="">Dealer Support</Link>
              </li>
              <li>
                <Link to="">Careers</Link>
              </li>
              <li>
                <Link to="">Sale</Link>
              </li>
            </ul>
          </div>
          <div className="footCol">
            <ul className="footer-list">
              <li>
                <h4>Support</h4>
              </li>
              <li>
                <Link to="">About Us</Link>
              </li>
              <li>
                <Link to="">Contact Us</Link>
              </li>
              <li>
                <Link to="">Warranty &amp; Claims</Link>
              </li>
              <li>
                <Link to="">Returns</Link>
              </li>
              <li>
                <Link to="">Product Registration</Link>
              </li>
              <li>
                <Link to="">FAQ&apos;s</Link>
              </li>
              <li>
                <Link to="">Size Charts</Link>
              </li>
              <li>
                <Link to="">Privacy Policy</Link>
              </li>
              <li>
                <Link to="">Manuals &amp; Safety</Link>
              </li>
              <li>
                <Link to="">Dealers</Link>
              </li>
              <li>
                <Link to="">Dealer Portal</Link>
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
