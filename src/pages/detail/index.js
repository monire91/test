import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import API from "../../api";
import Button from "../../components/common/button";

const Detail = () => {
    let { id } = useParams();
    const [movie,setMovie]=useState('')
    useEffect(() => {
        API.get()

        API.get(`/movie/${id}?api_key=65c777caa18dc18e557b9e42dbc46d62`)
            .then(res => {
                console.log("single movie res: ",res.data)
                setMovie(res.data)
            })
    }, [])
    return (
        <div>
            <div className='bg-grey rounded-md pt-27 pb-25 pl-81 pr-62 flex items-center mb-119' >
                <Button title='back'/>
                <div>
                    <h3>{movie.title}</h3>
                    <p>{movie.tagline}</p>
                </div>

            </div>
            <div className='flex'>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt=""/>
                <div className='w-full'>
                    <div className='flex w-full'>
                        <p className='mr-auto'>Budget</p>
                        <p>{movie.budget}</p>
                    </div>
                    <div className='flex w-full'>
                        <p className='mr-auto'>Revenue</p>
                        <p>{movie.revenue}</p>
                    </div>
                    <div className='flex w-full'>
                        <p className='mr-auto'>Release Date</p>
                        <p>{movie.release_date}</p>
                    </div>
                    <div className='flex w-full'>
                        <p className='mr-auto'>Runtime</p>
                        <p>{movie.runtime}</p>
                    </div>
                    <div className='flex w-full'>
                        <p className='mr-auto'>Score</p>
                        <p>{movie.vote_average}{` (${movie.vote_count} votes)`}</p>
                    </div>
                    <div className='flex w-full'>
                        <p className='mr-auto'>Generes</p>
                        {movie?.genres?.map(item=>(
                            <span>{` ${item.name}, `}</span>
                        ))}
                    </div>
                </div>
            </div>
            detail page
            {id}
        </div>
    );
};

export default Detail;