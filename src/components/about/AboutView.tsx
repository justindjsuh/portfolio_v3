import { motion, useInView } from "framer-motion";
import "./AboutView.css";
import { useEffect, useRef, useState } from "react";

const AboutView: React.FunctionComponent = () => {
    const [visible, setVisible] = useState(false);
    const headerRef = useRef(null);
    const isInView = useInView(headerRef, { amount: 0.8 });

    useEffect(() => {
        if (isInView) setVisible(true);
    }, [isInView]);

    return (
        <div className="aboutContainer">
            <div className="aboutContent">
                <motion.div
                    style={{ overflow: "hidden", height: "2.5rem" }}
                    ref={headerRef}
                >
                    <motion.h2
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
                        Hey there, I'm{" "}
                        <span className="highlight">Justin.</span>
                    </motion.h2>
                </motion.div>
                <motion.div style={{ overflow: "hidden", height: "5rem" }}>
                    <motion.p
                        className="aboutMe"
                        initial={{ y: 100 }} // Start below and invisible
                        animate={visible ? { y: 0 } : {}} // Move up and fade in
                        transition={{
                            type: "spring",
                            stiffness: 90, // Lower stiffness = looser movement
                            damping: 20, // Reduces abrupt stop
                            mass: 1.2, // Lighter mass = more bounce
                            duration: 0.1,
                            delay: 0.2,
                        }}
                    >
                        I bridge the gap between
                    </motion.p>
                </motion.div>
                <motion.div style={{ overflow: "hidden", height: "5rem" }}>
                    <motion.p
                        className="aboutMe"
                        initial={{ y: 100 }} // Start below and invisible
                        animate={visible ? { y: 0 } : {}} // Move up and fade in
                        transition={{
                            type: "spring",
                            stiffness: 90, // Lower stiffness = looser movement
                            damping: 20, // Reduces abrupt stop
                            mass: 1.2, // Lighter mass = more bounce
                            duration: 0.1,
                            delay: 0.4,
                        }}
                    >
                        <span className="word-highlight">creativity</span> and{" "}
                        <span className="word-highlight">code</span> to build
                    </motion.p>
                </motion.div>
                <motion.div style={{ overflow: "hidden", height: "5rem" }}>
                    <motion.p
                        className="aboutMe"
                        initial={{ y: 100 }} // Start below and invisible
                        animate={visible ? { y: 0 } : {}} // Move up and fade in
                        transition={{
                            type: "spring",
                            stiffness: 90, // Lower stiffness = looser movement
                            damping: 20, // Reduces abrupt stop
                            mass: 1.2, // Lighter mass = more bounce
                            duration: 0.1,
                            delay: 0.6,
                        }}
                    >
                        <span className="word-highlight">
                            unforgettable experiences.
                        </span>
                    </motion.p>
                </motion.div>
            </div>
        </div>
    );
};

export default AboutView;
