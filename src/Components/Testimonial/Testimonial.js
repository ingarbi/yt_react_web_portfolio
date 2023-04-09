import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";

const Testimonial = () => {
  const data = [
    {
      name: "Ivan",
      position: "CEO",
      description: "I like how he works, He is a real pro",
      img: "https://img.freepik.com/free-photo/odenwald-germany-is-pure-nature_181624-32381.jpg?w=1380&t=st=1680985191~exp=1680985791~hmac=60602af8e4e10924c00ace81d74a72d91147cdd09ebc41985f3e31b82c533e77",
    },
    {
      name: "Magomed",
      position: "CEO",
      description: "I like how he works, He is a real pro",
      img: "https://img.freepik.com/free-photo/sunset-silhouettes-trees-mountains-generative-ai_169016-29371.jpg?w=1380&t=st=1680985260~exp=1680985860~hmac=6fa2b56d20ab9243a40b4fc87bd0b9d98579cf01f0b96a84f30a50b8ad67d8e2",
    },
    {
      name: "Andrey",
      position: "Engineer",
      description: "I like how he works, He is a real pro",
      img: "https://img.freepik.com/free-photo/beautiful-shot-grassy-hills-covered-trees-near-mountains-dolomites-italy_181624-24400.jpg?w=1380&t=st=1680985325~exp=1680985925~hmac=a151033a4d19a1d4658e6fbaee7b156eb1ce2bc1b77da7d75f2941696d714895",
    },
    {
      name: "Sam",
      position: "FT Dev",
      description: "I like how he works, He is a real pro",
      img: "https://img.freepik.com/free-photo/pier-lake-hallstatt-austria_181624-44201.jpg?w=1380&t=st=1680985379~exp=1680985979~hmac=dfb4130ba33e2187c366aecc9b2ff41228a6853be8a16d9a41d74246fcbab116",
    },
    {
      name: "John",
      position: "Ex CEO",
      description: "I like how he works, He is a real pro",
      img: "https://img.freepik.com/free-photo/lake-o-hara-yoho-national-park-with-waterfront-carbin_649448-2559.jpg?w=1800&t=st=1680985422~exp=1680986022~hmac=a273f0e71285ea50f24a01f509cbe5517f177b43144e13a18404927311a3708c",
    },
    {
      name: "Wick",
      position: "FT CEO",
      description: "I like how he works, He is a real pro",
      img: "https://img.freepik.com/free-photo/beautiful-shot-stone-wall-natural-landscape_181624-58807.jpg?w=1380&t=st=1680985472~exp=1680986072~hmac=f79451e70193b959e5592213971aaf090a832e919c7b0f0c6ee92687b555f2a7",
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    // slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container testimonial-section" id="testimonial">
      <div className="section-title">
        <h5>Testimonial</h5>
        <span className="line"></span>
      </div>

      <div className="testimonial-slider">
        <Slider {...settings}>
          {data.map((item, index) => (
            <div className="content-slider-main" key={index}>
              <div className="content-slider" key={index}>
                <img
                  src={item.img}
                  alt="testimonial"
                  className="center-image"
                />
                <p>{item.name}</p>
                <p>{item.position}</p>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
