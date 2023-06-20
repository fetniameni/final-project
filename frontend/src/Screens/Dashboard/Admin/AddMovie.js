import React, { useEffect, useState } from "react";
import SideBar from "../SideBar";
import { Input, Message, Select } from "../../../Components/UsedInputs";
import Uploder from "../../../Components/Uploder";
import { CategoriesData } from "../../../Data/CategoriesData";
import { UsersData } from "../../../Data/UsersData";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { ImUpload } from "react-icons/im";
import CastsModal from "../../../Components/Modals/CastsModal";
import axios from "axios";


function AddMovie() {
  const [modalOpen, setModalOpen] = useState(false);
  const [cast, setCast] = useState(null);

  const [name,setName]=useState()
  const [language,setLanguage]=useState()
  const [time,setTime]=useState()
  const [year,setYear]=useState()

  useEffect(() => {
    var id=localStorage.getItem("movies._id")
    axios
        .get(`http://localhost:5555/api/movie/getmovie/${id}` ).then((res) => {
          console.log(res.data.data);  
          setName(res.data.data.name)    
          setLanguage(res.data.data.language)
          setTime(res.data.data.time)
          setYear(res.data.data.year)
        });     
  }, []);


  const handleUpdateMovie = () => {
    var id=localStorage.getItem("movies._id")
    axios
      .put(`http://localhost:5555/api/movie/updatemovie/${id}`,
      {name,language,time,year})
      .then((res) => {
        console.log(res.data)
        // if(res.data.msg==="update success"){
        //   window.location.reload()
        // }
      })
  };

  useEffect(() => {
    if (modalOpen === false) {
      setCast();
    }
  }, [modalOpen]);

  return (
    <SideBar>
      <CastsModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        cast={cast}
      />
       {console.log()}
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-bold">Add Movie</h2>
        <div className="w-full grid md:grid-cols-2 gap-6">
          <Input
            label="Movie Title"
            placeholder="MovieName"
            type="Text"
            bg={true}
            value={name}
            onChange={(e) => setName(e.target.value)}
          
          />
          <Input label="Hours" placeholder="    Hours" type="text" bg={true} value={time}
            onChange={(e) => setTime(e.target.value)} />
        </div>

        <div className="w-full grid md:grid-cols-2 gap-6">
          <Input
            label="Language Used"
            placeholder="    Language"
            type="text"
            bg={true}
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
           
          />
          <Input
            label="Year of Release"
            placeholder="    Year"
            type="number"
            bg={true}
            value={year}
            onChange={(e) => setYear(e.target.value)} 
          
          />
        </div>

        {/* IMAGES */}
        
          <div className="flex flex-col gap-2">
            <p className="text-border font-semibold text-sm">
              Image 
            </p>
            <Uploder />
            <div className="w-32 h-32 p-2 bg-main border border-border rounded">
              <img
                src="/images/movies/the-meg-2.jpg"
                alt=""
                className="w-full h-full object-cover rounded "
              />
            </div>
        </div>
        {/* DESCRIPTION */}
        <Message
          label="Movie Description"
          placeholder="Make it short and sweet"
          
          
        />
        {/* CATEGORY */}
        <div className="text-sm w-full">
       
          <Select label="Movie Category" options={CategoriesData}
            />
           
        </div>
        {/* MOVIE VIDEO */}
        <div className="flex flex-col gap-2 w-full ">
          <label className="text-border font-semibold text-sm"  >
          Movie Video
          </label>
          <Uploder />
        </div>
        {/* CASTS */}
        <div className="w-full grid lg:grid-cols-2 gap-6 items-start">
          <button
            onClick={() => setModalOpen(true)}
            className="w-full py-4 bg-main border border-subMain border-dashed text-white rounded"  
          >
            Add Cast
          </button>
          <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-4 grid-cols-2 gap-4">
            {UsersData.map((user, i) => (
              <div
                key={i}
                className="p-2 italic text-xs text-text rounded flex-colo bg-main border border-border"
              >
                <img
                  src={`/images/stars/${user.image ? user.image : "user.png"}`}
                  alt={user.fullName}
                  className="w-full h-24 object-cover rounded mb-2"
                />
                <p>{user.fullName}</p>
                <div className="flex-rows mt-2 w-full gap-2">
                  <button className="w-6 h-6 flex-colo bg-dry border border-border text-subMain rounded">
                    <MdDelete />
                  </button>
                  <button 
                  onClick={() => {
                    setCast(user)
                    setModalOpen(true)}}
                  className="w-6 h-6 flex-colo bg-dry border border-border text-green-600 rounded">
                    <FaEdit />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* SUBMIT BUTTON */}
        <button className="bg-subMain w-full flex-rows gap-6 font-medium  text-white py-4  rounded " >
          <ImUpload /> Publish Movie
        </button>
        <button className="bg-subMain w-full flex-rows gap-6 font-medium  text-white py-4  rounded " onClick={()=>handleUpdateMovie()}  >
         Update Movie
        </button>
      </div>
    </SideBar>
  );
}

export default AddMovie;
