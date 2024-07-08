// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import 'swiper/css/navigation';
// import required modules
import { FreeMode, Pagination, Navigation  } from "swiper/modules";

import sliderImg1 from "../../public/Sajek.png";
import sliderImg2 from "../../public/Sreemongol.png";
import sliderImg3 from "../../public/sundorbon.png";

const Slider = () => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[FreeMode, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide style={{}}>
        {({isActive}) => isActive ? <img className="border-4 border-[#F9A51A] rounded-3xl" src={sliderImg1} alt="" /> : <img src={sliderImg1} alt="" />}
      </SwiperSlide>
      <SwiperSlide>
      {({isActive}) => isActive ? <img className="border-4 border-[#F9A51A] rounded-3xl" src={sliderImg2} alt="" /> : <img src={sliderImg2} alt="" />}
      </SwiperSlide>
      <SwiperSlide>
      {({isActive}) => isActive ? <img className="border-4 border-[#F9A51A] rounded-3xl" src={sliderImg3} alt="" /> : <img src={sliderImg3} alt="" />}
      </SwiperSlide>
      <SwiperSlide>
      {({isActive}) => isActive ? <img className="border-4 border-[#F9A51A] rounded-3xl" src={sliderImg1} alt="" /> : <img src={sliderImg1} alt="" />}
      </SwiperSlide>
      <SwiperSlide>
      {({isActive}) => isActive ? <img className="border-4 border-[#F9A51A] rounded-3xl" src={sliderImg2} alt="" /> : <img src={sliderImg2} alt="" />} 
      </SwiperSlide>
      <SwiperSlide>
      {({isActive}) => isActive ? <img className="border-4 border-[#F9A51A] rounded-3xl" src={sliderImg3} alt="" /> : <img src={sliderImg3} alt="" />}
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
