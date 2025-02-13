import { Container } from "../common/Container";
import videoPoster from "../../assets/img/video.png";
import play from "../../assets/icon/play.png";
import { Fragment, useRef, useState } from "react";

export const HowToUse = () => {
  const videRef = useRef();
  const [showPlayBtn, setShowPlayBtn] = useState(true);
  const handlePlay = () => {
    setShowPlayBtn();
    videRef.current.play();
  };

  return (
    <Fragment>
      <section className="how-to-use">
        <Container>
          <div className="how-to-use-content">
            <h2 className="section-title section-title-color-inverted">
              how to use the app perfectly
            </h2>
            <Container small>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
                Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
                Ullamcorper risus tempor, ac nunc libero urna, feugiat.
              </p>
            </Container>
          </div>
          <div className="how-to-use-video-placeholder"></div>

          <div className="how-to-use-video">
            <video ref={videRef} poster={videoPoster}>
              <source
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                type="video/mp4"
              />
            </video>
            {showPlayBtn && (
              <button onClick={handlePlay} className="play-btn">
                <img src={play} alt="Play" />
              </button>
            )}
          </div>
          {/* </div> */}
        </Container>
      </section>
      <div className="how-to-use-video-placeholder"></div>
    </Fragment>
  );
};
