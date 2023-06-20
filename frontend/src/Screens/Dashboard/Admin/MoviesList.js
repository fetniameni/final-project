import React, { useEffect, useState } from 'react'
import SideBar from '../SideBar'
import Table from '../../../Components/Table'
import axios from 'axios'

function MoviesList() {
  const [data,setData]=useState([])

  useEffect(()=>{
    axios.get("http://localhost:5555/api/movie/getmovie")
    .then((res)=>{
      setData(res.data)
       console.log(res.data.movies)
    })
  },[])
  
  
  return (
    <SideBar>
        <div className='flex flex-col gap-6'>
            <div className='flex-btn gap-2'>
                <h2 className='text-xl font-bold'>Movies List</h2>
                <button className='bg-main font-medium transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded'>
                    Delete All
                </button>
            </div>
            <Table data={data} admin={true} />
            
        </div>
    </SideBar>
  )
}

export default MoviesList