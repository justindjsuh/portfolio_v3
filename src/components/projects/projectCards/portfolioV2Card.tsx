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
        <motion.div
            initial={{ opacity: 0, y: 50 }} // Start invisible and 50px lower
            animate={isVisible ? { opacity: 1, y: 0 } : undefined} // Animate based on state
            transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
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
    );
};

export default PortfolioV2Card;
