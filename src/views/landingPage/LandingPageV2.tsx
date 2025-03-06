// import { Scene } from "../../components/scene";
import "./LandingPage.css";
import React, { useEffect, useRef, useState } from "react";
import AboutView from "../../components/about/AboutView";
import ExperiencesView from "../../components/experiences/ExperiencesView";
import { motion, useScroll, useTransform } from "framer-motion";
import ProjectsView from "../../components/projects/ProjectsView";
import ContactView from "../../components/contact/ContactView";
import { LandingScene } from "../../components/3dRenders/LandingScene";
import { Canvas } from "@react-three/fiber";
import { MorphingSphere } from "../../components/animations/PolyBall/morphingSphere";
import { OrbitControls } from "@react-three/drei";

interface ILandingPageProps {
    darkMode: boolean;
    setDarkMode: (val: boolean) => void;
}

const LandingPageV2: React.FunctionComponent<ILandingPageProps> = ({
    darkMode,
    setDarkMode,
}) => {
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

    const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div
            style={{
                position: "relative",
                overflow: "hidden",
                width: "100vw",
                height: "100vh",
            }}
        >
            <Canvas camera={{ position: [0, 0, 4] }} shadows>
                <ambientLight intensity={0.5} />
                <directionalLight
                    position={[2, 2, 5]}
                    intensity={100}
                    castShadow
                />
                <MorphingSphere />
                <OrbitControls enableZoom={false} />
            </Canvas>
        </div>
    );
};

export default LandingPageV2;
