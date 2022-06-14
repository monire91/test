import React from 'react';
import API from "../../../api";

const Pagination = ({currentPage, setCurrentPage,setMovies}) => {

    const getPage = (pageNumber) => {
        API.get(`discover/movie?page=${pageNumber}`).then(res => {
            setMovies(res.data)
            setCurrentPage(pageNumber)
        })
    }

    return (
        <div className='flex justify-center mb-14'>
            <button className={`font-bold ${currentPage > 1 ? 'active text-blue1' : 'pointer-events-none text-grey3'}`}
                    onClick={() => getPage(currentPage - 1)}>Previous Page
            </button>
            <div className='bg-grey3 h-40 w-1 mx-30'/>
            <button className='font-bold text-blue1' onClick={() => getPage(currentPage + 1)}>Next Page</button>
        </div>
    );
};

export default Pagination;