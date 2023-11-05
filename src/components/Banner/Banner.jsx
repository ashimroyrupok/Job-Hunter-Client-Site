// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import './styles.css';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Banner = () => {
    return (
        <div className='w-full h-[60vh]  my-11'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='w-full relative'>
                        <div className='absolute h-[70vh] w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]'>
                            <div className='absolute top-[40%] left-[10%]'>
                                <h3 className='text-white font-bold text-3xl'>100,000 <span className='text-[#327289] text-5xl -ml-3 '>+</span> Job</h3>
                                <p className='text-white text-4xl font-semibold  text-slate-300'>is waiting for you</p>
                            </div>
                        </div>
                        <div>
                            <img className='w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]  bg-cover bg-no-repeat h-[60vh]  ' src="https://img.freepik.com/free-photo/close-up-report-keyboard_1098-2562.jpg?w=1380&t=st=1699174418~exp=1699175018~hmac=a7fd63523c2490ece8dae21d3244e9dac729a82fe235c698f881d588feed70ba" alt="" />
                        </div>
                        <div className='w-full   flex lg:items-center justify-around bg-black opacity-30 h-[10vh] absolute bottom-0'>
                            <div className='text-white ml-6 lg:mt-4'> 
                                <h2 className=' text-sm lg:text-xl text-white font-bold'>LEADING THE INDUSTRY</h2>
                                <p className='text-sm'>ABOUT US</p>
                             </div>
                            <div className='text-white lg:mt-4 '> 
                                <h2 className='text-sm  lg:text-xl text-white font-bold'>HIGH AVERAGE SALARY</h2>
                                <p className='text-sm'>LEARN MORE</p>
                             </div>
                            <div className='text-white  lg:mt-4 '> 
                                <h2 className='text-sm  lg:text-xl text-white font-bold'>2,500,000+ CANDIDATES</h2>
                                <p className='text-sm'>OUR COMMUNITY</p>
                             </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full relative'>
                        <div className='absolute h-[70vh] w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]'>
                            <div className='absolute top-[40%] left-[10%]'>
                                <h3 className='text-white font-bold text-3xl'>100,000 <span className='text-[#327289] text-5xl -ml-3 '>+</span> Job</h3>
                                <p className='text-white text-4xl font-semibold text-slate-300'>is waiting for you</p>
                            </div>
                        </div>
                        <div>
                            <img className='w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]  bg-cover bg-no-repeat h-[60vh]  ' src="https://i.ibb.co/S0jswSv/startup-business-53876-137642.jpg" alt="" />
                        </div>
                        <div className='w-full   lg:items-center flex justify-around bg-black opacity-30 h-[10vh] absolute bottom-0'>
                            <div className='text-white ml-6 lg:mt-4'> 
                                <h2 className='text-sm lg:text-xl text-white font-bold'>LEADING THE INDUSTRY</h2>
                                <p className='text-sm'>ABOUT US</p>
                             </div>
                            <div className='text-white lg:mt-4 '> 
                                <h2 className='text-sm lg:text-xl text-white font-bold'>HIGH AVERAGE SALARY</h2>
                                <p className='text-sm'>LEARN MORE</p>
                             </div>
                            <div className='text-white lg:mt-4 '> 
                                <h2 className='text-sm lg:text-xl text-white font-bold'>2,500,000+ CANDIDATES</h2>
                                <p className='text-sm'>OUR COMMUNITY</p>
                             </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full relative'>
                        <div className='absolute h-[70vh] w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]'>
                            <div className='absolute top-[40%] left-[10%]'>
                                <h3 className='text-white font-bold text-3xl'>100,000 <span className='text-[#327289] text-5xl -ml-3 '>+</span> Job</h3>
                                <p className='text-white text-4xl font-semibold  text-slate-300'>is waiting for you</p>
                            </div>
                        </div>
                        <div>
                            <img className='w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]  bg-cover bg-no-repeat h-[60vh]  ' src="https://i.ibb.co/fGW5Gpg/1000-F-625078650-O3-LHx-Y82-SS3-Ue-Lf-BKXl71tlsl-WZNu5-Zt.jpg" alt="" />
                        </div>
                        <div className='w-full   lg:items-center flex justify-around bg-black opacity-30 h-[10vh] absolute bottom-0'>
                            <div className='text-white ml-6 lg:mt-4'> 
                                <h2 className='text-sm lg:text-xl text-white font-bold'>LEADING THE INDUSTRY</h2>
                                <p>ABOUT US</p>
                             </div>
                            <div className='text-white lg:mt-4 '> 
                                <h2 className='text-sm lg:text-xl text-white font-bold'>HIGH AVERAGE SALARY</h2>
                                <p>LEARN MORE</p>
                             </div>
                            <div className='text-white lg:mt-4 '> 
                                <h2 className='text-sm lg:text-xl text-white font-bold'>2,500,000+ CANDIDATES</h2>
                                <p>OUR COMMUNITY</p>
                             </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full relative'>
                        <div className='absolute h-[70vh] w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]'>
                            <div className='absolute top-[40%] left-[10%]'>
                                <h3 className='text-white font-bold text-3xl'>100,000 <span className='text-[#327289] text-5xl -ml-3 '>+</span> Job</h3>
                                <p className='text-white text-4xl font-semibold text-slate-300'>is waiting for you</p>
                            </div>
                        </div>
                        <div>
                            <img className='w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]  bg-cover bg-no-repeat h-[60vh]  ' src="https://i.ibb.co/F07X4dw/smiling-diverse-businesswomen-shake-hands-group-meeting-deal-concept-1163-4686.jpg" alt="" />
                        </div>
                        <div className='w-full   lg:items-center flex justify-around bg-black opacity-30 h-[10vh] absolute bottom-0'>
                            <div className='text-white lg:mt-4'> 
                                <h2 className='text-sm lg:text-xl text-white font-bold'>LEADING THE INDUSTRY</h2>
                                <p>ABOUT US</p>
                             </div>
                            <div className='text-white ml-6 lg:mt-4 '> 
                                <h2 className='text-sm lg:text-xl text-white font-bold'>HIGH AVERAGE SALARY</h2>
                                <p>LEARN MORE</p>
                             </div>
                            <div className='text-white lg:mt-4 '> 
                                <h2 className='text-sm lg:text-xl text-white font-bold'>2,500,000+ CANDIDATES</h2>
                                <p>OUR COMMUNITY</p>
                             </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;