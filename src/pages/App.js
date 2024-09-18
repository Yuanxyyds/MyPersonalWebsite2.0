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
import "bootstrap/dist/css/bootstrap.min.css";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";


function App() {
    const [load, updateLoad] = useState(true);

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
                    <Route path="*" element={<Navigate to="/"/>}/>
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
