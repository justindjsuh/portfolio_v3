import { motion, useInView } from "framer-motion";
import "./ContactView.css";
import { useEffect, useRef, useState } from "react";
import { FlipLinkV2, FlipLinkV3 } from "../WaterfallText";
import { Canvas } from "@react-three/fiber";
import ContactScene from "../3dRenders/ContactScene";

const ContactView: React.FunctionComponent = () => {
    const firstRef = useRef(null);
    const [visible, setVisible] = useState(false);

    const isInView = useInView(firstRef, { amount: 0.5 });

    useEffect(() => {
        if (isInView) setVisible(true);
    }, [isInView]);

    return (
        <div className="contactContainer">
            <div className="contactContent" ref={firstRef}>
                <motion.div style={{ overflow: "hidden", height: "2rem" }}>
                    <motion.p
                        className="contactText"
                        initial={{ y: 100 }} // Start below and invisible
                        animate={visible ? { y: 0 } : {}} // Move up and fade in
                        transition={{
                            type: "spring",
                            stiffness: 90, // Lower stiffness = looser movement
                            damping: 20, // Reduces abrupt stop
                            mass: 1.2, // Lighter mass = more bounce
                            duration: 0.1,
                        }}
                    >
                        Contact
                    </motion.p>
                </motion.div>
                <div className="contactMainContent">
                    <div className="mainTextContainer">
                        <motion.div className="letsGetContainer">
                            <motion.p
                                className="getConnectedText"
                                initial={{ y: 100 }} // Start below and invisible
                                animate={visible ? { y: 0 } : {}} // Move up and fade in
                                transition={{
                                    type: "spring",
                                    stiffness: 90, // Lower stiffness = looser movement
                                    damping: 20, // Reduces abrupt stop
                                    mass: 1.2, // Lighter mass = more bounce
                                    duration: 0.1,
                                    delay: 0.25,
                                }}
                            >
                                Let's get
                            </motion.p>
                        </motion.div>
                        <motion.div className="connectedContainer">
                            <motion.p
                                className="getConnectedText"
                                initial={{ y: 100 }} // Start below and invisible
                                animate={visible ? { y: 0 } : {}} // Move up and fade in
                                transition={{
                                    type: "spring",
                                    stiffness: 90, // Lower stiffness = looser movement
                                    damping: 20, // Reduces abrupt stop
                                    mass: 1.2, // Lighter mass = more bounce
                                    duration: 0.1,
                                    delay: 0.5,
                                }}
                            >
                                connected
                                <span className="word-highlight">.</span>
                            </motion.p>
                        </motion.div>
                        <motion.div
                            style={{ overflow: "hidden", height: "3rem" }}
                        >
                            <motion.p
                                className="getConnectedSubText"
                                initial={{ y: 100 }} // Start below and invisible
                                animate={visible ? { y: 0 } : {}} // Move up and fade in
                                transition={{
                                    type: "spring",
                                    stiffness: 90, // Lower stiffness = looser movement
                                    damping: 20, // Reduces abrupt stop
                                    mass: 1.2, // Lighter mass = more bounce
                                    duration: 0.1,
                                    delay: 0.75,
                                }}
                            >
                                Capture your ideas, create connections
                            </motion.p>
                        </motion.div>
                    </div>
                    <div className="contactBottomContainer">
                        <div className="contactChipContainer">
                            <motion.div
                                style={{ overflow: "hidden", height: "5.9rem" }}
                            >
                                <motion.div
                                    className="getConnectedSubText"
                                    initial={{ y: 100 }} // Start below and invisible
                                    animate={visible ? { y: 0 } : {}} // Move up and fade in
                                    transition={{
                                        type: "spring",
                                        stiffness: 90, // Lower stiffness = looser movement
                                        damping: 20, // Reduces abrupt stop
                                        mass: 1.2, // Lighter mass = more bounce
                                        duration: 0.1,
                                        delay: 0.25,
                                    }}
                                >
                                    <a
                                        href="https://github.com/justindjsuh"
                                        target="_blank"
                                    >
                                        <FlipLinkV2 phrase="github" />
                                    </a>
                                </motion.div>
                            </motion.div>
                            <motion.div
                                style={{ overflow: "hidden", height: "4.8rem" }}
                            >
                                <motion.div
                                    className="getConnectedSubText"
                                    initial={{ y: 100 }} // Start below and invisible
                                    animate={visible ? { y: 0 } : {}} // Move up and fade in
                                    transition={{
                                        type: "spring",
                                        stiffness: 90, // Lower stiffness = looser movement
                                        damping: 20, // Reduces abrupt stop
                                        mass: 1.2, // Lighter mass = more bounce
                                        duration: 0.1,
                                        delay: 0.5,
                                    }}
                                >
                                    <a
                                        href="https://www.linkedin.com/in/justin-suh98/"
                                        target="_blank"
                                    >
                                        <FlipLinkV2 phrase="linkedin" />
                                    </a>
                                </motion.div>
                            </motion.div>
                            <motion.div
                                style={{ overflow: "hidden", height: "5rem" }}
                            >
                                <motion.div
                                    className="getConnectedSubText"
                                    initial={{ y: 100 }} // Start below and invisible
                                    animate={visible ? { y: 0 } : {}} // Move up and fade in
                                    transition={{
                                        type: "spring",
                                        stiffness: 90, // Lower stiffness = looser movement
                                        damping: 20, // Reduces abrupt stop
                                        mass: 1.2, // Lighter mass = more bounce
                                        duration: 0.1,
                                        delay: 0.75,
                                    }}
                                >
                                    <a href="mailto:justindjsuh@gmail.com">
                                        <FlipLinkV2 phrase="email" />
                                    </a>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
                <motion.hr
                    className="dividerDim"
                    initial={{ scaleX: 0, opacity: 1 }} // Start as a thin line
                    animate={visible ? { scaleX: 1 } : undefined} // Expand width-wise
                    transition={{
                        delay: 1.5,
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                    style={{ originX: 0 }} // Ensures it expands from left to right
                />

                <div className="footerContent">
                    <div className="footerLeft">
                        {visible && (
                            <div
                                className="nameAnimation"
                                style={{ overflow: "hidden", height: "10rem" }}
                            >
                                <FlipLinkV3 phrase="justin suh." />
                            </div>
                        )}
                        <p className="copyright" style={{ color: "#404040" }}>
                            © 2025 Justin Suh. All Rights Reserved.
                        </p>
                    </div>
                    <motion.div
                        className="footerRight"
                        style={{ overflow: "hidden", height: "10rem" }}
                    >
                        <motion.div
                            initial={{ y: 200 }} // Start below and invisible
                            animate={visible ? { y: 0 } : {}} // Move up and fade in
                            transition={{
                                type: "spring",
                                stiffness: 50, // Lower stiffness = looser movement
                                damping: 20, // Reduces abrupt stop
                                mass: 1.2, // Lighter mass = more bounce
                                duration: 0.8,
                                delay: 1,
                            }}
                            style={{ height: "100%" }}
                        >
                            <Canvas
                                shadows
                                camera={{ position: [0, 1, 5], fov: 20 }}
                                frameloop={visible ? "always" : "never"}
                            >
                                <ContactScene />
                            </Canvas>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ContactView;
