import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import slider1 from '../assets/HeroImages/slider1.jpg';
import slider2 from '../assets/HeroImages/slider2.jpg';
import slider3 from '../assets/HeroImages/slider3.jpg';

const HeroSection = () => {
    return (
        <div>
            <main className="relative w-full lg:h-screen">
                <Swiper
                    spaceBetween={30}
                    effect="fade"
                    navigation={true}
                    speed={2000}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, EffectFade, Navigation, Pagination]}
                    className="mySwiper w-full h-full"
                >
                    <SwiperSlide>
                        <img src={slider1} loading="lazy" alt="Slide 1" className="w-full lg:h-full  object-cover" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slider2} loading="lazy" alt="Slide 2" className="w-full lg:h-full object-cover" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slider3} loading="lazy" alt="Slide 3" className="w-full lg:h-full object-cover" />
                    </SwiperSlide>
                </Swiper>

                {/* Text part */}
                <div className="absolute inset-0 z-10 flex items-center justify-start px-4 sm:px-10">
                    <div className="text-white w-full  lg:max-w-2xl">
                        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg leading-tight w-[250px] md:w-full">
                            Import Export Excellence <br className="hidden sm:block" /> Beyond Boundaries
                        </h2>
                        <button className="mt-4 px-6 py-3 sm:px-8 sm:py-4 bg-white hover:bg-[#15716c] hover:text-white font-semibold text-base sm:text-lg text-black rounded-full shadow-md transition-all duration-300">
                            Learn More
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default HeroSection;
