import "./App.css";
import LandingPage from "./views/landingPage/LandingPage";
import Loader from "./components/loader";
import { useEffect, useState } from "react";

const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 6000);
        return () => clearTimeout(timeout);
    });

    return (
        <>
            {loading && <Loader />}
            {/* <div className="loading_container">
                <p>justin suh</p>
                <div className="loading_bar"></div>
            </div> */}
            <LandingPage />
        </>
    );
};

export default App;
