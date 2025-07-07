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
            <main className="relative w-full h-screen">
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
                    className="mySwiper w-full h-full">
                    <SwiperSlide>
                        <img src={slider1} loading='lazy' alt="Slide 1" className="w-full h-full object-cover" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slider2} loading='lazy' alt="Slide 2" className="w-full h-full object-cover" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slider3} loading='lazy' alt="Slide 3" className="w-full h-full object-cover" />
                    </SwiperSlide>
                </Swiper>

                <div className="absolute left-0 top-40 z-10 flex flex-col gap-10 text-white px-15 w-full">
                    <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg w-1/2">
                        Import Export Excellence Beyond Boundaries
                    </h2>
                    <button className="mt-2 px-3 py-5 bg-white hover:bg-[#15716c] hover:text-white font-bold transition text-lg text-black rounded-full shadow-md w-45 cursor-pointer">
                        Learn More
                    </button>
                </div>
            </main>
        </div>
    );
};

export default HeroSection;
