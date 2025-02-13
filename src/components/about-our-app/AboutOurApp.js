import { Container } from "./../common/Container";
import AboutOurAppImage from "../../assets/img/about_us.png";

const articles = [
  {
    id: 1,
    title: "Creative design",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
                Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.`,
  },
  {
    id: 2,
    title: "easy to use",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
                Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.`,
  },
  {
    id: 3,
    title: "Best user experince",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
                Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.`,
  },
];

export const AboutOurApp = () => {
  return (
    <section className="about-our-app">
      <Container>
        <div className="about-our-app-top">
          <h2 className="heading2 color-dark mb-2">About Our App</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
            Ullamcorper risus tempor, ac nunc libero urna, feugiat.
          </p>
        </div>

        <div className="about-our-app-content">
          <div className="about-our-app-image">
            <img src={AboutOurAppImage} alt="About Our App" />
          </div>
          <div className="about-our-app-content-articles">
            {articles.map((article) => {
              return (
                <article key={article.id}>
                  <div className="article-avatar">
                    <i className="icon-checkbox"></i>
                  </div>
                  <div className="article-body">
                    <h5 className="article-title">{article.title}</h5>
                    <p>{article.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};
