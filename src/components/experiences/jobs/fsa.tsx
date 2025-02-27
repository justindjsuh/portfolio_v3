import React from "react";
import { IJobType } from "../ExperiencesView";
import "../ExperiencesView.css";
import ExpertiseView from "../../expertise/ExpertiseView";
import { fsaObj } from "../experiencesHelper";
import { motion } from "framer-motion";

interface IFSAProps {
    selectedJob: IJobType;
    handleHoverSelection: (job: keyof IJobType) => void;
}

const FSA: React.FunctionComponent<IFSAProps> = ({
    selectedJob,
    handleHoverSelection,
}) => {
    return (
        <motion.div
            whileHover="hover"
            initial="rest"
            animate="rest"
            className={`jobCard comcast ${selectedJob.fsa ? "hover" : ""} ${
                selectedJob.unselected ? "unselected" : ""
            }`}
            onMouseEnter={() => handleHoverSelection("fsa")}
            onMouseLeave={() => handleHoverSelection("unselected")}
        >
            <div
                className={`jobLeftSide ${
                    selectedJob.fsa || selectedJob.unselected ? "" : "fadedDesc"
                }`}
            >
                {" "}
                <p>2022 — 2023</p>
            </div>
            <div
                className={`jobRightSide ${
                    selectedJob.fsa || selectedJob.unselected ? "" : "fadedDesc"
                }`}
            >
                <div className="title">
                    <p className="jobPosition">
                        Fullstack Academy Bootcamp @ FSA
                    </p>
                    <p className="jobLocation">Brooklyn, NY</p>
                </div>
                <div className="jobDescription">
                    Completed an intensive 13-week program in full-stack web
                    development, gaining expertise in building full-stack
                    applications with the PERN stack, creating single-page
                    applications, and utilizing tools like Git, Visual Studio
                    Code, and testing frameworks.
                </div>
                <div className="skillChipContainer">
                    <p
                        className={`skillChip ${
                            selectedJob.fsa ? "selected" : ""
                        }`}
                    >
                        React
                    </p>
                    <p
                        className={`skillChip ${
                            selectedJob.fsa ? "selected" : ""
                        }`}
                    >
                        JavaScript
                    </p>
                    <p
                        className={`skillChip ${
                            selectedJob.fsa ? "selected" : ""
                        }`}
                    >
                        Node.js
                    </p>
                    <p
                        className={`skillChip ${
                            selectedJob.fsa ? "selected" : ""
                        }`}
                    >
                        Express.js
                    </p>
                    <p
                        className={`skillChip ${
                            selectedJob.fsa ? "selected" : ""
                        }`}
                    >
                        PostgreSQL
                    </p>
                    <p
                        className={`skillChip ${
                            selectedJob.fsa ? "selected" : ""
                        }`}
                    >
                        Mocha
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
                            damping: 20,
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
                    zIndex: 10,
                }}
            >
                <ExpertiseView
                    topLeft={fsaObj.topLeft}
                    topRight={fsaObj.topRight}
                    bottomLeft={fsaObj.bottomLeft}
                    bottomRight={fsaObj.bottomRight}
                />
            </motion.div>
        </motion.div>
    );
};

export default FSA;
