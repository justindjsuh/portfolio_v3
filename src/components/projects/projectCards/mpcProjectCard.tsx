import { motion } from "framer-motion";
import IMAGES from "../../../assets/images/Images";
import "./projectCard.css";

export interface IProjectCardProps {
    handleNavigation: (path: string) => void;
    isMobile?: boolean;
    isVisible?: boolean;
}

const MpcProjectCard: React.FunctionComponent<IProjectCardProps> = ({
    handleNavigation,
    isMobile = false,
    isVisible = false,
}) => {
    return isMobile ? (
        <div
            className="projectCard test"
            onClick={() =>
                handleNavigation("/cases/montgomery-presbyterian-church")
            }
        >
            <img src={IMAGES.mpcBg} draggable="false" />
            <p className="projectTitle">Montgomery Presbyterian Church</p>
            <p className="projectDesc">COMING SOON</p>
            <div className="projectChipContainer">
                <span>TYPESCRIPT</span>
                <span>REACT</span>
                <span>NEXTJS</span>
                <span>EXPRESSJS</span>
                <span>SUPABASE</span>
                <span>MATERIALUI</span>
                <span>FIGMA</span>
            </div>
        </div>
    ) : (
        <motion.div
            className="projectCard"
            initial={{ opacity: 0, y: 50 }} // Start invisible and 50px lower
            animate={isVisible ? { opacity: 1, y: 0 } : undefined} // Animate based on state
            transition={{ delay: 0, duration: 0.5, ease: "easeOut" }}
            onClick={() =>
                handleNavigation("/cases/montgomery-presbyterian-church")
            }
        >
            <img src={IMAGES.mpcBg} draggable="false" />
            <p className="projectTitle">Montgomery Presbyterian Church</p>
            <p className="projectDesc">COMING SOON</p>
            <div className="projectChipContainer">
                <span>TYPESCRIPT</span>
                <span>REACT</span>
                <span>NEXTJS</span>
                <span>EXPRESSJS</span>
                <span>SUPABASE</span>
                <span>MATERIALUI</span>
                <span>FIGMA</span>
            </div>
        </motion.div>
    );
};

export default MpcProjectCard;
