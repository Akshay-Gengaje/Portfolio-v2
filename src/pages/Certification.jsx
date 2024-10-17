import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles/Certification.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

const Certification = () => {
  return (
    <div className="h-screen max-h-screen w-full">
      <div className="h-full max-w-full flex flex-col items-center justify-evenly">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-2">Certifications</h1>
        {/* <div className="flex flex-wrap justify-center w-[80%] text-4xl md:text-6xl lg:text-8xl gap-10 shadow-lg"> */}
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
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
          <SwiperSlide className="h-[60vh] w-fit">
            <img
              src="/images/spring_boot.jpg"
              className="w-fit h-full object-contain"
              alt="spring boot"
            />
          </SwiperSlide>
          <SwiperSlide className="h-[60vh] w-fit">
            <img
              src="/images/spring_boot.jpg"
              className="w-fit h-full object-contain"
              alt="spring boot"
            />
          </SwiperSlide>
          <SwiperSlide className="h-[60vh] w-fit">
            <img
              src="/images/spring_boot.jpg"
              className="w-fit h-full object-contain"
              alt="spring boot"
            />
          </SwiperSlide>
        </Swiper>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Certification;
