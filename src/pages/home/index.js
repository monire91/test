import React, {useEffect, useState} from 'react';
import Button from "../../components/common/button";
import Card from "../../components/core/card";
import API from "../../api";

const Home = () => {
    const [movies,setMovies]=useState('')
    useEffect(() => {
        API.get()

        API.get(`discover/movie?api_key=65c777caa18dc18e557b9e42dbc46d62`)
            .then(res => {
                setMovies(res.data)
            })
    }, [])
    // console.log("movies",movies.results)
    return (
        <div>
           <div className='bg-grey rounded-md pt-27 pb-25 pl-81 pr-62 flex items-center mb-119' >
               <span className='mr-29'>Search by release date:</span>
               <input className='w-221 h-33 border-grey1 border-1 p-3'/>
               <div className='ml-auto'>
                   <Button title='Search'/>
               </div>
           </div>
            {movies?.results?.map(item=>(
                <Card movie={item}/>
            ))}
        </div>
    );
};

export default Home;