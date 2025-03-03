import React, { useEffect, useRef, useState } from "react";
import "./ProjectsView.css";
import EmmanuelProjectCard from "./projectCards/emmanuelProjectCard";
import MpcProjectCard from "./projectCards/mpcProjectCard";
import PortfolioV2Card from "./projectCards/portfolioV2Card";
import PortfolioV1Card from "./projectCards/portfolioV1Card";
import AlibiProjectCard from "./projectCards/alibiProjectCard";
import PeakProjectCard from "./projectCards/peakProjectCard";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";

interface IProjectsViewProps {
    darkMode: boolean;
    setDarkMode: (val: boolean) => void;
}

const ProjectsView: React.FunctionComponent<IProjectsViewProps> = ({
    darkMode,
}) => {
    const [isVisible, setIsVisible] = useState(false); // Track if in viewport
    const [isHovered, setIsHovered] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);

    const controls = useAnimation();
    const maxIndex = 1;
    const cardWidth = 320;
    const slideDistance = cardWidth + 32;
    const totalCards = 6;

    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const isDragging = useRef(false); // Track if user is dragging
    const containerRef = useRef(null);
    const currentIndex = useRef(0); // Track the current index manually
    const [columnCount, setColumnCount] = useState(4);

    const getColumnCount = () => {
        const cols = Math.floor(
            document.documentElement.clientWidth / slideDistance
        );
        setColumnCount(cols);
    };

    // Function to move to the next slide
    const nextSlide = () => {
        if (isDragging.current) return; // Prevent auto-slide during dragging
        currentIndex.current =
            (currentIndex.current + 1) %
            (totalCards - Math.floor(window.innerWidth / slideDistance) + 1);
        controls.start({
            x: -currentIndex.current * slideDistance,
            transition: { duration: 0.8, ease: "easeInOut" },
        });
    };

    // Automatic sliding
    const startAutoSlide = () => {
        if (intervalRef.current) clearInterval(intervalRef.current); // Clear existing interval
        intervalRef.current = setInterval(nextSlide, 3000);
    };

    // Intersection Observer to detect when the carousel is in view
    useEffect(() => {
        const container = containerRef.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setIsVisible(entry.isIntersecting);
                    setHasAnimated(true);
                }
            },
            { threshold: 0.3 } // Adjust this value if needed (30% visible to trigger)
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (container) {
                observer.unobserve(container);
            }
        };
    }, [columnCount, hasAnimated]);

    useEffect(() => {
        if (isVisible) {
            startAutoSlide();
        }
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isVisible, controls, slideDistance]);

    useEffect(() => {
        getColumnCount();
        window.addEventListener("resize", getColumnCount);
        return () => window.removeEventListener("resize", getColumnCount);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const navigate = useNavigate();
    const handleNavigation = (pathname: string) => {
        sessionStorage.setItem(
            `scroll-position-/`,
            JSON.stringify(window.scrollY)
        );
        navigate(pathname, { state: { from: location.pathname } });
    };

    return (
        <div className={`projectsViewBg ${darkMode ? "darkMode" : ""}`}>
            <div className="projectsViewContainer">
                {/* This projectsviewheader should fade in upwards */}
                <motion.div
                    className="projectsViewHeader"
                    initial={{ opacity: 0, y: 100 }} // Start invisible and 50px lower
                    whileInView={{ opacity: 1, y: 0 }} // Fade in and move up
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <p
                        className={`projectsViewHeaderText ${
                            darkMode ? "darkMode" : ""
                        }`}
                    >
                        SELECTED PROJECTS
                    </p>
                    <p
                        className={`projectsViewHeaderSubText ${
                            darkMode ? "darkMode" : ""
                        }`}
                    >
                        See my work.
                    </p>
                </motion.div>
                {columnCount === 1 || columnCount === 2 ? (
                    <div
                        className="projectCarouselContainer"
                        ref={containerRef}
                        style={{
                            position: "relative",
                            overflow: "hidden",
                        }}
                    >
                        <motion.div
                            className="projectCardsContainer"
                            drag="x"
                            dragConstraints={{
                                left: -maxIndex * cardWidth,
                                right: 0,
                            }}
                            dragElastic={0.1} // Reduces bounciness
                            dragTransition={{
                                bounceStiffness: 100,
                                bounceDamping: 15,
                            }} // Smooth scrolling feel
                            animate={controls}
                            style={{
                                display: "flex",
                                cursor: "grab",
                                width: `${totalCards * (cardWidth + 32)}px`, // Ensure all cards fit
                            }}
                            onDragStart={() => {
                                isDragging.current = true;
                                if (intervalRef.current)
                                    clearInterval(intervalRef.current); // Stop auto-slide
                            }}
                            onDragLeave={() => {
                                isDragging.current = false;
                                startAutoSlide(); // Restart auto-slide
                            }}
                        >
                            <MpcProjectCard
                                handleNavigation={handleNavigation}
                                darkMode={darkMode}
                                isMobile
                            />
                            <EmmanuelProjectCard
                                handleNavigation={handleNavigation}
                                darkMode={darkMode}
                                isMobile
                            />
                            <PortfolioV2Card
                                handleNavigation={handleNavigation}
                                darkMode={darkMode}
                                isMobile
                            />
                            <PortfolioV1Card
                                handleNavigation={handleNavigation}
                                darkMode={darkMode}
                                isMobile
                            />
                            <AlibiProjectCard
                                handleNavigation={handleNavigation}
                                darkMode={darkMode}
                                isMobile
                            />
                            <PeakProjectCard
                                handleNavigation={handleNavigation}
                                darkMode={darkMode}
                                isMobile
                            />
                        </motion.div>
                    </div>
                ) : (
                    <div
                        className="projectCarouselContainer"
                        ref={containerRef}
                    >
                        <div
                            className="projectCardsContainer"
                            style={{
                                gridTemplateColumns: `repeat(${columnCount}, 1fr)`,
                            }}
                        >
                            <div className="cardHoverContainer">
                                <MpcProjectCard
                                    handleNavigation={handleNavigation}
                                    darkMode={darkMode}
                                    isVisible={isVisible}
                                />
                            </div>
                            <div className="cardHoverContainer">
                                <EmmanuelProjectCard
                                    handleNavigation={handleNavigation}
                                    darkMode={darkMode}
                                    isVisible={isVisible}
                                />
                            </div>
                            <div className="cardHoverContainer">
                                <PortfolioV2Card
                                    handleNavigation={handleNavigation}
                                    darkMode={darkMode}
                                    isVisible={isVisible}
                                />
                            </div>

                            <div className="cardHoverContainer">
                                <PortfolioV1Card
                                    handleNavigation={handleNavigation}
                                    darkMode={darkMode}
                                    isVisible={isVisible}
                                />
                            </div>

                            <div className="cardHoverContainer">
                                <AlibiProjectCard
                                    handleNavigation={handleNavigation}
                                    darkMode={darkMode}
                                    isVisible={isVisible}
                                />
                            </div>

                            <div className="cardHoverContainer">
                                <PeakProjectCard
                                    handleNavigation={handleNavigation}
                                    darkMode={darkMode}
                                    isVisible={isVisible}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <motion.div
                className="portfolioV3Nav"
                initial={{ opacity: 0, y: 50 }} // Start invisible and 50px lower
                whileInView={{ opacity: 1, y: 0 }} // Fade in and move up
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => handleNavigation("/cases/portfolio-v3")}
            >
                <span>Want to see how I built this site?</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`feather feather-arrow-right ${
                        isHovered ? "hover" : ""
                    }`}
                >
                    <line x1="-30" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </motion.div>
        </div>
    );
};

export default ProjectsView;
