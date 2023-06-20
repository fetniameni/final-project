import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import Uploder from "../../Components/Uploder";
import { Input } from "../../Components/UsedInputs";

import axios from "axios";


function Profile({user}) {

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (user) {
      setFullName(user.fullName);
      setEmail(user.email);
    }
  }, [user]);

  const handleUpdateUser = () => {
    var id =localStorage.getItem("id")
    axios
      .put(`http://localhost:5555/api/user/${id}`,{fullName,email})
      .then((res) => {
        if(res.data.message==='Successfully updated'){
          window.location.reload()
        }
      })
  };

  if (!user) {
    return <div>Loading...</div>;
  }
  return (
    <SideBar>
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-bold">Profile</h2>
      
        <Uploder />
        <Input
          label="FullName"
          placeholder="    UserName"
          type="text"
          bg={true}
          onChange={(e) => setFullName(e.target.value)}
          value={fullName}
       
        />
        <Input
          label="Email"
          placeholder="    User@gmail.com"
          type="email"
          bg={true}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          
        />

        <div className="flex gap-2 flex-wrap flex-col-reverse sm:flex-row justify-between items-center my-4">
          <button className="bg-subMain font-medium transitions hover:bg-main border border-subMain text-white py-3 px-6 rounded w-full sm:w-auto">
            Delete Account
          </button>
          <button className="bg-main font-medium transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded w-full sm:w-auto" onClick={(e)=>handleUpdateUser()}>
            Update Profile
          </button>
        </div>
      </div>
    </SideBar>
  );
}

export default Profile;