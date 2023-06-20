import React, { useState, useEffect } from 'react'
import Titles from '../Titles'
import { BsCollectionFill } from 'react-icons/bs'
import Movie from '../Movie'
import axios from 'axios'

function PopularMovies({searchQuery}) {
  const [Movies,setMovies]=useState([])

  useEffect(()=>{
    axios.get("http://localhost:5555/api/movie/getmovie")
    .then((res)=>{
   
      setMovies(res.data.movies)
   
      
    })
  },[])
  return (
    <div className='my-16'>
      <Titles title='Popular Movies' Icon={BsCollectionFill} />
      <div className='grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>
        {
         
          Movies.filter((el)=>el.name.toLocaleUpperCase().includes(searchQuery.toLocaleUpperCase())||el.category.toLocaleUpperCase().includes(searchQuery.toLocaleUpperCase())).slice(0, 8).map((movie, index) => (
            <Movie key={index} movie={movie}/>
          )) 
        }
      </div>
    </div>
  )
}

export default PopularMovies