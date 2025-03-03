import "./App.css";
import LandingPage from "./views/landingPage/LandingPage";
import Loader from "./components/loader";
import { useEffect, useState } from "react";
import useLenisSmoothScroll from "./components/smoothScroll/SmoothScroll";
// import StickyCursor from "./components/stickyCursor/stickyCursor";

const App = () => {
    const [loading, setLoading] = useState(true);
    useLenisSmoothScroll();

    useEffect(() => {
        if (loading) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [loading]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 7000);
        return () => clearTimeout(timeout);
    });

    useEffect(() => {
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            {loading && <Loader />}
            <LandingPage />
            {/* <StickyCursor /> */}
        </>
    );
};

export default App;
