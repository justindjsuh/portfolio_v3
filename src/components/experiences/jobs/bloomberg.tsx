import React from "react";
import { IJobType } from "../ExperiencesView";
import "../ExperiencesView.css";
import { motion } from "framer-motion";
import ExpertiseView from "../../expertise/ExpertiseView";
import { bloombergObj } from "../experiencesHelper";

interface IBloombergProps {
    selectedJob: IJobType;
    handleHoverSelection: (job: keyof IJobType) => void;
}

const Bloomberg: React.FunctionComponent<IBloombergProps> = ({
    selectedJob,
    handleHoverSelection,
}) => {
    return (
        <motion.div
            whileHover="hover"
            initial="rest"
            animate="rest"
            className={`jobCard comcast ${
                selectedJob.bloomberg ? "hover" : ""
            } ${selectedJob.unselected ? "unselected" : ""}`}
            onMouseEnter={() => handleHoverSelection("bloomberg")}
            onMouseLeave={() => handleHoverSelection("unselected")}
        >
            <div
                className={`jobLeftSide ${
                    selectedJob.bloomberg || selectedJob.unselected
                        ? ""
                        : "fadedDesc"
                }`}
            >
                <p>2019 — 2020</p>
            </div>
            <div
                className={`jobRightSide ${
                    selectedJob.bloomberg || selectedJob.unselected
                        ? ""
                        : "fadedDesc"
                }`}
            >
                <div className="title">
                    <p className="jobPosition">
                        Data Engineer Co-op @ Bloomberg
                    </p>
                    <p className="jobLocation">Princeton, NJ</p>
                </div>
                <div className="jobDescription">
                    Designed and tested advanced web crawlers for seamless
                    Bloomberg Terminal integration and automated Jira role
                    access processes, significantly enhancing workflow
                    efficiency and supporting the analysis of over 1M+ financial
                    data points daily using Python, JavaScript, and Jupyter
                    Notebook.
                </div>
                <div className="skillChipContainer">
                    <p
                        className={`skillChip ${
                            selectedJob.bloomberg ? "selected" : ""
                        }`}
                    >
                        JavaScript
                    </p>
                    <p
                        className={`skillChip ${
                            selectedJob.bloomberg ? "selected" : ""
                        }`}
                    >
                        HTML
                    </p>
                    <p
                        className={`skillChip ${
                            selectedJob.bloomberg ? "selected" : ""
                        }`}
                    >
                        CSS
                    </p>
                    <p
                        className={`skillChip ${
                            selectedJob.bloomberg ? "selected" : ""
                        }`}
                    >
                        Python
                    </p>
                    <p
                        className={`skillChip ${
                            selectedJob.bloomberg ? "selected" : ""
                        }`}
                    >
                        Regex
                    </p>
                </div>
            </div>
            {/* DISPLAY NONE FOR MOBILE??? */}
            <motion.div
                variants={{
                    rest: { y: 300 }, // Offscreen (or hidden) by 100px down
                    hover: {
                        y: 0, // Move to original position (assume container is fixed at bottom:2rem)
                        transition: {
                            type: "spring",
                            stiffness: 300,
                            damping: 25,
                        },
                    },
                }}
                style={{
                    position: "fixed",
                    bottom: "2rem",
                    left: "25%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    gap: "1rem",
                    opacity: "1",
                    zIndex: 10,
                }}
            >
                <ExpertiseView
                    topLeft={bloombergObj.topLeft}
                    topRight={bloombergObj.topRight}
                    bottomLeft={bloombergObj.bottomLeft}
                    bottomRight={bloombergObj.bottomRight}
                />
            </motion.div>
        </motion.div>
    );
};

export default Bloomberg;
