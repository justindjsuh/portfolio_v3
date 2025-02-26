import { Canvas } from "@react-three/fiber";
import { Scene } from "../../components/scene";
import "./LandingPage.css";
import { useRef } from "react";

export default function LandingPage() {
    const aboutRef = useRef<HTMLDivElement | null>(null);
    const experienceRef = useRef<HTMLDivElement | null>(null);
    const projectsRef = useRef<HTMLDivElement | null>(null);
    const contactRef = useRef<HTMLDivElement | null>(null);

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
                        <a>LinkedIn</a>
                        <a>GitHub</a>
                    </div>
                </div>
            </div>
            <div className="nav-container">
                <button onClick={() => scrollToSection(aboutRef)}>about</button>
            </div>
            <div ref={aboutRef}></div>
            <div ref={experienceRef}></div>
            <div ref={projectsRef}></div>
            <div ref={contactRef}></div>
        </div>
    );
}
