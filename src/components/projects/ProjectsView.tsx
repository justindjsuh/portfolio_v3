import React, { useEffect, useRef, useState } from "react";
import "./ProjectsView.css";
import EmmanuelProjectCard from "./projectCards/emmanuelProjectCard";
import MpcProjectCard from "./projectCards/mpcProjectCard";
import PortfolioV2Card from "./projectCards/portfolioV2Card";
import PortfolioV1Card from "./projectCards/portfolioV1Card";
import AlibiProjectCard from "./projectCards/alibiProjectCard";
import PeakProjectCard from "./projectCards/peakProjectCard";
import { motion, useAnimation } from "framer-motion";

const ProjectsView: React.FunctionComponent = () => {
    const [isVisible, setIsVisible] = useState(false); // Track if in viewport
    const [maxIndex, setMaxIndex] = useState(2);

    const controls = useAnimation();
    const cardWidth = 320;
    const slideDistance = cardWidth + 32;
    const totalCards = 6;

    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const isDragging = useRef(false); // Track if user is dragging
    const containerRef = useRef(null);
    const currentIndex = useRef(0); // Track the current index manually

    // Function to move to the next slide
    const nextSlide = () => {
        if (isDragging.current) return; // Prevent auto-slide during dragging
        currentIndex.current =
            (currentIndex.current + 1) % (totalCards - maxIndex + 1);
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

    // Function to update visible cards based on screen width
    const updateVisibleCards = () => {
        const screenWidth = window.innerWidth;
        setMaxIndex(Math.floor(screenWidth / slideDistance));
    };

    useEffect(() => {
        updateVisibleCards(); // Set on mount
        window.addEventListener("resize", updateVisibleCards);
        return () => window.removeEventListener("resize", updateVisibleCards);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
    }, [isVisible, controls, maxIndex, slideDistance]);

    // Intersection Observer to detect when the carousel is in view
    useEffect(() => {
        const container = containerRef.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
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
    }, []);

    return (
        <div className="projectsViewBg">
            <div className="projectsViewContainer">
                {/* This projectsviewheader should fade in upwards */}
                <motion.div
                    className="projectsViewHeader"
                    initial={{ opacity: 0, y: 100 }} // Start invisible and 50px lower
                    whileInView={{ opacity: 1, y: 0 }} // Fade in and move up
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <p className="projectsViewHeaderText">SELECTED PROJECTS</p>
                    <p className="projectsViewHeaderSubText">See my work.</p>
                </motion.div>
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
                        <MpcProjectCard />
                        <EmmanuelProjectCard />
                        <PortfolioV2Card />
                        <PortfolioV1Card />
                        <AlibiProjectCard />
                        <PeakProjectCard />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsView;
