import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Project from "./project/Project";
import Resume from "./resume/Resume";
import FoodImageClassify from "./project/FoodImageClassify";
// import CampusEats from "./project/CampusEats";
import LandSink from "./project/LandSink";
import StevenAI from "./project/StevenAI";
import MentorAI from "./project/MentorAI";
import Footer from "../components/common/Footer";
import ScrollToTop from "../components/effects/ScrollToTop";
import { Route, Routes, Navigate } from "react-router-dom";
import FadeIn from "../components/effects/FadeIn";
import Sever from "./server/Sever";
import Home from "./home/Home";
import Loader from "../components/common/Loader";
import { useEffect } from "react";
import { initNeonTrail } from "../components/effects/NeonTrail";
import CampusEatsNew from "./project/CampusEatsNew";


function App() {
    const location = useLocation();

    useEffect(() => {
        initNeonTrail();
    }, []);

    window.addEventListener("scroll", FadeIn);
    window.addEventListener("resize", FadeIn);

    return (
        <div>
            <Loader />
            <Navbar />
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project" element={<Project />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/campusEats" element={<CampusEatsNew />} />
                <Route path="/landSink" element={<LandSink />} />
                <Route path="/foodImageClassify" element={<FoodImageClassify />} />
                <Route path="/server" element={<Sever />} />
                <Route path="/stevenAI" element={<StevenAI />} />
                <Route path="/mentorAI" element={<MentorAI />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            {/* Conditionally hide footer if path starts with /server */}
            {!location.pathname.startsWith("/server") && <Footer />}
        </div>
    );
}
export default App;
