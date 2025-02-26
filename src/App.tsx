import "./App.css";
import LandingPage from "./views/landingPage/LandingPage";
import Loader from "./components/loader";
import { useEffect, useState } from "react";
import StickyCursor from "./components/stickyCursor/stickyCursor";

const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 9000);
        return () => clearTimeout(timeout);
    });

    return (
        <>
            {loading && <Loader />}
            <LandingPage />
            <StickyCursor />
        </>
    );
};

export default App;
