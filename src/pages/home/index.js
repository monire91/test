import React, {useEffect, useState} from 'react';
import Button from "../../components/common/button";
import Card from "../../components/core/card";
import API from "../../api";
import Pagination from "../../components/core/pagination";

const Home = () => {
    const [movies, setMovies] = useState('')
    const [genres, setGenres] = useState('')
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        const getMovies = API.get(`discover/movie`)
        const getGenres = API.get(`/genre/movie/list`)

        Promise.all([getGenres, getMovies]).then((values) => {
            setGenres(values[0].data.genres)
            setMovies(values[1].data)
        });
    }, [])

    return (
        <div className='pb-90'>
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
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} setMovies={setMovies}/>
            <span
                className='text-grey4 block text-center'>Showing results {`${currentPage * 20 - 20 + 1}-${currentPage * 20}`}</span>
        </div>
    );
};

export default Home;