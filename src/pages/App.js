import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Preloader from "./primary/Pre";
import Navbar from "../components/common/Navbar";
import Project from "./project/Project";
import Resume from "./resume/Resume";
import FoodImageClassify from "./project/FoodImageClassify";
import CampusEats from "./project/CampusEats";
import LandSink from "./project/LandSink";
import StevenAI from "./project/StevenAI";
import MentorAI from "./project/MentorAI";
import Footer from "../components/common/Footer";
import ScrollToTop from "../effect/ScrollToTop";
import { Route, Routes, Navigate } from "react-router-dom";
import FadeIn from "../effect/FadeIn";
import Sever from "./server/Sever";
import Home from "./home/Home";

function App() {
    const [load, setLoad] = useState(true);
    const location = useLocation();

    window.addEventListener("scroll", FadeIn);
    window.addEventListener("resize", FadeIn);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoad(false);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <Preloader load={load} />
            <div id={load ? "no-scroll" : "scroll"}>
                <Navbar />
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/project" element={<Project />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/campusEats*" element={<CampusEats />} />
                    <Route path="/landSink*" element={<LandSink />} />
                    <Route path="/foodImageClassify*" element={<FoodImageClassify />} />
                    <Route path="/server*" element={<Sever />} />
                    <Route path="/stevenAI*" element={<StevenAI />} />
                    <Route path="/mentorAI*" element={<MentorAI />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
                {/* Conditionally hide footer if path starts with /server */}
                {!location.pathname.startsWith("/server") && <Footer />}
            </div>
        </div>
    );
}
export default App;
