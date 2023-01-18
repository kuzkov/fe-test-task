import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import { ReactComponent as ArrowRightIcon } from "../../assets/arrow-right.svg";
import classNames from "classnames";
import {
  Children,
  cloneElement,
  isValidElement,
  PropsWithChildren,
} from "react";
import "./Slider.scss";

import "swiper/css";
import "swiper/css/pagination";

function Slider({ children }: PropsWithChildren) {
  const mappedChildren = Children.map(children, (child) => {
    if (!isValidElement(child)) {
      return null;
    }

    return (
      <SwiperSlide className="Slider__slide">{cloneElement(child)}</SwiperSlide>
    );
  });

  return (
    <Swiper
      className="Slider"
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      pagination={{ clickable: true }}
      slidesPerView="auto"
      navigation={{
        prevEl: ".swiper-prev-button",
        nextEl: ".swiper-next-button",
      }}
    >
      {mappedChildren}
      <button
        className={classNames(
          "swiper-prev-button",
          "Slider__button",
          "Slider__button--prev"
        )}
      >
        <ArrowRightIcon />
      </button>
      <button
        className={classNames(
          "swiper-next-button",
          "Slider__button",
          "Slider__button--next"
        )}
      >
        <ArrowRightIcon />
      </button>
    </Swiper>
  );
}

export default Slider;
