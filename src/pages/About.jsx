import aboutImage from '../assets/Pages/default-header-img.jpg';
import why from '../assets/Pages/why.webp';
import what from '../assets/Pages/what.webp';
import how from '../assets/Pages/how.png';
import team1 from '../assets/Pages/demo-team-one.avif';
import team2 from '../assets/Pages/demo-team-two.webp';
import team3 from '../assets/Pages/demo-team-three.avif';
import team4 from '../assets/Pages/women-team-one.avif';
import team5 from '../assets/Pages/women-team-two.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import { Helmet } from 'react-helmet';

// Reusable card component
const InfoCard = ({ title, text, image }) => (
    <div className='rounded-2xl bg-gradient-to-r from-[#3EB492] via-[#07ecab] to-[#51c7a5] w-full'>
        <div className='flex flex-col lg:flex-row px-10 py-10'>
            <div className='flex flex-col gap-5 lg:w-1/2 text-white'>
                <h2 className='text-3xl'>{title}</h2>
                <p className='text-xl'>{text}</p>
            </div>
            <img className='hidden lg:block lg:w-1/2' src={image} loading='lazy' alt='' />
        </div>
    </div>
);

const teamMembers = [
    {
        name: 'Mitchel Johnson',
        role: 'Founder & CEO',
        image: team1,
        bio: 'Sarah brings over 15 years of experience in global logistics and international trade.',
    },
    {
        name: 'David Lee',
        role: 'Operations Manager',
        image: team2,
        bio: 'David ensures everything runs smoothly and efficiently across all departments.',
    },
    {
        name: 'Alex Gomez',
        role: 'Customer Relations',
        image: team3,
        bio: 'Maria is passionate about helping customers with import-export solutions.',
    },
    {
        name: 'Serena Gomez',
        role: 'HR',
        image: team5,
        bio: 'Serena Gomez is one of the best hr to handle all kinds of requritments.',
    },
    {
        name: 'Linda Gomez',
        role: 'Business Excutive',
        image: team4,
        bio: 'Linda Gomez has a strong business idea to grow the company.',
    },
];

const About = () => {
    const missionText = 'We are passionate about empowering individuals to transform their lives through the power of global trade. We believe that everyone should have access to seamless, affordable, and reliable import-export services, regardless of scale.';
    return (
        <div>
            <Helmet>
                <title>About | Eximport</title>
            </Helmet>
            <main>
                <div className='relative'>
                    <img src={aboutImage}
                        sizes="(max-width: 600px) 480px, (max-width: 1200px) 800px, 1200px" loading='lazy' alt='about-image' className='w-full ' />
                    <h2 className='absolute inset-0 flex items-center justify-center text-white text-3xl sm:text-4xl md:text-5xl font-bold  bg-opacity-40'>
                        About Us
                    </h2>
                </div>

                {/* Mission Section */}
                <section>
                    <div className='flex items-center justify-center gap-3 pt-10'>
                        <h2 className='text-center font-bold text-xl md:text-3xl lg:text-4xl'>Our Mission</h2>
                        <p className='w-15 h-[2px] bg-black'></p>
                    </div>

                    <div className='mx-5 lg:mx-20 my-10 flex flex-col gap-10 '>
                        <InfoCard title='Why' text={missionText} image={why} />
                        <div className='flex flex-col lg:flex-row gap-10'>
                            <InfoCard title='What' text={missionText} image={what} />
                            <InfoCard title='How' text={missionText} image={how} />
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className='bg-gray-100 py-16'>
                    <div className='text-center mb-12'>
                        <h2 className='text-3xl md:text-4xl font-bold mb-4'>Meet Our Team</h2>
                        <p className='text-gray-600 max-w-xl mx-auto'>
                            Our dedicated professionals who make global trade simple and effective.
                        </p>
                    </div>

                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                        }}
                        pagination={{ clickable: true }}
                        modules={[EffectCoverflow, Pagination, Autoplay]}
                        className='max-w-6xl mx-auto'>
                        {teamMembers.map((member, idx) => (
                            <SwiperSlide
                                key={idx}
                                style={{ width: '300px' }} // control slide width here
                                className='bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center'>
                                <img src={member.image}
                                    alt={member.name}
                                    className='w-32 h-32 object-cover rounded-full mb-4 mx-auto'
                                    loading='lazy' />
                                <h3 className='text-xl font-semibold text-gray-800'>{member.name}</h3>
                                <p className='text-sm text-teal-600 font-medium mb-2'>{member.role}</p>
                                <p className='text-sm text-gray-600'>{member.bio}</p>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </section>


            </main>
        </div>
    );
};

export default About;
