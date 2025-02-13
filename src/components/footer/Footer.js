import { Container } from "./../common/Container";
import { TextField } from "../common/Textfield";
import logoSecondary from "../../assets/img/logo-secondary.png";
import { IconButton } from "../common/IconButton";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-us">
        <Container>
          <div className="contact-us-content">
            <div className="contact-us-item">
              <div className="contact-us-icon">
                <i className="icon-inbox"></i>
              </div>
              <a href="mailto:someone@example.com">info@youremail.com</a>
            </div>
            <div className="separator" />
            <div className="contact-us-item">
              <div className="contact-us-icon">
                <i className="icon-phone"></i>
              </div>
              <a href="tel:8803216559985">+880 321 655 9985</a>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="footer-content">
          <div className="footer-col">
            <div className="footer-logo">
              <img src={logoSecondary} alt="EveryMatrix" />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            </p>
            <div className="social-icons social-icons-color-inverted">
              <div className="social-icons-item">
                <a href="https://facebook.com" target="_blank">
                  <i className="icon-facebook" />
                </a>
              </div>
              <div className="social-icons-separator"></div>
              <div className="social-icons-item">
                <a href="https://instagram.com" target="_blank">
                  <i className="icon-instagram" />
                </a>
              </div>
              <div className="social-icons-separator"></div>
              <div className="social-icons-item">
                <a href="https://twitter.com" target="_blank">
                  <i className="icon-twitter" />
                </a>
              </div>
              <div className="social-icons-separator"></div>
              <div className="social-icons-item">
                <a href="https://youtube.com" target="_blank">
                  <i className="icon-youtube" />
                </a>
              </div>
            </div>
          </div>
          <div className="footer-col">
            <h5 className="footer-title">quick link</h5>
            <ul className="footer-list">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Screenshot</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h5 className="footer-title">news letter</h5>
            <p>Subscribe our newsletter to get our latest update & news</p>

            <div className="subscribe-form">
              <TextField
                placeholder="Your email address"
                adornment={<IconButton iconName="icon-send" />}
              />
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; Copyright 2021 .Ojjomedia. All Right Reserved.</p>
        </div>
      </Container>
    </footer>
  );
};
