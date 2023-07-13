import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

const Spinner = () => {
    return (
        <div className='flex flex-col gap-2 items-center'>
            <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
            />
            <span className='font-semibold tracking-wider'>Loading...</span>
        </div>
    );
};

export default Spinner;