import { Container } from "../common/Container";
import team_member_1 from "../../assets/img/team_member_1.jpg";
import team_member_2 from "../../assets/img/team_member_2.jpg";
import team_member_3 from "../../assets/img/team_member_3.jpg";

const teamMembers = [
  {
    id: 1,
    img: team_member_1,
    name: "Carla Press",
    prof: "App Developer",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae.",
  },
  {
    id: 2,
    img: team_member_2,
    name: "Craig Gouse",
    prof: "UI/UX Designer",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae.",
  },
  {
    id: 3,
    img: team_member_3,
    name: "Jocelyn Septimus",
    prof: "Website developer",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae.",
  },
];

export const OurTeam = () => {
  return (
    <section className="our-team">
      <Container>
        <div className="our-team-content">
          <h2 className="section-title">Our reative team</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
            Ullamcorper risus tempor, ac nunc libero urna, feugiat.
          </p>
        </div>
        <section className="team-members-section">
          {teamMembers.map((item) => {
            return (
              <article key={item.id} className="team-member">
                <div className="team-member-image">
                  <img src={item.img} alt={item.name} />
                </div>
                <h4 className="team-member-name">{item.name}</h4>
                <p className="team-member-position">{item.prof}</p>
                <p className="team-member-text">{item.text}</p>
                <div className="social-icons">
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
              </article>
            );
          })}
        </section>
      </Container>
    </section>
  );
};
