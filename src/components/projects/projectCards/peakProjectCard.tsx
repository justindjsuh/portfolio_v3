import { motion } from "framer-motion";
import IMAGES from "../../../assets/images/Images";
import { IProjectCardProps } from "./mpcProjectCard";
import "./projectCard.css";

const PeakProjectCard: React.FunctionComponent<IProjectCardProps> = ({
    handleNavigation,
    isMobile = false,
    isVisible,
}) => {
    return isMobile ? (
        <div
            className="projectCard"
            onClick={() => handleNavigation("/cases/peak-fitness")}
        >
            <img src={IMAGES.peakBg} draggable="false" />
            <p className="projectTitle">Peak Fitness</p>
            <p className="projectDesc">
                All your fitness needs in one dashboard
            </p>
            <div className="projectChipContainer">
                <span>JAVASCRIPT</span>
                <span>REACT</span>
                <span>MATERIALUI</span>
                <span>EXPRESSJS</span>
                <span>POSTGRESQL</span>
                <span>SUPABASE</span>
            </div>
        </div>
    ) : (
        <div style={{ height: "28rem", overflow: "hidden" }}>
            <motion.div
                initial={{ y: 500 }} // Start below and invisible
                animate={isVisible ? { y: 0 } : {}} // Move up and fade in
                transition={{
                    type: "spring",
                    stiffness: 80, // Lower stiffness = looser movement
                    damping: 20, // Reduces abrupt stop
                    mass: 1, // Lighter mass = more bounce
                    duration: 0.1,
                    delay: 0.9,
                }}
                className="projectCard"
                onClick={() => handleNavigation("/cases/peak-fitness")}
            >
                <img src={IMAGES.peakBg} draggable="false" />
                <p className="projectTitle">Peak Fitness</p>
                <p className="projectDesc">
                    All your fitness needs in one dashboard
                </p>
                <div className="projectChipContainer">
                    <span>JAVASCRIPT</span>
                    <span>REACT</span>
                    <span>MATERIALUI</span>
                    <span>EXPRESSJS</span>
                    <span>POSTGRESQL</span>
                    <span>SUPABASE</span>
                </div>
            </motion.div>
        </div>
    );
};

export default PeakProjectCard;
