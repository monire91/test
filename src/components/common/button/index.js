import React from 'react';

const Button = ({title}) => {

    return (
        <button className='bg-blue text-white rounded-100 h-33 w-74'>
            <span className='text-16 leading-19'>{title}</span>
        </button>
    );
};

export default Button;