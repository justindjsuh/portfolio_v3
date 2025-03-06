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
        <motion.div
            initial={{ opacity: 0, y: 50 }} // Start invisible and 50px lower
            animate={isVisible ? { opacity: 1, y: 0 } : undefined} // Animate based on state
            transition={{ delay: 1.25, duration: 0.5, ease: "easeOut" }}
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
    );
};

export default PeakProjectCard;
