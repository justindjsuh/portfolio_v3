import "./App.css";
import LandingPage from "./views/landingPage/LandingPage";
import Loader from "./components/loader";

const App = () => {
    return (
        <>
            <Loader />
            <LandingPage />
        </>
    );
};

// function App() {
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//         const timeout = setTimeout(() => {
//             setIsLoading(false);
//         }, 5000);
//         return () => clearTimeout(timeout);
//     }, []);

//     return (
//         <>
//             {/* {isLoading && (
//                 <>
//                     <div
//                         className={`loading-screen ${
//                             !isLoading ? "fade-out" : ""
//                         }`}
//                     >
//                         <div className="loading_name">
//                             <p>JUSTIN</p>
//                             <p>SUH</p>
//                         </div>
//                         <p className="loading_portfolio">PORTFOLIO</p>
//                     </div>
//                 </>
//             )} */}
//             <LandingPage />
//             <div style={{ height: "50vh" }}></div>
//         </>
//     );
// }

export default App;
