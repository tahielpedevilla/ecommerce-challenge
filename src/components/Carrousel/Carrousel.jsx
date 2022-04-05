import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Navigation} from "swiper";
import "./Carrousel.scss";
import "swiper/css";
import "swiper/css/navigation";

SwiperCore.use([Navigation]);

const Carrousel = ({product}) => {
  return (
    <>
      <Swiper className="mySwiper" navigation={true}>
        {product.images.map((image, i) => (
          <SwiperSlide key={i}>
            <img alt={image} src={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carrousel;
