import "./App.css";
import LandingPage from "./views/landingPage/LandingPage";
import Loader from "./components/loader";
import { useEffect, useState } from "react";
import useLenisSmoothScroll from "./components/smoothScroll/SmoothScroll";
import { useLocation, useNavigationType } from "react-router-dom";
// import StickyCursor from "./components/stickyCursor/stickyCursor";

const App = () => {
    const [loading, setLoading] = useState(true);
    const [renderScene, setRenderScene] = useState(false);
    const navigationType = useNavigationType();
    const location = useLocation();
    useLenisSmoothScroll(loading);

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
        const timeout2 = setTimeout(() => {
            setRenderScene(true);
        }, 5000);
        return () => {
          clearTimeout(timeout2)
          clearTimeout(timeout);
        };
    }, []);

    useEffect(() => {
        if (navigationType !== "PUSH") {
            if ("scrollRestoration" in window.history) {
                window.history.scrollRestoration = "manual";
            }
            window.scrollTo(0, 0);
        } else {
            const savedScrollPosition = sessionStorage.getItem(
                `scroll-position-${location.pathname}`
            );

            if (savedScrollPosition) {
                window.scrollTo(0, JSON.parse(savedScrollPosition));
            }
            setLoading(false);
        }
    }, [navigationType, location]);

    return (
        <>
            {loading && navigationType !== "PUSH" && <Loader />}
            {renderScene && <LandingPage navigationType={navigationType} />}
            {/* <StickyCursor /> */}
        </>
    );
};

export default App;
