import React from 'react';

const SectionTitle = ({title, subTitle}) => {
    return (
        <div className='text-center my-12 space-y-2'>
            <h1 className='text-5xl'>{title}</h1>
            <p className='text-slate-600 dark:text-slate-400 tracking-wide'>{subTitle}</p>
        </div>
    );
};

export default SectionTitle;