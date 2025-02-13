import { useMemo } from "react";
import Slider from "react-slick";
import { Container } from "../common/Container";

import customerImage from "../../assets/img/customer.jpg";

const customers = [
  {
    id: 1,
    img: customerImage,
    name: "Ann Lubin",
    position: "Co-Founder",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.",
  },
  {
    id: 2,
    img: customerImage,
    name: "Ann Lubin",
    position: "Co-Founder",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.",
  },
  {
    id: 3,
    img: customerImage,
    name: "Ann Lubin",
    position: "Co-Founder",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.",
  },
];

export const OurCustomers = () => {
  const settings = useMemo(() => {
    return {
      className: "cusomers-slider",
      centerMode: true,
      infinite: true,
      centerPadding: "26%",
      slidesToShow: 1,
      speed: 500,
      arrows: false,
      dots: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: "16px",
          },
        },
      ],
    };
  }, []);

  return (
    <div className="our-customers">
      <h4 className="section-title section-title-color-inverted text-center">
        Our Happy Customers
      </h4>
      <Container small>
        <p className="our-customers-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
          ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus
          amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus
          tempor, ac nunc libero urna, feugiat.
        </p>
      </Container>

      <Slider {...settings}>
        {customers.map((customer) => {
          return (
            <div className="cusomers-slider-item-wrapper" key={customer.id}>
              <article className="cusomers-slider-item">
                <div className="customer-image">
                  <img src={customer.img} alt={customer.name} />
                </div>
                <h3 className="customer-name">{customer.name}</h3>
                <p className="customer-position">{customer.position}</p>
                <p className="customer-feedback">{customer.feedback}</p>
              </article>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
