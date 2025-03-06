import { Canvas } from "@react-three/fiber";
import "./LandingPage.css";
import React, { useEffect, useRef, useState } from "react";
import AboutView from "../../components/about/AboutView";
import ExperiencesView from "../../components/experiences/ExperiencesView";
import { motion, useScroll, useTransform } from "framer-motion";
import ProjectsView from "../../components/projects/ProjectsView";
import ContactView from "../../components/contact/ContactView";
import Room from "../../components/3dRenders/RoomScene";
import FlipLink from "../../components/WaterfallText";

interface ILandingPageProps {
    darkMode: boolean;
    setDarkMode: (val: boolean) => void;
}

const LandingPage: React.FunctionComponent<ILandingPageProps> = ({
    darkMode,
    setDarkMode,
}) => {
    const [startAnimation, setStartAnimation] = useState(false);
    const aboutRef = useRef<HTMLDivElement | null>(null);
    const experienceRef = useRef<HTMLDivElement | null>(null);
    const projectsRef = useRef<HTMLDivElement | null>(null);
    const contactRef = useRef<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, 400]);

    const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        // Need to disable this if the user is being redirected back from a case study path
        const timeout = setTimeout(() => {
            setStartAnimation(true);
        }, 6500);
        return () => clearTimeout(timeout);
    });

    return (
        <div className="landingContainer" ref={containerRef}>
            {/* <div
                style={{
                    height: "100vh",
                    width: "100vw",
                    padding: ".1rem",
                    backgroundColor: "#1E48B6",
                }}
            >
                <Canvas shadows camera={{ position: [6, 1, 6], fov: 20 }}>
                    <Room />
                </Canvas>
            </div> */}
            <Canvas shadows camera={{ position: [6, 1, 6], fov: 20 }}>
                <Room />
            </Canvas>
            <div className="landingContentContainer">
                {startAnimation && (
                    <motion.div
                        className="landingContent"
                        style={{ y }}
                        initial={{ opacity: 0, y: 50 }} // Start invisible and 50px lower
                        whileInView={{ opacity: 1, y: 0 }} // Fade in and move up
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <FlipLink phrase="justin suh." />
                        <p className="position">
                            software engineer, full-stack web developer.
                        </p>
                        <hr />
                    </motion.div>
                )}
            </div>
            {startAnimation && (
                <motion.div
                    className="nav-container"
                    initial={{ opacity: 0, y: 50 }} // Start invisible and 50px lower
                    whileInView={{ opacity: 1, y: 0 }} // Fade in and move up
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <button onClick={() => scrollToSection(aboutRef)}>
                        about
                    </button>
                    <button onClick={() => scrollToSection(experienceRef)}>
                        experience
                    </button>
                    <button onClick={() => scrollToSection(projectsRef)}>
                        projects
                    </button>
                    <button onClick={() => scrollToSection(contactRef)}>
                        contact
                    </button>
                </motion.div>
            )}
            <div ref={aboutRef}>
                <AboutView />
            </div>
            <div ref={experienceRef}>
                <ExperiencesView
                    darkMode={darkMode}
                    setDarkMode={setDarkMode}
                />
            </div>
            <div ref={projectsRef}>
                <ProjectsView darkMode={darkMode} setDarkMode={setDarkMode} />
            </div>
            <div ref={contactRef}>
                <ContactView darkMode={darkMode} />
            </div>
        </div>
    );
};

export default LandingPage;
