import { Container } from "./../common/Container";
import banner_top_mobile from "../../assets/img/banner_top_mobile.png";
import play_market from "../../assets/icon/play_market.png";
import app_store from "../../assets/icon/app_store.png";

export const BannerTop = () => {
  return (
    <section className="banner-top">
      <Container>
        <div className="banner-top-wrapper">
          <div className="banner-top-content-wrapper">
            <div className="banner-top-content">
              <h1 className="heading1">A Great App Makes Your Life Better</h1>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <div className="download-app">
                <h4 className="heading4">Download App Now</h4>
                <div className="download-app-icons">
                  <a href="#">
                    <img src={play_market} alt="play-market" />
                  </a>
                  <a href="#">
                    <img src={app_store} alt="app-store" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="banner-top-image">
            <img src={banner_top_mobile} alt="banner-top-mobile" />
          </div>
        </div>
      </Container>
    </section>
  );
};
