'use client';
import 'swiper/css';

import { FC, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { BtnFormControllerList } from './BtnFormController/BtnFormController';
import style from './FormSlider.module.sass';
type TFormSliderStep = {
    listComponent: {
        component: React.ReactNode[];
        title: string;
    }[];
};

export const FormSlider: FC<TFormSliderStep> = ({ listComponent }) => {
    const swiperRef = useRef<any>(null);
    return (
        <section>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                autoHeight={true}
                onSwiper={swiper => (swiperRef.current = swiper)}
            >
                {listComponent.map(({ component, title }, index) => (
                    <SwiperSlide key={index}>
                        <div className={style.formSlide}>
                            <h3>{title}</h3>
                            {component.map((item, idx) => {
                                return <div key={idx}>{item}</div>;
                            })}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <BtnFormControllerList
                prevFunc={() => swiperRef.current?.slidePrev()}
                nextFunc={() => swiperRef.current?.slideNext()}
            />
        </section>
    );
};
