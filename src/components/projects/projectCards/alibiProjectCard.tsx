import { motion } from "framer-motion";
import IMAGES from "../../../assets/images/Images";
import { IProjectCardProps } from "./mpcProjectCard";
import "./projectCard.css";

const AlibiProjectCard: React.FunctionComponent<IProjectCardProps> = ({
    handleNavigation,
    isMobile = false,
    isVisible = false,
    darkMode,
}) => {
    return isMobile ? (
        <div
            className="projectCard"
            onClick={() => handleNavigation("/cases/alibi-esports")}
        >
            <img src={IMAGES.alibiBg} draggable="false" />
            <p className={`projectTitle ${darkMode ? "darkMode" : ""}`}>
                Alibi Esports
            </p>
            <p className={`projectDesc ${darkMode ? "darkMode" : ""}`}>
                Central hub for competitive gamers
            </p>
            <div
                className={`projectChipContainer ${darkMode ? "darkMode" : ""}`}
            >
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
        <motion.div
            className="projectCard"
            initial={{ opacity: 0, y: 50 }} // Start invisible and 50px lower
            animate={isVisible ? { opacity: 1, y: 0 } : undefined} // Animate based on state
            transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
            onClick={() => handleNavigation("/cases/alibi-esports")}
        >
            <img src={IMAGES.alibiBg} draggable="false" />
            <p className={`projectTitle ${darkMode ? "darkMode" : ""}`}>
                Alibi Esports
            </p>
            <p className={`projectDesc ${darkMode ? "darkMode" : ""}`}>
                Central hub for competitive gamers
            </p>
            <div
                className={`projectChipContainer ${darkMode ? "darkMode" : ""}`}
            >
                <span>JAVASCRIPT</span>
                <span>REACT</span>
                <span>AOS</span>
                <span>CSS3</span>
                <span>HTML5</span>
                <span>EXPRESSJS</span>
                <span>POSTGRESQL</span>
            </div>
        </motion.div>
    );
};

export default AlibiProjectCard;
