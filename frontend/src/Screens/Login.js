import React,{ useState } from "react";
import Layout from "./../Layout/Layout";
import { Input } from "../Components/UsedInputs";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {

  // const [email,setEmail]=useState("")
  // const [password,setPassword]=useState("")
  const [data, setData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
 
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   await axios
  //     .post("http://localhost:5555/api/auth/login", {email,password})
  //     .then((res) => {
  //       console.log(res);
  //       // localStorage.setItem("token", res.data.token);
  //       navigate("/movies");
  //     });
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios
      .post("http://localhost:5555/api/auth/login", data)
      .then((result) => {
        console.log(result.data);
        localStorage.setItem("token", result.data.token);
        navigate("/movies");
      });
  };



  return (
    <Layout>
      <div className="container mx-auto px-2 my-24 flex-colo">
        <div className="w-full 2xl:w-2/5 gap-8 flex-colo p-8 sm:p-14 md:w-3/5 bg-dry rounded-lg border-border ">
          <img
            src="/images/MovieBox2.png"
            alt="logo"
            className="w-full h-12 object-contain"
          />
          <Input
          className="login"
            label="Email"
            placeholder="    User@gmail.com"
            // onChange={(e)=>setEmail(e.target.value)}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            type="email" 
          />
          <Input
          className="login"
            label="Password"
            placeholder="    *******"
            type="password"
            bg={true}
            // onChange={(e)=>setPassword(e.target.value)}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <div
            onClick={(event)=>handleSubmit(event)}
            style={{cursor:"pointer"}}
            className="bg-subMain transitions hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full"
          >
            <FiLogIn /> Sign In
          </div>
          <p className="text-center text-border">
            Don't have an account?{" "}
            <Link to="/register" className="text-dryGray font-semibold ml-2">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </Layout>

  );

}

export default Login;
