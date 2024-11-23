import React, {useState, useEffect} from "react";
import Preloader from "./primary/Pre";
import Navbar from "../components/common/Navbar";
import About from "./about/About";
import Projects from "./project/Projects";
import Resume from "./resume/Resume";
import CampusEats from "./project_demo/CampusEats";
import LandSink from "./project_demo/LandSink";
import Home from "./home/Home";
import Footer from "../components/common/Footer";
import ScrollToTop from "../effect/ScrollToTop";
import FoodImageClassify from "./project_demo/FoodImageClassify";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";
import FadeIn from "../effect/FadeIn";
import Sever from "./server/Sever";
import StevenAI from "./project_demo/StevenAI";
import MentorAI from "./project_demo/MentorAI";


function App() {
    const [load, updateLoad] = useState(true);
    window.addEventListener("scroll", FadeIn);
    window.addEventListener("resize", FadeIn);

    useEffect(() => {
        const timer = setTimeout(() => {
            updateLoad(false);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Router>
            <Preloader load={load}/>
            <div className="App" id={load ? "no-scroll" : "scroll"}>
                <Navbar/>
                <ScrollToTop/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/project" element={<Projects/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/resume" element={<Resume/>}/>
                    <Route path="/campusEats*" element={<CampusEats/>}/>
                    <Route path="/landSink*" element={<LandSink/>}/>
                    <Route path="/foodImageClassify*" element={<FoodImageClassify/>}/>
                    <Route path="/server*" element={<Sever/>}/>
                    <Route path="/stevenAI*" element={<StevenAI/>}/>
                    <Route path="/mentorAI*" element={<MentorAI/>}/>
                    <Route path="*" element={<Navigate to="/"/>}/>
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
