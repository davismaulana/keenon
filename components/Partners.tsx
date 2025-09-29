
import React from 'react';
import Section from './Section';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const partnerLogos = [
    'https://static.keenon.com/uploads/2024/12/30/936e00de2b5a44708fd0af378e8fdcb2.jpg?x-oss-process=image/format,webp',
    'https://static.keenon.com/uploads/2024/12/30/a182882c18c74868ba8b8fd332a20557.jpg?x-oss-process=image/format,webp',
    'https://static.keenon.com/uploads/2024/12/30/245f31b7a97d4cd68ef6f4b97e81bdcc.jpg?x-oss-process=image/format,webp',
    'https://static.keenon.com/uploads/2024/12/30/2bcf616b698b4fdfb9581bc118658ca1.jpg?x-oss-process=image/format,webp',
    'https://static.keenon.com/uploads/2024/12/30/73109ca376f44d7fbedda46e761c3ed8.jpg?x-oss-process=image/format,webp',
    'https://static.keenon.com/uploads/2024/12/30/87d15881e2914a96b451dc6eca029d3f.jpg?x-oss-process=image/format,webp',
    'https://static.keenon.com/uploads/2024/12/30/10b9cf3900074417b250e492459c8006.jpg?x-oss-process=image/format,webp',
    'https://static.keenon.com/uploads/2024/12/30/0230030f9106439a95102363d5c2bdb8.jpg?x-oss-process=image/format,webp',
    'https://static.keenon.com/uploads/2024/12/30/54618ae886cd40cf81223f28d0eac947.jpg?x-oss-process=image/format,webp',
    'https://static.keenon.com/uploads/2024/12/30/e86ce8aedfd84db1a689f013d21796f9.jpg?x-oss-process=image/format,webp',
    'https://static.keenon.com/uploads/2024/12/30/412f910b367f47dfbee2131547124bf5.jpg?x-oss-process=image/format,webp',
    'https://static.keenon.com/uploads/2024/12/30/6f8da5275ec8461cb8ab47251657407b.jpg?x-oss-process=image/format,webp',
    'https://static.keenon.com/uploads/2024/12/30/e8bf122bfdd449279ee1ea8772850cd7.jpg?x-oss-process=image/format,webp',
    'https://static.keenon.com/uploads/2024/12/30/71d3dbd7c42d40799ed5efebcc25ad9c.jpg?x-oss-process=image/format,webp',
    'https://static.keenon.com/uploads/2024/12/30/4f72ec37a7f049998b5d80a2061a544c.jpg?x-oss-process=image/format,webp',
    'https://static.keenon.com/uploads/2024/12/30/a7bc720d5fc34187842dea1acf256cf1.jpg?x-oss-process=image/format,webp',
    'https://static.keenon.com/uploads/2024/12/30/9bd1083972644d52a7554218e05fb3fd.jpg?x-oss-process=image/format,webp',
    'https://static.keenon.com/uploads/2024/12/30/e9a6af202c7247e4bed7b925d4b1d95c.jpg?x-oss-process=image/format,webp'
];

const Partners: React.FC = () => {
    return (
        <Section className="bg-trust-navy" noXPadding>
            <div className="flex flex-col items-center">
                <h2 className="w-full text-3xl lg:text-4xl text-center pb-12 lg:pb-16 font-bold font-display text-gray-100 reveal px-6 lg:px-8">
                    Businesses Grow with Xinyi Trading Group
                </h2>
                <div className="w-full">
                    <Swiper
                        modules={[Autoplay]}
                        loop={true}
                        autoplay={{
                            delay: 1,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        speed={5000}
                        allowTouchMove={false}
                        breakpoints={{
                            320: { slidesPerView: 3, spaceBetween: 30 },
                            640: { slidesPerView: 4, spaceBetween: 40 },
                            1024: { slidesPerView: 6, spaceBetween: 50 },
                            1280: { slidesPerView: 8, spaceBetween: 60 },
                        }}
                        className="w-full"
                    >
                        {/* Doubling the logos array helps create a more seamless loop in the marquee effect */}
                        {[...partnerLogos, ...partnerLogos].map((logoUrl, index) => (
                            <SwiperSlide key={index} className="flex items-center justify-center">
                                <div className="h-24 flex items-center justify-center">
                                    <img
                                        src={logoUrl}
                                        alt={`Logo of partner ${index + 1}`}
                                        className="max-h-10 w-auto object-contain filter-to-white"
                                        loading="lazy"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </Section>
    );
};

export default Partners;
