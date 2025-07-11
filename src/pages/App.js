import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Preloader from "./primary/Pre";
import Navbar from "../components/common/Navbar";
import Projects from "./project/Projects";
import Resume from "./resume/Resume";
import CampusEats from "./project_demo/CampusEats";
import LandSink from "./project_demo/LandSink";
import Footer from "../components/common/Footer";
import ScrollToTop from "../effect/ScrollToTop";
import FoodImageClassify from "./project_demo/FoodImageClassify";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Route,
    Routes,
    Navigate
} from "react-router-dom";
import FadeIn from "../effect/FadeIn";
import Sever from "./server/Sever";
import StevenAI from "./project_demo/StevenAI";
import MentorAI from "./project_demo/MentorAI";
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
            <div className="App" id={load ? "no-scroll" : "scroll"}>
                <Navbar />
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/project" element={<Projects />} />
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
