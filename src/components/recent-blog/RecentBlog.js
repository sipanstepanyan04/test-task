import { Container } from "../common/Container";
import blog_1 from "../../assets/img/blog_1.jpg";
import blog_2 from "../../assets/img/blog_2.jpg";
import blog_3 from "../../assets/img/blog_3.jpg";

const blogPosts = [
  {
    id: 1,
    img: blog_1,
    title: "The Snap Pixel: How It Works and How to Install",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.",
    readMoreLink: "#",
  },
  {
    id: 2,
    img: blog_2,
    title: "Global Partner Solutions: A Partnership of Innovation",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.",
    readMoreLink: "#",
  },
  {
    id: 3,
    img: blog_3,
    title: "2021: An opportunity for Snapchatters to start fresh",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.",
    readMoreLink: "#",
  },
];

export const RecentBlog = () => {
  return (
    <section className="recent-blog">
      <Container small>
        <div className="recent-blog-content">
          <h4 className="section-title">Our recent blog</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
            Ullamcorper risus tempor, ac nunc libero urna, feugiat.
          </p>
        </div>
      </Container>
      <Container>
        <div className="blog-posts">
          {blogPosts.map((item) => {
            return (
              <article key={item.id} className="blog-post-item">
                <div className="blog-post-image">
                  <img src={item.img} alt="blog" />
                </div>
                <div className="blog-post-item-content">
                  <h5 className="blog-post-title">{item.title}</h5>
                  <p className="blog-post-text">{item.text}</p>
                  <a className="blog-post-read-more" href={item.readMoreLink}>
                    Read More
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
