import React, {useEffect, useState} from 'react';
import Button from "../../components/common/button";
import Card from "../../components/core/card";
import API from "../../api";

const Home = () => {
    const [movies, setMovies] = useState('')
    const [genres, setGenres] = useState('')

    useEffect(() => {
        const getMovies = API.get(`discover/movie?api_key=65c777caa18dc18e557b9e42dbc46d62`)
        const getGenres = API.get(`/genre/movie/list?api_key=65c777caa18dc18e557b9e42dbc46d62`)

        Promise.all([getGenres, getMovies]).then((values) => {
            setGenres(values[0].data.genres)
            setMovies(values[1].data)
        });
    }, [])

    return (
        <div>
            <div className='bg-grey rounded-md pt-27 pb-25 pl-81 pr-62 flex items-center mb-119'>
                <span className='mr-29'>Search by release date:</span>
                <input className='w-221 h-33 border-grey1 border-1 p-3'/>
                <div className='ml-auto'>
                    <Button title='Search'/>
                </div>
            </div>
            <div className='flex flex-wrap movies'>
                {movies?.results?.map(item => (
                    <Card key={item.id} movie={item} genres={genres}/>
                ))}
            </div>
        </div>
    );
};

export default Home;