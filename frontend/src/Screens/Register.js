import React ,{useState}from "react";
import Layout from "./../Layout/Layout";
import { Input } from "../Components/UsedInputs";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  
  const [fullName,setFullName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const navigate = useNavigate();
 
  const handleRegsiter = async (event) => {
    event.preventDefault();
    try {
      await axios
      .post("http://localhost:5555/api/auth", {fullName,email,password})
      .then((res) => {
        console.log(res);
        // localStorage.settItem("token", res.data.token);
        navigate("/login");
      });
      
    } catch (error) {
      console.log(error)
    }
   
  };
  return (
    <Layout>
      <div className="container mx-auto px-2 my-24 flex-colo">
        <div className="w-full 2xl:w-2/5 gap-8 flex-colo p-8 sm:p-14  md:w-3/5 bg-dry rounded-lg border-border ">
          <img
            src="/images/MovieBox2.png"
            alt="logo"
            className="w-full h-12 object-contain"
          />
          <Input
            label="FullName"
            placeholder="    UserName"
            type="text"
            bg={true}
            onChange={(e)=>setFullName(e.target.value)}
          />
          <Input
            label="Email"
            placeholder="    User@gmail.com"
            type="email"
            onChange={(e)=>setEmail(e.target.value)}

            bg={true}
          />
          <Input
            label="Password"
            placeholder="    *******"
            type="password"
            onChange={(e)=>setPassword(e.target.value)}
            bg={true}
          />
          <Link
            to="/login"
            className="bg-subMain transitions hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full"
            onClick={(event)=>handleRegsiter(event)}
          >
            <FiLogIn /> Sign Up
          </Link>
          <p className="text-center text-border">
            Already have an account?{" "}
            <Link to="/login" className="text-dryGray font-semibold ml-2">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </Layout>

  )}


export default Register;
