import React, { useEffect, useState } from "react";
import { FaCloudDownloadAlt, FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";
import { GoEye } from "react-icons/go";
import axios from 'axios'
const Head = "text-xs text-left text-main font-semibold px-6 py-2 uppercase";
const Text = "text-sm text-left leading-6 whitespace-nowrap px-5 py-3";

//rows
const Rows = (movies, i, admin) => {

    const navigate = useNavigate();

    const handleButtonClick = (_id) => {
    localStorage.setItem("movies._id",movies._id)
    navigate(`/addmovie`);
   
    }; 

  const handleDelete = async (id) => {
    await axios
      .delete(`http://localhost:5555/api/movie/deletemovie/${id}`)
      .then(() => {
       alert("film supprimé avec succes ! ");
      });
  };


    return (
      <tr key={i}>
        <td className={`${Text}`}>
       
          <div className="w-12 p-1 bg-dry border border-border h-12 rounded overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src={`/images/movies/${movies.titleImage}`}
           
            
              alt={movies?.name}
            
            
            />
             
          </div>
        </td>
        <td className={`${Text} truncate`}>{movies.name}</td>
        <td className={`${Text}`}>{movies.category}</td>
        <td className={`${Text}`}>{movies.language}</td>
        <td className={`${Text}`}>{movies.year}</td>
        <td className={`${Text}`}>{movies.time}</td>
        <td className={`${Text} float-right flex-rows gap-2`}>
       
          {admin ? (
            <>
              <button className="border border-border bg-dry flex-rows gap-2 text-border rounded py-1 px-2" onClick={handleButtonClick}>
                Edit <FaEdit className="text-green-500" />
                
              </button>
              <button className="bg-subMain text-white rounded flex-colo w-6 h-6 " onClick={()=>handleDelete(movies._id)}>
                <MdDelete  />
              </button>
            </>
          ) : (
            <>
              <button className="border border-border bg-dry flex-rows gap-2 text-border rounded py-1 px-2">
                Download <FaCloudDownloadAlt className="text-green-500" />
              </button>
              <Link
                to={`/movies/${movies?.name}`}
                className="bg-subMain text-white rounded flex-colo w-6 h-6 "
              >
                <GoEye />
              </Link>
            </>
          )}
        </td>
      </tr>
    );
  };

// table of favorite
function Table({ admin,data }) {

  
  
  return (
    
    <div className="overflow-x-scroll overflow-hidden relative w-full">
      <table className="w-full table-auto border border-border divide-y divide-border">
        <thead>
          <tr className="bg-dryGray">
            <th scope="col" className={`${Head}`}>
              Image
            </th>
            <th scope="col" className={`${Head}`}>
              Name
            </th>
            <th scope="col" className={`${Head}`}>
              Category
            </th>
            <th scope="col" className={`${Head}`}>
              Language
            </th>
            <th scope="col" className={`${Head}`}>
              Year
            </th>
            <th scope="col" className={`${Head}`}>
              Hours
            </th>
            <th scope="col" className={`${Head} text-end`}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-main divide-y divide-gray-800">
         
          {data.movies?.map((movies, i) => Rows(movies, i, admin))}
          {console.log(data)}
        </tbody>
      
      
      </table>
    </div>
  );
}

export default Table;
