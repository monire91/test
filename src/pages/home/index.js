import React from 'react';
import Button from "../../components/common/button";
import Card from "../../components/core/card";

const Home = () => {
    return (
        <div>
           <div className='bg-grey rounded-md pt-27 pb-25 pl-81 pr-62 flex items-center mb-119' >
               <span className='mr-29'>Search by release date:</span>
               <input className='w-221 h-33 border-grey1 border-1 p-3'/>
               <div className='ml-auto'>
                   <Button title='Search'/>
               </div>
           </div>
            <Card/>
        </div>
    );
};

export default Home;