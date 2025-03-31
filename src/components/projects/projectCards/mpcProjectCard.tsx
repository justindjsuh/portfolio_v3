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
            <p className="projectDesc">Frontline of user interaction for a local church</p>
            <div className="projectChipContainer">
                <span>TYPESCRIPT</span>
                <span>REACT</span>
                <span>FRAMER MOTION</span>
                <span>NEXTJS</span>
                <span>SUPABASE</span>
                <span>ANT DESIGN</span>
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
                    stiffness: 80, // Lower stiffness = looser movement
                    damping: 20, // Reduces abrupt stop
                    mass: 1, // Lighter mass = more bounce
                    duration: 0.1,
                    delay: 0.4,
                }}
                onClick={() =>
                    handleNavigation("/cases/montgomery-presbyterian-church")
                }
            >
                <img src={IMAGES.mpcBg} draggable="false" />
                <p className="projectTitle">Montgomery Presbyterian Church</p>
                <p className="projectDesc">Frontline of user interaction for a local church</p>
                <div className="projectChipContainer">
                  <span>TYPESCRIPT</span>
                  <span>REACT</span>
                  <span>FRAMER MOTION</span>
                  <span>NEXTJS</span>
                  <span>SUPABASE</span>
                  <span>ANT DESIGN</span>
                  <span>FIGMA</span>
                </div>
            </motion.div>
        </div>
    );
};

export default MpcProjectCard;
