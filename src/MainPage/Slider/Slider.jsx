import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import style from './slider.module.css';
import MainButton from '../../../components/MainButton/MainButton';

const MainSlider = () => {

    return (
        <Swiper autoplay={{ delay: 1000 }} >
            <SwiperSlide className={style.swiper}>
                <img className={style.sliderImg} src="/img/mainHeadImg.png" alt="" />
                <div className={style.sliderDescription}>
                    <h3>welcome</h3>
                    <h5>The seasons are changing and so are our collections</h5>
                    <MainButton link="/" buttonText="DISCOVER NOW"/>
                </div>
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
        </Swiper>
    );
};

export default MainSlider;
