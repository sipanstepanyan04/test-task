import { Container } from "../common/Container";
import { HeaderNavigation } from "./HeaderNavigation";

export const Header = () => {
  return (
    <header>
      <Container>
        <div className="header-top-info">
          <div className="site-info">
            <a href="mailto:mail@htmlacademy.ru" className="site-info-link">
              <i className="icon-inbox" />
              <span>Info@youremail.com</span>
            </a>
            <a href="tel:+79001111111" className="site-info-link">
              <i className="icon-phone" />
              <span>(480) 555-0103</span>
            </a>
          </div>

          <ul className="social-links">
            <li>
              <a
                className="social-link-item"
                href="https://www.facebook.com/PartnerMatrix/"
                target="_blank"
              >
                <i className="icon-facebook" />
              </a>
            </li>
            <li>
              <a className="social-link-item" href="#" target="_blank">
                <i className="icon-instagram" />
              </a>
            </li>
            <li>
              <a className="social-link-item" href="#" target="_blank">
                <i className="icon-twitter" />
              </a>
            </li>
            <li>
              <a className="social-link-item" href="#" target="_blank">
                <i className="icon-youtube" />
              </a>
            </li>
          </ul>
        </div>
        <HeaderNavigation />
      </Container>
    </header>
  );
};
