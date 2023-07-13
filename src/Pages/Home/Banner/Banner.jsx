import React from 'react';

const Banner = () => {
    return (
        <div>
            <header className='relative'>
            <img src="./banner-bg-img.avif" alt="" className='absolute w-full h-full -z-50 ' />
            <div className='absolute w-full h-full bg-[#0000008c] -z-40'></div>                
                <div className='custom-container py-20'>
                <div className='md:w-1/2 text-[#fff]'>
                        <h1 className='text-4xl md:text-7xl text-center md:text-left mt-6 md:mt-0 font-extrabold'>
                            Order Your <br /> Favourite Food <span className='text-[#9873FF]'>Now    </span>
                        </h1>
                        <p className='text-white text-lg font-medium mt-8 text-center md:text-left'>
                            Order your food from us. This biggest restaurant in the internet where you will get the most delicious food. Easy order and ASAP delivery. Order now.
                        </p>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Banner;