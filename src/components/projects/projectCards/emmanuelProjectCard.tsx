import { motion } from "framer-motion";
import IMAGES from "../../../assets/images/Images";
import "./projectCard.css";
import { IProjectCardProps } from "./mpcProjectCard";

const EmmanuelProjectCard: React.FunctionComponent<IProjectCardProps> = ({
    handleNavigation,
    isMobile = false,
    isVisible = false,
}) => {
    return isMobile ? (
        <div
            className="projectCard"
            onClick={() =>
                handleNavigation("/cases/emmanuel-church-of-philadelphia")
            }
        >
            <img src={IMAGES.emmanuelBg} draggable="false" />
            <p className="projectTitle">Emmanuel Church of Philadelphia</p>
            <p className="projectDesc">A modern website for a growing church</p>
            <div className="projectChipContainer">
                <span>TYPESCRIPT</span>
                <span>REACT</span>
                <span>NEXTJS</span>
                <span>VERCEL</span>
                <span>CSS3</span>
                <span>HTML5</span>
                <span>FIGMA</span>
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
                    delay: 0.6,
                }}
                onClick={() =>
                    handleNavigation("/cases/emmanuel-church-of-philadelphia")
                }
            >
                <img src={IMAGES.emmanuelBg} draggable="false" />
                <p className="projectTitle">Emmanuel Church of Philadelphia</p>
                <p className="projectDesc">
                    A modern website for a growing church
                </p>
                <div className="projectChipContainer">
                    <span>TYPESCRIPT</span>
                    <span>REACT</span>
                    <span>NEXTJS</span>
                    <span>VERCEL</span>
                    <span>CSS3</span>
                    <span>HTML5</span>
                    <span>FIGMA</span>
                </div>
            </motion.div>
        </div>
    );
};

export default EmmanuelProjectCard;
