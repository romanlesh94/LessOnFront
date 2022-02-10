import React from "react";
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react/swiper-react';
import { Navigation, A11y } from 'swiper';
import 'swiper/swiper-bundle.css';
import cat from '../../../assets/cat.jpg'

function Cards() {
    const swiper = useSwiper();

    return (
        <div className="swiper-box">
            <Swiper
                // install Swiper modules
                modules={[Navigation, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
            >
                <SwiperSlide>
                    <div className="swiper__card">
                        <div className="swiper__card-box">
                            <img src={cat} alt="cat" className="swiper__image"/>
                            <span className="swiper__word">Cat</span>
                            <span className="swiper__caption">[kaet]</span>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper__card">
                        <div className="swiper__card-box">
                            <img src={cat} alt="cat" className="swiper__image"/>
                            <span className="swiper__word">Cat</span>
                            <span className="swiper__caption">[kaet]</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper__card">
                        <div className="swiper__card-box">
                            <img src={cat} alt="cat" className="swiper__image"/>
                            <span className="swiper__word">Cat</span>
                            <span className="swiper__caption">[kaet]</span>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )

}

export default Cards;