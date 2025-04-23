import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Loader: React.FunctionComponent = () => {
    const [finalPhase, setFinalPhase] = useState(false);
    const [fadeName, setFadeName] = useState(false);
    const [expanding, setExpanding] = useState(false);

    useEffect(() => {
        // Let the loading pulse run for 4 seconds, then stop and expand.
        const pulseTimer = setTimeout(() => {
            setExpanding(true);
        }, 4100); // Stops pulsing after 4s

        return () => clearTimeout(pulseTimer);
    }, []);

    useEffect(() => {
        // Delay fade-out until final expansion completes
        if (expanding) {
            const expandTimer = setTimeout(() => {
                setFinalPhase(true);
            }, 2000); // Matches the duration of the expansion animation
            const nameTimer = setTimeout(() => {
                setFadeName(true);
            }, 1000);
            return () => {
                clearTimeout(expandTimer);
                clearTimeout(nameTimer);
            };
        }
    }, [expanding]);

    // Loading bar animation variants:
    const barVariants = {
        // Looping pulse animation:
        loop: {
            x: [0, 200], // Starts at x=0, moves to x=200
            scaleX: [0, 0.8, 1], // Grows from 0 to full then back to 0
            transition: {
                duration: 1,
                ease: "easeInOut",
                repeat: expanding ? 0 : Infinity, // Stop repeating when expanding starts
            },
        },
        // Final expansion: grows from center outward
        final: {
            scaleX: 1,
            transition: { duration: 1, ease: "easeInOut" },
        },
    };

    // Panel variants for the wipe effect.
    const topVariants = {
        initial: { y: "0%" },
        final: { y: "-100%", transition: { duration: 1, ease: "easeInOut" } },
    };

    const bottomVariants = {
        initial: { y: "0%" },
        final: { y: "100%", transition: { duration: 1, ease: "easeInOut" } },
    };

    const textVariants = {
        initial: { opacity: 1 },
        final: {
            opacity: 0,
            transition: { delay: 1, duration: 0.5, ease: "easeOut" },
        },
    };

    // Overlay fade-out animation: Waits for expansion to finish before fading
    // const overlayVariants = {
    //     initial: { opacity: 1 },
    //     final: {
    //         opacity: 0,
    //         transition: { delay: 1, duration: 0.5, ease: "easeInOut" }, // Wait for expansion
    //     },
    // };

    return (
        <AnimatePresence>
            {/* Top overlay panel */}
            <motion.div
                className="loader-top"
                variants={topVariants}
                initial="initial"
                animate={finalPhase ? "final" : "initial"}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "50vh",
                    background: "black",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    zIndex: 5,
                }}
            >
                {/* Your Name */}
                <motion.h1
                    variants={textVariants}
                    animate={fadeName ? "final" : "initial"}
                    style={{
                        color: "white",
                        marginBottom: "2rem",
                        fontSize: "2rem",
                        fontWeight: "500",
                        fontFamily: "EB Garamond",
                    }}
                >
                    justin suh
                </motion.h1>
                {/* Loading bar container */}
                <div
                    style={{
                        position: "relative",
                        width: expanding ? "100%" : "200px",
                        height: "1px",
                        overflow: expanding ? "visible" : "hidden",
                        backgroundColor: "black",
                        zIndex: 10
                    }}
                >
                    <motion.div
                        layout
                        className="loading-bar"
                        variants={barVariants}
                        animate={expanding ? "final" : "loop"}
                        style={{
                            height: "100%",
                            // Feathered edges for smooth effect:
                            background: expanding
                                ? "white"
                                : "linear-gradient(to right, rgba(255,255,255,0) 0%, white 10%, white 90%, rgba(255,255,255,0) 100%)",
                            transformOrigin: expanding ? "center" : "left",
                        }}
                    />
                </div>
            </motion.div>
            {/* Bottom overlay panel */}
            <motion.div
                className="loader-bottom"
                variants={bottomVariants}
                initial="initial"
                animate={finalPhase ? "final" : "initial"}
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100vw",
                    height: "50vh",
                    background: "black",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 5,
                }}
            />
            {/* <motion.div
                layout
                className="loader-overlay"
                variants={overlayVariants}
                animate={finalPhase ? "final" : "initial"}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    background: "black",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 9999,
                }}
            >
                <h1
                    style={{
                        color: "white",
                        marginBottom: "1rem",
                        fontSize: "2rem",
                        fontWeight: "500",
                        fontFamily: "EB Garamond",
                    }}
                >
                    justin suh
                </h1>
                <div
                    style={{
                        position: "relative",
                        width: expanding ? "100%" : "200px",
                        height: "1px",
                        overflow: expanding ? "visible" : "hidden",
                        backgroundColor: "black",
                    }}
                >
                    <motion.div
                        layout
                        className="loading-bar"
                        variants={barVariants}
                        animate={expanding ? "final" : "loop"}
                        style={{
                            height: "100%",
                            background: expanding
                                ? "white"
                                : "linear-gradient(to right, rgba(255,255,255,0) 0%, white 10%, white 90%, rgba(255,255,255,0) 100%)",
                            transformOrigin: expanding ? "center" : "left",
                        }}
                    />
                </div>
            </motion.div> */}
        </AnimatePresence>
    );
};

export default Loader;
