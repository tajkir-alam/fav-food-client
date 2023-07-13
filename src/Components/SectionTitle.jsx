import React from 'react';

const SectionTitle = ({title, subTitle}) => {
    return (
        <div className='text-center'>
            <h1 className='text-5xl'>{title}</h1>
            <p className='text-slate-500 tracking-wide'>{subTitle}</p>
        </div>
    );
};

export default SectionTitle;