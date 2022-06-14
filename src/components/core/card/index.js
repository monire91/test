import React from 'react';
import img from '../../../assets/images/card-image-1.png'
import calendar from '../../../assets/images/icons/calendar.svg'

const Card = () => {
    return (
        <div className='w-295 h-195 flex border-grey1 border-1 bg-grey2 rounded-md'>
            <img className='my-3 ml-1' src={img}/>
            <div className='flex flex-col pt-4 pl-11 pr-31 pb-13'>
                <span className='font-bold h-44'>Inception</span>
                <div className='mt-64'>
                    <div className='flex mb-3.5'>
                        <img className='mr-7' src={calendar}/>
                        <span className='text-xs text-black'>2014-10-22</span>
                    </div>
                    ff
                </div>
            </div>
        </div>
    );
};

export default Card;