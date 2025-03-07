import { motion } from "framer-motion";
import IMAGES from "../../../assets/images/Images";
import { IProjectCardProps } from "./mpcProjectCard";
import "./projectCard.css";

const PortfolioV2Card: React.FunctionComponent<IProjectCardProps> = ({
    handleNavigation,
    isMobile = false,
    isVisible = false,
}) => {
    return isMobile ? (
        <div
            className="projectCard"
            onClick={() => handleNavigation("/cases/portfolio-v2")}
        >
            <img src={IMAGES.portfolioV2Bg} draggable="false" />
            <p className="projectTitle">Portfolio V2</p>
            <p className="projectDesc">Personal portfolio</p>
            <div className="projectChipContainer">
                <span>JAVASCRIPT</span>
                <span>REACT</span>
                <span>VITE</span>
                <span>GSAP</span>
                <span>CSS3</span>
                <span>HTML5</span>
                <span>FIGMA</span>
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
                    delay: 0.6,
                }}
                className="projectCard"
                onClick={() => handleNavigation("/cases/portfolio-v2")}
            >
                <img src={IMAGES.portfolioV2Bg} draggable="false" />
                <p className="projectTitle">Portfolio V2</p>
                <p className="projectDesc">Personal portfolio</p>
                <div className="projectChipContainer">
                    <span>JAVASCRIPT</span>
                    <span>REACT</span>
                    <span>VITE</span>
                    <span>GSAP</span>
                    <span>CSS3</span>
                    <span>HTML5</span>
                    <span>FIGMA</span>
                </div>
            </motion.div>
        </div>
    );
};

export default PortfolioV2Card;
