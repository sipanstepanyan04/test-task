import { Container } from "../common/Container";
import play_market from "../../assets/icon/play_market.png";
import app_store from "../../assets/icon/app_store.png";
import mobileDownloadImage from "../../assets/img/mobile_img_2.png";
import classNames from "classnames";

const statistics = [
  {
    id: 1,
    icon: "icon-download",
    count: 59865,
    name: "Download",
  },
  {
    id: 2,
    icon: "icon-thumb",
    count: 29864,
    name: "Like",
  },
  {
    id: 3,
    icon: "icon-star",
    count: 1500,
    name: "5 star rating",
  },
];

export const DownloadApp = () => {
  return (
    <section className="download-app-section">
      <Container>
        <div className="download-app-wrapper">
          <div className="download-app-content">
            <h2 className="section-title">Download App Now</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
              Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
              Ullamcorper risus tempor, ac nunc libero urna, feugiat.
            </p>

            <div className="download-app-icons">
              <a href="#">
                <img src={play_market} alt="play-market" />
              </a>
              <a href="#">
                <img src={app_store} alt="app-store" />
              </a>
            </div>

            <div className="download-app-statistics">
              {statistics.map((item) => {
                return (
                  <div key={item.id} className="download-app-statistic-item">
                    <i className={classNames(item.icon, "statistic-icon")}></i>
                    <span className="statistic-count">{item.count}</span>
                    <span className="statistic-name">{item.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="download-app-image">
            <img src={mobileDownloadImage} alt="Mobile Download" />
          </div>
        </div>
      </Container>
    </section>
  );
};
