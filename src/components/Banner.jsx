/* eslint-disable react/no-unescaped-entities */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Typewriter } from 'react-simple-typewriter'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Banner = () => {
    return (
        <div>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className='relative'>
                    <div className='absolute w-full h-full grid place-items-center bg-[#00000020]'>
                        <h1 className='text-5xl text-emerald-400 font-bold drop-shadow-lg text-shadow'><span className='text-7xl'> Quest </span> <br /><br />Don't Just Dream It, {' '}

                            <Typewriter
                                words={['Plan', 'Explore', 'Live', 'Quest']}
                                loop={0}
                                cursor
                                cursorStyle='_ '
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />

                             It!</h1>
                    </div>
                    <img src="https://i.ibb.co/d5R3sQB/Group-13-1-1.png" alt="" className='bg-emerald-400' /></SwiperSlide>
                <SwiperSlide className='relative'>
                    <div className='absolute w-full h-full grid place-items-center bg-[#0000002f]'>
                        <h1 className='text-5xl text-emerald-400 font-bold drop-shadow-lg text-shadow'><span className='text-7xl'>- Quest -</span> <br /><br />Seamless Travel, Unforgettable Memories.</h1>
                    </div>
                    <img src="https://i.ibb.co/RzmQWn4/Group-39.png" alt="" className='bg-emerald-400' /></SwiperSlide>
                <SwiperSlide className='relative'>
                    <div className='absolute w-full h-full grid place-items-center bg-[#0000003d]'>
                        <h1 className='text-5xl text-emerald-400 font-bold drop-shadow-lg text-shadow'><span className='text-7xl'>- Quest -</span> <br /><br />Exploration Begins From Here!</h1>
                    </div>
                    <img src="https://i.ibb.co/2SppKkz/Group-40.png" alt="" className='bg-emerald-400' /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;