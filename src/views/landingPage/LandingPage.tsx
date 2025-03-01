import { Canvas } from "@react-three/fiber";
import { Scene } from "../../components/scene";
import "./LandingPage.css";
import React, { useEffect, useRef, useState } from "react";
import AboutView from "../../components/about/AboutView";
import ExperiencesView from "../../components/experiences/ExperiencesView";
import { motion, useScroll, useTransform } from "framer-motion";

const LandingPage: React.FunctionComponent = () => {
    // const [isBackToTopVisible, setIsBackToTopVisible] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const aboutRef = useRef<HTMLDivElement | null>(null);
    const experienceRef = useRef<HTMLDivElement | null>(null);
    const projectsRef = useRef<HTMLDivElement | null>(null);
    const contactRef = useRef<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            {
                rootMargin: "2000px", // start rendering a bit before it fully enters the viewport
            }
        );
        if (containerRef.current) {
            observer.observe(containerRef.current);
        }
        return () => observer.disconnect();
    }, []);

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
        <div className="landingContainer" ref={containerRef}>
            <Canvas
                style={{
                    width: "100vw",
                    height: "100vh",
                    background: "transparent",
                    position: "relative",
                    willChange: "transform",
                }}
                camera={{ position: [0, 0, 20], fov: 50 }}
                shadows
                frameloop={isInView ? "always" : "demand"}
            >
                <Scene />
            </Canvas>
            <div className="landingContentContainer">
                <motion.div className="landingContent" style={{ y }}>
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
                </motion.div>
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
            <div ref={aboutRef}>
                <AboutView />
            </div>
            <div ref={experienceRef}>
                <ExperiencesView />
            </div>
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
