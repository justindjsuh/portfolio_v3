import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Loader: React.FunctionComponent = () => {
    const [finalPhase, setFinalPhase] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        // Stop looping after 4 seconds and start the final expansion
        const pulseTimer = setTimeout(() => {
            setFinalPhase(true);
        }, 4000);

        // Ensure overlay fade-out only starts after expansion fully completes
        const fadeOutTimer = setTimeout(() => {
            setFadeOut(true);
        }, 5500); // Expansion takes 1.5s, so fadeOut starts *after* that

        return () => {
            clearTimeout(pulseTimer);
            clearTimeout(fadeOutTimer);
        };
    }, []);

    // Loading bar animation variants:
    const barVariants = {
        loop: {
            x: [0, 200], // Moves across the bar area
            scaleX: [0, 0.8, 1], // Grows & shrinks
            transition: {
                duration: 1,
                ease: "easeInOut",
                repeat: finalPhase ? 0 : Infinity, // Stops looping after finalPhase is true
            },
        },
        final: {
            scaleX: 1, // Expands fully
            transition: { duration: 1.5, ease: "easeInOut" },
        },
    };

    // Overlay fade-out animation
    const overlayVariants = {
        initial: { opacity: 1 },
        final: {
            opacity: 0,
            transition: { duration: 1.5, ease: "easeInOut" }, // Smooth fade-out
        },
    };

    return (
        <AnimatePresence mode="wait">
            {!fadeOut && (
                <motion.div
                    layout
                    className="loader-overlay"
                    variants={overlayVariants}
                    animate={fadeOut ? "final" : "initial"}
                    exit={{
                        opacity: 0,
                        transition: { duration: 1.5, ease: "easeInOut" },
                    }}
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
                    {/* Your Name */}
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
                    {/* Loading bar container */}
                    <div
                        style={{
                            position: "relative",
                            width: finalPhase ? "100%" : "200px",
                            height: "1px",
                            overflow: finalPhase ? "visible" : "hidden",
                            backgroundColor: "black",
                        }}
                    >
                        <motion.div
                            layout
                            className="loading-bar"
                            variants={barVariants}
                            animate={finalPhase ? "final" : "loop"}
                            style={{
                                height: "100%",
                                background:
                                    "linear-gradient(to right, rgba(255,255,255,0) 0%, white 10%, white 90%, rgba(255,255,255,0) 100%)",
                                transformOrigin: finalPhase ? "center" : "left",
                            }}
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Loader;
