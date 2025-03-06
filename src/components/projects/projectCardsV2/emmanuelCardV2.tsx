import { motion } from "framer-motion";
import IMAGES from "../../../assets/images/Images";
import "./projectCardsV2.css";
import { IProjectCardProps } from "./mpcCardV2";

const EmmanuelCardV2: React.FunctionComponent<IProjectCardProps> = ({
    handleNavigation,
    isVisible = false,
}) => {
    return (
        <div
            className="projectCardV2"
            onClick={() =>
                handleNavigation("/cases/emmanuel-church-of-philadelphia")
            }
        >
            <motion.img
                initial={{ opacity: 0, y: 50 }} // Start invisible and 50py lower
                animate={isVisible ? { opacity: 1, y: 0 } : undefined} // Animate based on state
                transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
                src={IMAGES.caseEmmanuelBg}
                draggable="false"
            />
            <div className="cardRightSide">
                <motion.div
                    className="projectSubImages"
                    initial={{ opacity: 0, x: 50 }} // Start invisible and 50px lower
                    animate={isVisible ? { opacity: 1, x: 0 } : undefined} // Animate based on state
                    transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                >
                    <img src={IMAGES.emmanuelImg1} />
                    <img src={IMAGES.emmanuelImg2} />
                </motion.div>
                <motion.div
                    className="projectDetails"
                    initial={{ opacity: 0, x: 50 }} // Start invisible and 50px lower
                    animate={isVisible ? { opacity: 1, x: 0 } : undefined} // Animate based on state
                    transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
                >
                    <div className="projectText">
                        <p className="projectTitleV2">
                            Emmanuel Church of Philadelphia
                        </p>
                        <p className="projectDescV2">
                            A modern website for a growing church
                        </p>
                    </div>
                    <div className="projectChipContainer">
                        <span>TYPESCRIPT</span>
                        <span>REACT</span>
                        <span>NEXTJS</span>
                        <span>VERCEL</span>
                        <span>CSS3</span>
                        <span>HTML5</span>
                        <span>FIGMA</span>
                    </div>
                    <motion.hr
                        className="dividerDim"
                        initial={{ scaleX: 0 }} // Start invisible and 50px lower
                        animate={isVisible ? { scaleX: 1 } : undefined} // Animate based on state
                        transition={{
                            delay: 1.5,
                            duration: 0.5,
                            ease: "easeOut",
                        }}
                        style={{ originX: 0 }}
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default EmmanuelCardV2;
