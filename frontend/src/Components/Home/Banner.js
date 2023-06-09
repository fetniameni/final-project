import React, { useEffect, useState } from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import FlexMovieItems from "../FlexMovieItems";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import axios from "axios";

function Banner() {
  const [Movies,setMovies]=useState([])

  useEffect(()=>{
    axios.get("http://localhost:5555/api/movie/getmovie")
    .then((res)=>{
   
      setMovies(res.data.movies)
   
      
    })
  },[])


  return (
    <div className="relative w-full">
      <Swiper
        direction="vertical"
        slidesPerView={1}
        loop={true}
        speed={1000}
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="w-full xl:h-96 bg-dry lg:h-64 h-48"
      >
        {Movies.slice(0, 20).map((movie, index) => (
          <SwiperSlide
            key={index}
            className="relative rounded overflow-hidden "
          >
            <img
              src={`/images/movies/${movie.image}`}
              alt={movie.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute linear-bg xl:pl-52 sm:pl-8 top-0 bottom-0 right-0 left-0 flex flex-col justify-center lg:gap-8 md:gap-5 gap-4 ">
              <h1 className="xl:text-4xl truncate capitalize font-sans sm:text-2xl text-xl font-bold">
                {movie.name}
              </h1>
              <div className="flex gap-5 items-center text-dryGray">
                <FlexMovieItems movie={movie} />
              </div>
              <div className="flex gap-5 items-center">
                <Link
                  to={`/watch/${movie?.name}`}
                  className="bg-subMain hover:text-main transitions text-white px-8 py-3 rounded font-medium sm:text-sm text-xs"
                >
                  Watch
                </Link>
                <button className="bg-white hover:text-subMain transitions text-white px-4 py-3 rounded text-sm bg-opacity-30">
                  <FaHeart />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Banner;
