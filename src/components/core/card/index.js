import React from 'react';
import img from '../../../assets/images/card-image-1.png'
import calendar from '../../../assets/images/icons/calendar.svg'
import {Link} from "react-router-dom";

const Card = ({movie}) => {
    console.log("movie",movie)
    return (
        <div className='w-295 h-195 flex border-grey1 border-1 bg-grey2 rounded-md'>
            {/*<Link to={`/post/${el.id}`}>*/}
            <Link to={`/${movie.id}`}>
            <img className='my-3 ml-1' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} style={{width:'125px'}}/>
            <div className='flex flex-col pt-4 pl-11 pr-31 pb-13'>
                <span className='font-bold h-44'>{movie.title}</span>
                <div className='mt-64'>
                    <div className='flex mb-3.5'>
                        <img className='mr-7' src={calendar}/>
                        <span className='text-xs text-black'>2014-10-22</span>
                    </div>
                    ff
                </div>
            </div>
            </Link>
        </div>
    );
};

export default Card;