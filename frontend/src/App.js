import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./Screens/AboutUs";
import AOS from "aos";
import HomeScreen from "./Screens/HomeScreen";
import NotFound from "./Screens/NotFound";
import ContactUs from "./Screens/ContactUs";
import MoviesPage from "./Screens/Movies";
import SingleMovie from "./Screens/SingleMovie";
import WatchPage from "./Screens/WatchPage";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import Profile from "./Screens/Dashboard/Profile";
import Password from "./Screens/Dashboard/Password";
import FavoritesMovies from "./Screens/Dashboard/FavoritesMovies";
import MoviesList from "./Screens/Dashboard/Admin/MoviesList";
import Dashboard from "./Screens/Dashboard/Admin/Dashboard";
import Categories from "./Screens/Dashboard/Admin/Categories";
import Users from "./Screens/Dashboard/Admin/Users";
import AddMovie from "./Screens/Dashboard/Admin/AddMovie";
import ScrollOnTop from "./ScrollOnTop";
import DrawerContext from "./Context/DrawerContext";
import axios from "axios";


function App() {
  const [user,setData]=useState({ fullName: '', email: '' })
  



  useEffect(() => {
    var id=localStorage.getItem("id")
    axios
      .get(`http://localhost:5555/api/user/${id}`,)
      .then((res) => {
        setData(res.data.data);
      });
  }, []);
  
  AOS.init();
  return (
    <DrawerContext>
      <ScrollOnTop>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:id" element={<SingleMovie />} />
          <Route path="/watch/:id" element={<WatchPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile user={user}/>} />
          <Route path="/password" element={<Password />} />
          <Route path="/favorites" element={<FavoritesMovies />} />
          <Route path="/movieslist" element={<MoviesList />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/users" element={<Users />} />
          <Route path="/addmovie" element={<AddMovie />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ScrollOnTop>
    </DrawerContext>
  );
}

export default App;
