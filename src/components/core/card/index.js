import React, {useEffect, useState} from 'react';
import img from '../../../assets/images/card-image-1.png'
import calendar from '../../../assets/images/icons/calendar.svg'
import {Link} from "react-router-dom";
import API from "../../../api";

const Card = ({movie, genres}) => {

    return (
        <Link to={`/${movie.id}`}>
            <div className='w-295 h-195 flex border-grey1 border-1 bg-grey2 rounded-md mb-38' >
                <img className='my-3 ml-1 w-128 rounded-bl-md rounded-tl-md'
                     src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                <div className='flex flex-col pt-4 pl-11 pr-31 pb-13'>
                    <span className='font-bold h-44 block-ellipsis'>{movie.title}</span>
                    <div className='mt-42'>
                        <div className='flex mb-3.5'>
                            <img className='mr-7' src={calendar}/>
                            <span className='text-xs text-black'>{movie.release_date}</span>
                        </div>
                        {genres.filter((item) => movie.genre_ids.includes(item.id)).map((item) => (
                            <span className='text-xs' key={item.id}>{` ${item.name}, `}</span>))}
                    </div>
                </div>

            </div>
        </Link>
    );
};

export default Card;