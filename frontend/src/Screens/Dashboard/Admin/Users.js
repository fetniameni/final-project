import React, { useEffect, useState } from "react";
import SideBar from "../SideBar";
import Table2 from "../../../Components/Table2";
import axios from "axios";

function Users() {

  
  const [data,setData]=useState([])
  
  useEffect(()=>{
    axios.get("http://localhost:5555/api/user")
    .then((res)=>{
      setData(res.data.data)
    })
  },[])
  return (
    <SideBar>
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-bold">Users</h2>

        <Table2 data={data} users={true}  />
      </div>
    </SideBar>
  );
}

export default Users;

