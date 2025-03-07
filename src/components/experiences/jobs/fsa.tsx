import React from "react";
import { IJobType } from "../ExperiencesView";
import "../ExperiencesView.css";
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
        <div
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
                <p>2022 — 2023</p>
            </div>
            <div
                className={`jobRightSide ${
                    selectedJob.fsa || selectedJob.unselected ? "" : "fadedDesc"
                }`}
            >
                <div className="title">
                    <h3 className="jobPosition">
                        Fullstack Academy Bootcamp @ FSA
                    </h3>
                    <p className="jobLocation">Brooklyn, NY</p>
                </div>
                <motion.p
                    className="jobDescription"
                    initial={{ height: "0px", opacity: 0 }}
                    animate={
                        selectedJob.fsa
                            ? { height: "4rem", opacity: 1 }
                            : { height: "0px", opacity: 0 }
                    }
                    transition={{
                        height: {
                            duration: 0.2,
                            ease: "easeOut",
                        },
                        opacity: selectedJob.fsa
                            ? { delay: 0.2, duration: 0.3, ease: "easeOut" }
                            : { delay: 0.2, duration: 0.3, ease: "easeOut" },
                    }}
                >
                    Completed an intensive 13-week program in full-stack web
                    development, gaining expertise in building full-stack
                    applications with the PERN stack, creating single-page
                    applications, and utilizing tools like Git, Visual Studio
                    Code, and testing frameworks.
                </motion.p>
                <div className="skillChipContainer">
                    {[
                        "React",
                        "JavaScript",
                        "Node.js",
                        "Express.js",
                        "PostgreSQL",
                        "Mocha",
                    ].map((skill) => (
                        <span
                            key={skill}
                            className={`skillChip ${
                                selectedJob.fsa ? "selected" : ""
                            }`}
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FSA;
