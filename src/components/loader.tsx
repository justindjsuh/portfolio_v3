import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Loader: React.FunctionComponent = () => {
    const [finalPhase, setFinalPhase] = useState(false);

    useEffect(() => {
        // After 4 seconds, stop the looping pulse and trigger the final expansion.
        const pulseTimer = setTimeout(() => {
            setFinalPhase(true);
        }, 5000);
        return () => clearTimeout(pulseTimer);
    }, []);

    // Loading bar animation variants:
    const barVariants = {
        // Looping pulse animation:
        // The bar animates its scaleX (its effective width) and moves its x position.
        loop: {
            x: [0, 200], // Starts at x=0, stays, then moves to x=50 (simulating movement to the right)
            scaleX: [0, 0.3, 1], // Grows from 0 to full (1) then back to 0
            transition: {
                duration: 1,
                ease: "easeInOut",
                repeat: Infinity,
            },
        },
        // Final expansion: with transformOrigin at the center, the bar grows from 0 to full width.
        final: {
            scaleX: 1,
            transition: { duration: 1, ease: "easeInOut" },
        },
    };

    // Overlay animation: We want the overlay to remain fully opaque during the final expansion,
    // then fade out. Delay the fade-out transition so the final expansion finishes first.
    const overlayVariants = {
        initial: { opacity: 1 },
        final: {
            opacity: 0,
            transition: { delay: 1, duration: 1.15, ease: "easeInOut" },
        },
    };

    return (
        <AnimatePresence mode="wait">
            <motion.div
                layout
                className="loader-overlay"
                variants={overlayVariants}
                animate={finalPhase ? "final" : "initial"}
                exit={{
                    opacity: 0,
                    transition: { duration: 1, ease: "easeInOut" },
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
                        marginBottom: "1.25rem",
                        fontSize: "1.5rem",
                        fontWeight: "500",
                    }}
                >
                    JUSTIN SUH
                </h1>
                {/* Loading bar container */}
                <div
                    style={{
                        position: "relative",
                        width: finalPhase ? "100%" : "200px",
                        height: "2px",
                        overflow: finalPhase ? "visible" : "hidden",
                        backgroundColor: "rgba(255,255,255,0.1)",
                    }}
                >
                    <motion.div
                        layout
                        className="loading-bar"
                        variants={barVariants}
                        animate={finalPhase ? "final" : "loop"}
                        style={{
                            height: "100%",
                            // A gradient for feathered edges:
                            background:
                                "linear-gradient(to right, rgba(255,255,255,0) 0%, white 10%, white 100%, rgba(255,255,255,0) 100%)",
                            // For the looping phase, the origin is at the left; for final expansion, change it to center.
                            transformOrigin: finalPhase ? "center" : "left",
                        }}
                    />
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default Loader;

// import { motion, AnimatePresence } from "framer-motion";

// const Loader = ({ onFinish }) => {
//     // State to trigger final animation (expanding bar + fade out)
//     const [finalAnimation, setFinalAnimation] = useState(false);

//     useEffect(() => {
//         // After 3 seconds, trigger the final animation
//         const timer = setTimeout(() => {
//             setFinalAnimation(true);
//             // Allow 1 second for the final animation, then finish
//             setTimeout(() => {
//                 onFinish();
//             }, 1000);
//         }, 3000);

//         return () => clearTimeout(timer);
//     }, [onFinish]);

//     // Variants for the overlay fade out
//     const overlayVariants = {
//         initial: { opacity: 1 },
//         final: { opacity: 0, transition: { duration: 1 } },
//     };

//     // Variants for the loading bar:
//     // - "pulsate": moves slightly left-to-right continuously
//     // - "expand": expands to full width
//     const barVariants = {
//         pulsate: {
//             x: [0, 20, 0], // This makes it move 20px right then back
//             transition: {
//                 duration: 1,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//             },
//         },
//         expand: {
//             width: "100%",
//             transition: { duration: 1 },
//         },
//     };

//     return (
//         <motion.div
//             className="loader-overlay"
//             variants={overlayVariants}
//             animate={finalAnimation ? "final" : "initial"}
//             style={{
//                 position: "fixed",
//                 top: 0,
//                 left: 0,
//                 width: "100vw",
//                 height: "100vh",
//                 background: "black",
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 zIndex: 9999,
//             }}
//         >
//             {/* Your Name */}
//             <h1
//                 style={{
//                     color: "white",
//                     marginBottom: "20px",
//                     fontSize: "3rem",
//                 }}
//             >
//                 Justin Suh
//             </h1>

//             {/* Loading bar */}
//             <motion.div
//                 className="loading-bar"
//                 variants={barVariants}
//                 animate={finalAnimation ? "expand" : "pulsate"}
//                 style={{
//                     height: "2px",
//                     width: finalAnimation ? "100%" : "250px",
//                     background: "white",
//                 }}
//             />
//         </motion.div>
//     );
// };
