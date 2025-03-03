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
        <motion.div
            className="projectCard"
            initial={{ opacity: 0, y: 50 }} // Start invisible and 50px lower
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate based on state
            transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
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
        </motion.div>
    );
};

export default EmmanuelProjectCard;
