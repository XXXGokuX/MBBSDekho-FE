import React from 'react';
import './Home.css'
import Grid1 from "./HomeComponents/Homepage/Grid1";
import SearchForm from "./HomeComponents/Homepage/Grid3";
import Patner from "./HomeComponents/PatnerFolder/Patner";
import PopluarCountries from "./HomeComponents/Countries/PopluarCountries";
import Blog from "./HomeComponents/Blog/Blog";
import Grid2 from "./HomeComponents/Homepage/Grid2";
import Information from './HomeComponents/Info/Info';
import MyFooter from "../../components/Fotter/Fotter";



const MyHome = () => {
  return (
    <>
     <div className="">      
      <div className="grid grid-cols-6 custom-div xl:h-[600px] md:h-[25rem] sm:h-[17rem] h-[530px]">
        <div  className="col-span-2 ">
          <Grid1 />
        </div>
        <div className="col-span-2 ">
          <Grid2 />
        </div>
        <div  className="col-span-2 hidden xl:block">
          <SearchForm />
        </div>
      </div>
      <div className='flex items-center justify-center bg-gray-200 py-8 xl:hidden m-6'>
          <SearchForm />
      </div>
      
      <Patner />
      <PopluarCountries />
      <Information />
      <div className='m-6'>
      <Blog />

      </div>
      </div>
      <MyFooter />
    </>
  )
}

export default MyHome
