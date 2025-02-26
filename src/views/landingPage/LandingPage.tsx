import { Canvas } from "@react-three/fiber";
import { Scene } from "../../components/scene";
import "./LandingPage.css";
import React, { useRef } from "react";
import Transition from "../../components/transition";
import AboutView from "../../components/about/AboutView";

const LandingPage: React.FunctionComponent = () => {
    // const [isBackToTopVisible, setIsBackToTopVisible] = useState(false);
    const aboutRef = useRef<HTMLDivElement | null>(null);
    const skillsRef = useRef<HTMLDivElement | null>(null);
    const experienceRef = useRef<HTMLDivElement | null>(null);
    const projectsRef = useRef<HTMLDivElement | null>(null);
    const contactRef = useRef<HTMLDivElement | null>(null);

    // useEffect(() => {
    //     const toggleVisibility = () => {
    //         console.log(window.scrollY);
    //         if (window.scrollY > 300) {
    //             setIsBackToTopVisible(true);
    //         } else {
    //             setIsBackToTopVisible(false);
    //         }
    //     };

    //     window.addEventListener("scroll", toggleVisibility);
    //     return () => window.removeEventListener("scroll", toggleVisibility);
    // }, []);

    const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="landingContainer">
            <Canvas
                style={{
                    width: "100vw",
                    height: "100vh",
                    background: "transparent",
                    position: "relative",
                }}
                camera={{ position: [0, 0, 20], fov: 50 }}
                shadows
            >
                <Scene />
            </Canvas>
            <div className="landingContentContainer">
                <div className="landingContent">
                    <h1>JUSTIN SUH</h1>
                    <p className="position">
                        SOFTWARE ENGINEER, FULL-STACK WEB DEVELOPER.
                    </p>
                    <p className="summary">
                        I create products that are as stunning as they are
                        seamless, elevating user experience.
                    </p>
                    <div className="socials">
                        <a
                            href="https://www.linkedin.com/in/justin-suh98/"
                            target="_blank"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/justindjsuh"
                            target="_blank"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
            <div className="nav-container">
                <button onClick={() => scrollToSection(aboutRef)}>about</button>
                <button onClick={() => scrollToSection(experienceRef)}>
                    experience
                </button>
                <button onClick={() => scrollToSection(projectsRef)}>
                    projects
                </button>
                <button onClick={() => scrollToSection(contactRef)}>
                    contact
                </button>
            </div>
            <Transition />
            <div ref={aboutRef}>
                <AboutView />
            </div>
            <div ref={skillsRef}></div>
            <div ref={experienceRef}></div>
            <div ref={projectsRef}></div>
            <div ref={contactRef}></div>
            {/* <button className={`backToTop ${isBackToTopVisible ? "show" : ""}`}>
                <img
                    src={IMAGES.backToTopCube}
                    alt="A cube used to scroll back to top"
                />
            </button> */}
        </div>
    );
};

export default LandingPage;
