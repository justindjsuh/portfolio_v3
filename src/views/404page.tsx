import { Canvas } from "@react-three/fiber";
import StickyCursor from "../components/stickyCursor/stickyCursor";
import NotFoundScene from "../components/3dRenders/NotFoundScene";
import "./404page.css";
import { motion } from "framer-motion";
import { FlipLinkV3 } from "../components/WaterfallText";

const NotFound: React.FunctionComponent = () => {
    return (
        <div className="notFoundContainer">
            <div className="notFoundContent">
                <div className="notFoundLeftSide">
                    <motion.div style={{ height: "8rem", overflow: "hidden" }}>
                        <FlipLinkV3 phrase="404." error />
                    </motion.div>
                    <motion.div
                        style={{ height: "1.5rem", overflow: "hidden" }}
                    >
                        <motion.p
                            initial={{ y: 100 }} // Start below and invisible
                            animate={{ y: 0 }} // Move up and fade in
                            transition={{
                                type: "spring",
                                stiffness: 90, // Lower stiffness = looser movement
                                damping: 20, // Reduces abrupt stop
                                mass: 1.2, // Lighter mass = more bounce
                                duration: 0.1,
                                delay: 0.1,
                            }}
                        >
                            The page you're looking for isn't here.
                        </motion.p>
                    </motion.div>
                    <motion.div
                        style={{ height: "1.5rem", overflow: "hidden" }}
                    >
                        <motion.p
                            initial={{ y: 100 }} // Start below and invisible
                            animate={{ y: 0 }} // Move up and fade in
                            transition={{
                                type: "spring",
                                stiffness: 90, // Lower stiffness = looser movement
                                damping: 20, // Reduces abrupt stop
                                mass: 1.2, // Lighter mass = more bounce
                                duration: 0.1,
                                delay: 0.2,
                            }}
                        >
                            It may have been moved or it may no longer exist.
                        </motion.p>
                    </motion.div>
                    <a href="/">
                        <button className="homeBtn">Go back home</button>
                    </a>
                </div>
                <motion.div
                    className="notFoundRightSide"
                    style={{ height: "50%", width: "50%", overflow: "hidden" }}
                >
                    <motion.div
                        initial={{ y: 500 }} // Start below and invisible
                        animate={{ y: 0 }} // Move up and fade in
                        transition={{
                            type: "spring",
                            stiffness: 70, // Lower stiffness = looser movement
                            damping: 20, // Reduces abrupt stop
                            mass: 1.2, // Lighter mass = more bounce
                            duration: 0.3,
                            delay: 0.3,
                        }}
                        style={{ height: "100%" }}
                    >
                        <Canvas
                            shadows
                            camera={{ position: [0, 1, 5], fov: 20 }}
                        >
                            <NotFoundScene />
                        </Canvas>
                    </motion.div>
                </motion.div>
            </div>
            <StickyCursor error />
        </div>
    );
};

export default NotFound;
