
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const slidesData = [
    {
        link: "https://www.keenon.com/en/solution/catering/index.html",
        desktopImg: "https://images2.imgbox.com/70/de/pfaTT16n_o.jpg",
        mobileImg: "https://images2.imgbox.com/70/de/pfaTT16n_o.jpg",
        alt: "Robots serving in a restaurant, showcasing the catering solution."
    },
    {
        link: "https://www.keenon.com/en/solution/hotel/index.html",
        desktopImg: "https://images2.imgbox.com/db/cd/3JIWtIyz_o.jpg",
        mobileImg: "https://images2.imgbox.com/db/cd/3JIWtIyz_o.jpg",
        alt: "A delivery robot in a hotel hallway, showcasing the hotel solution."
    }
];

const Solutions: React.FC = () => {
    return (
        <section id="solutions" className="bg-trust-navy">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                className="w-full"
                a11y={{
                    prevSlideMessage: 'Previous slide',
                    nextSlideMessage: 'Next slide',
                }}
            >
                {slidesData.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <a className="block w-full h-full cursor-pointer" href={slide.link} target="_blank" rel="noopener noreferrer" aria-label={`Learn more about our ${slide.alt}`}>
                            <picture>
                                <source srcSet={slide.desktopImg} media="(min-width: 768px)" />
                                <source srcSet={slide.mobileImg} media="(max-width: 767px)" />
                                <img className="w-full object-cover" src={slide.mobileImg} alt={slide.alt} />
                            </picture>
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Solutions;
