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

const ProjectsView: React.FunctionComponent = () => {
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
            (document.documentElement.clientWidth * .85) / slideDistance
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
            { threshold: 0.1 } // Adjust this value if needed (30% visible to trigger)
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
        <div className="projectsViewBg">
            <div className="projectsViewContainer">
                {/* This projectsviewheader should fade in upwards */}
                <motion.div
                    className="projectsViewHeader"
                    style={{ height: "7.5rem", overflow: "hidden" }}
                >
                    <motion.p
                        initial={{ y: 200 }} // Start below and invisible
                        animate={isVisible ? { y: 0 } : {}} // Move up and fade in
                        transition={{
                            type: "spring",
                            stiffness: 90, // Lower stiffness = looser movement
                            damping: 20, // Reduces abrupt stop
                            mass: 1.2, // Lighter mass = more bounce
                            duration: 0.1,
                        }}
                        className="projectsViewHeaderText"
                    >
                        SELECTED PROJECTS
                    </motion.p>
                    <motion.p
                        initial={{ y: 200 }} // Start below and invisible
                        animate={isVisible ? { y: 0 } : {}} // Move up and fade in
                        transition={{
                            type: "spring",
                            stiffness: 90, // Lower stiffness = looser movement
                            damping: 20, // Reduces abrupt stop
                            mass: 1.2, // Lighter mass = more bounce
                            duration: 0.1,
                        }}
                        className="projectsViewHeaderSubText"
                    >
                        See my work.
                    </motion.p>
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
                                isMobile
                            />
                            <EmmanuelProjectCard
                                handleNavigation={handleNavigation}
                                isMobile
                            />
                            <PortfolioV2Card
                                handleNavigation={handleNavigation}
                                isMobile
                            />
                            <PortfolioV1Card
                                handleNavigation={handleNavigation}
                                isMobile
                            />
                            <AlibiProjectCard
                                handleNavigation={handleNavigation}
                                isMobile
                            />
                            <PeakProjectCard
                                handleNavigation={handleNavigation}
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
                                    isVisible={isVisible}
                                />
                            </div>
                            <div className="cardHoverContainer">
                                <EmmanuelProjectCard
                                    handleNavigation={handleNavigation}
                                    isVisible={isVisible}
                                />
                            </div>
                            <div className="cardHoverContainer">
                                <PortfolioV2Card
                                    handleNavigation={handleNavigation}
                                    isVisible={isVisible}
                                />
                            </div>
                            <div className="cardHoverContainer">
                                <PortfolioV1Card
                                    handleNavigation={handleNavigation}
                                    isVisible={isVisible}
                                />
                            </div>
                            <div className="cardHoverContainer">
                                <AlibiProjectCard
                                    handleNavigation={handleNavigation}
                                    isVisible={isVisible}
                                />
                            </div>
                            <div className="cardHoverContainer">
                                <PeakProjectCard
                                    handleNavigation={handleNavigation}
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
