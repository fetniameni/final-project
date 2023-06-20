import React, { useEffect, useState } from 'react'
import SideBar from './SideBar';
import axios from 'axios';
import Table3 from '../../Components/Table3';

function FavoritesMovies(){
  const [favorites,setFavorites]=useState([])

  useEffect(()=>{
    axios.get("http://localhost:5555/api/favorite/")
    .then((res)=>{
      setFavorites(res.data.favorites)
       console.log(res.data.favorites)
    })
  },[])
  
  return (
    <SideBar>
        <div className='flex flex-col gap-6'>
            <div className='flex-btn gap-2'>
                <h2 className='text-xl font-bold'>Favorites Movies</h2>
                <button className='bg-main font-medium transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded' >
                    Delete All
                </button>
            </div>
            
            <Table3 data={favorites} admin={false}/>
            
        </div>
    </SideBar>
  )
}

export default FavoritesMovies