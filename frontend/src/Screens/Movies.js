import React, {useEffect, useState} from "react";
import Layout from "../Layout/Layout";
import Filtres from "../Components/Filtres";

import Movie from "../Components/Movie";
import { CgSpinner } from "react-icons/cg";
import axios from "axios";

function MoviesPage() {
  const maxPage = 4;
  const [page, setPage] = useState(maxPage);
  const HandleLoadingMore = () => {
    setPage(page + maxPage);
  };
  const [Movies,setMovies]=useState([])

  useEffect(()=>{
    axios.get("http://localhost:5555/api/movie/getmovie")
    .then((res)=>{
   
      setMovies(res.data.movies)
   
      
    })
  },[])


  return (
    <Layout>
      <div className="min-height-screen container mx-auto px-2 my-6">
        <Filtres />
        <p className="text-lg font-medium my-6">
          Total <span className="font-bold text-subMain">{Movies?.length}</span>{" "}
          items Found
        </p>
        <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
          {Movies.slice(0,page)?.map((movie, index) => (
            <Movie key={index} movie={movie} />
          ))}
        </div>
        {/* Loading More */}
        <div className="w-full flex-colo md:my-20 mu-10">
          <button
            onClick={HandleLoadingMore}
            className="flex-rows gap-3 text-white py-3 px-8 rounded font-semibold border-2 border-subMain "
          >
            Loading More <CgSpinner className="animate-spin" />
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default MoviesPage;