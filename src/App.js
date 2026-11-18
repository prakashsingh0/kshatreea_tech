import React from "react";

import Nav from "./components/Nav";
import HeroBanner from "./components/HeroBanner";
import Services from "./components/Services";
import About from "./components/About";
import Training from "./components/Training";
import Contact from "./components/Contact";
import Home from "./Academy/Home"
import { Route, Routes } from "react-router-dom";
import Login from "./Academy/Login";
import Register from "./Academy/Register"
import CourseDetails from "./Academy/CourseDetails";
import Profile from "./Academy/Profile";
import Courses from "./Academy/Courses";
import Internship from "./components/internship/Internship";
import InternshipApply from "./components/internship/InternshipApply";


function App() {
  return (
    <>
      <Routes>
        <Route path="/"
          element={
            <>
              <Nav />

              <HeroBanner />

              <Services />


              <Training />
              <About />
              <Contact />
            </>} />
        <Route path="/internships" element={<Internship />} />
        <Route
          path="/internships/apply/:slug"
          element={<InternshipApply />}
        />
        <Route path="/academy/login" element={<Login />} />
        <Route path="/academy/signup" element={<Register />} />
        <Route path="/academy" element={<Home />} >
          <Route index element={<Courses />} />
          <Route path="/academy/profile" element={<Profile />} />
        </Route>
        <Route
          path="/academy/course/:slug"
          element={<CourseDetails />}
        />
      </Routes>
    </>
  );
}

export default App;