import React from "react";
import { IJobType } from "../ExperiencesView";
import "../ExperiencesView.css";
import { motion } from "framer-motion";
import ExpertiseView from "../../expertise/ExpertiseView";
import { sigObj } from "../experiencesHelper";

interface ISIGProps {
    selectedJob: IJobType;
    handleHoverSelection: (job: keyof IJobType) => void;
    darkMode?: boolean;
}

const SIG: React.FunctionComponent<ISIGProps> = ({
    selectedJob,
    handleHoverSelection,
    darkMode = false,
}) => {
    return (
        <motion.div
            whileHover="hover"
            initial="rest"
            animate="rest"
            className={`jobCard comcast ${selectedJob.sig ? "hover" : ""} ${
                selectedJob.unselected ? "unselected" : ""
            } ${darkMode ? "darkMode" : ""}`}
            onMouseEnter={() => handleHoverSelection("sig")}
            onMouseLeave={() => handleHoverSelection("unselected")}
        >
            <div
                className={`jobLeftSide ${
                    selectedJob.sig || selectedJob.unselected ? "" : "fadedDesc"
                }`}
            >
                {" "}
                <p>2018 — 2019</p>
            </div>
            <div
                className={`jobRightSide ${
                    selectedJob.sig || selectedJob.unselected ? "" : "fadedDesc"
                }`}
            >
                <div className="title">
                    <p className="jobPosition">
                        Full-Stack Web Developer @ SIG
                    </p>
                    <p className={`jobLocation ${darkMode ? "darkMode" : ""}`}>
                        Bala Cynwyd, PA
                    </p>
                </div>
                <div className={`jobDescription ${darkMode ? "darkMode" : ""}`}>
                    Provided technical consultation for troubleshooting
                    hardware, software, and network issues, assembled and
                    configured production workstations, and created clear
                    documentation to enhance the hardware build process across
                    the company.
                </div>
                <div className="skillChipContainer">
                    <p
                        className={`skillChip ${
                            selectedJob.sig ? "selected" : ""
                        } ${darkMode ? "darkMode" : ""}`}
                    >
                        Bash
                    </p>
                    <p
                        className={`skillChip ${
                            selectedJob.sig ? "selected" : ""
                        } ${darkMode ? "darkMode" : ""}`}
                    >
                        Markdown
                    </p>
                    <p
                        className={`skillChip ${
                            selectedJob.sig ? "selected" : ""
                        } ${darkMode ? "darkMode" : ""}`}
                    >
                        Jira
                    </p>
                    <p
                        className={`skillChip ${
                            selectedJob.sig ? "selected" : ""
                        } ${darkMode ? "darkMode" : ""}`}
                    >
                        Confluence
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
                    left: "0",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    gap: "1rem",
                    opacity: "1",
                    zIndex: 10,
                }}
            >
                <ExpertiseView
                    topLeft={sigObj.topLeft}
                    topRight={sigObj.topRight}
                    bottomLeft={sigObj.bottomLeft}
                    bottomRight={sigObj.bottomRight}
                    darkMode={darkMode}
                />
            </motion.div>
        </motion.div>
    );
};

export default SIG;
