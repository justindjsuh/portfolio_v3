import React from "react";
import { IJobType } from "../ExperiencesView";
import "../ExperiencesView.css";
import { motion } from "framer-motion";
import ExpertiseView from "../../expertise/ExpertiseView";
import { comcastObj } from "../experiencesHelper";

interface IComcastProps {
    selectedJob: IJobType;
    handleHoverSelection: (job: keyof IJobType) => void;
}

const Comcast: React.FunctionComponent<IComcastProps> = ({
    selectedJob,
    handleHoverSelection,
}) => {
    return (
        <motion.div
            whileHover="hover"
            initial="rest"
            animate="rest"
            className={`jobCard comcast ${selectedJob.comcast ? "hover" : ""} ${
                selectedJob.unselected ? "unselected" : ""
            }`}
            onMouseEnter={() => handleHoverSelection("comcast")}
            onMouseLeave={() => handleHoverSelection("unselected")}
        >
            <div
                className={`jobLeftSide ${
                    selectedJob.comcast || selectedJob.unselected
                        ? ""
                        : "fadedDesc"
                }`}
            >
                {" "}
                <p>2023 — Present</p>
            </div>
            <div
                className={`jobRightSide ${
                    selectedJob.comcast || selectedJob.unselected
                        ? ""
                        : "fadedDesc"
                }`}
            >
                <div className="title">
                    <p className="jobPosition">
                        Full-Stack Web Developer @ Comcast
                    </p>
                    <p className="jobLocation">Philadelphia, PA</p>
                </div>
                <div className="jobDescription">
                    Led the development of 5+ high-impact features and
                    contributed to a $12M annual cost reduction by developing
                    scalable features with React and TypeScript, streamlining
                    workflows for network engineers managing 300,000+ devices,
                    while collaborating with cross-functional teams, authoring
                    comprehensive documentation, and leveraging tools like
                    Figma, Node.js, MongoDB, and Jest.
                </div>
                <div className="skillChipContainer">
                    <p
                        className={`skillChip ${
                            selectedJob.comcast ? "selected" : ""
                        }`}
                    >
                        React
                    </p>
                    <p
                        className={`skillChip ${
                            selectedJob.comcast ? "selected" : ""
                        }`}
                    >
                        TypeScript
                    </p>
                    <p
                        className={`skillChip ${
                            selectedJob.comcast ? "selected" : ""
                        }`}
                    >
                        MongoDB
                    </p>
                    <p
                        className={`skillChip ${
                            selectedJob.comcast ? "selected" : ""
                        }`}
                    >
                        Node.js
                    </p>
                    <p
                        className={`skillChip ${
                            selectedJob.comcast ? "selected" : ""
                        }`}
                    >
                        Figma
                    </p>
                    <p
                        className={`skillChip ${
                            selectedJob.comcast ? "selected" : ""
                        }`}
                    >
                        Storybook
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
                    topLeft={comcastObj.topLeft}
                    topRight={comcastObj.topRight}
                    bottomLeft={comcastObj.bottomLeft}
                    bottomRight={comcastObj.bottomRight}
                />
            </motion.div>
        </motion.div>
    );
};

export default Comcast;
