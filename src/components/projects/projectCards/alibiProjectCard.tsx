import { motion } from "framer-motion";
import IMAGES from "../../../assets/images/Images";
import { IProjectCardProps } from "./mpcProjectCard";
import "./projectCard.css";

const AlibiProjectCard: React.FunctionComponent<IProjectCardProps> = ({
    handleNavigation,
    isMobile = false,
    isVisible = false,
}) => {
    return isMobile ? (
        <div
            className="projectCard"
            onClick={() => handleNavigation("/cases/alibi-esports")}
        >
            <img src={IMAGES.alibiBg} draggable="false" />
            <p className="projectTitle">Alibi Esports</p>
            <p className="projectDesc">Central hub for competitive gamers</p>
            <div className="projectChipContainer">
                <span>JAVASCRIPT</span>
                <span>REACT</span>
                <span>AOS</span>
                <span>CSS3</span>
                <span>HTML5</span>
                <span>EXPRESSJS</span>
                <span>POSTGRESQL</span>
            </div>
        </div>
    ) : (
        <div style={{ height: "28rem", overflow: "hidden" }}>
            <motion.div
                className="projectCard"
                initial={{ y: 500 }} // Start below and invisible
                animate={isVisible ? { y: 0 } : {}} // Move up and fade in
                transition={{
                    type: "spring",
                    stiffness: 60, // Lower stiffness = looser movement
                    damping: 20, // Reduces abrupt stop
                    mass: 1.2, // Lighter mass = more bounce
                    duration: 0.1,
                    delay: 1.2,
                }}
                onClick={() => handleNavigation("/cases/alibi-esports")}
            >
                <img src={IMAGES.alibiBg} draggable="false" />
                <p className="projectTitle">Alibi Esports</p>
                <p className="projectDesc">
                    Central hub for competitive gamers
                </p>
                <div className="projectChipContainer">
                    <span>JAVASCRIPT</span>
                    <span>REACT</span>
                    <span>AOS</span>
                    <span>CSS3</span>
                    <span>HTML5</span>
                    <span>EXPRESSJS</span>
                    <span>POSTGRESQL</span>
                </div>
            </motion.div>
        </div>
    );
};

export default AlibiProjectCard;
