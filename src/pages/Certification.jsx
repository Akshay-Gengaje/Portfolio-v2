import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./certification.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

const Certification = () => {
  const images = [
    "/spring_boot.jpg",
    "/mysql.jpg",
    "/nodejs.jpg",
    "/react.jpg",
    "/dsa.jpg",
    "/responsiveweb.jpg",
    "/java.jpg",
  ];
  return (
    <div className="h-screen max-h-screen w-full">
      <div className="h-full max-w-full flex flex-col items-center justify-evenly">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-2">
          Certifications
        </h1>
        {/* <div className="flex flex-wrap justify-center w-[80%] text-4xl md:text-6xl lg:text-8xl gap-10 shadow-lg"> */}
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          initialSlide={0}
          spaceBetween={10}
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 50,
            modifier: 1,
            slideShadows: true,
          }}
          //   pagination={true}
          modules={[EffectCoverflow, Pagination]}
        >
          {images.map((image, index) => (
            <SwiperSlide className="h-[40vh] lg:h-[60vh] lg:w-fit" key={index}>
              <img
                src={"images" + `${image}`}
                className=" lg:w-full h-full object-contain"
                alt={image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Certification;
