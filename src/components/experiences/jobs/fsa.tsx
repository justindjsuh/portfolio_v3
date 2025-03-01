import React from "react";
import { IJobType } from "../ExperiencesView";
import "../ExperiencesView.css";

interface IFSAProps {
    selectedJob: IJobType;
    handleHoverSelection: (job: keyof IJobType) => void;
    darkMode?: boolean;
}

const FSA: React.FunctionComponent<IFSAProps> = ({
    selectedJob,
    handleHoverSelection,
    darkMode = false,
}) => {
    return (
        <div
            className={`jobCard comcast ${selectedJob.fsa ? "hover" : ""} ${
                selectedJob.unselected ? "unselected" : ""
            } ${darkMode ? "darkMode" : ""}`}
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
                    <h3 className="jobPosition">
                        Fullstack Academy Bootcamp @ FSA
                    </h3>
                    <p className={`jobLocation ${darkMode ? "darkMode" : ""}`}>
                        Brooklyn, NY
                    </p>
                </div>
                <p className={`jobDescription ${darkMode ? "darkMode" : ""}`}>
                    Completed an intensive 13-week program in full-stack web
                    development, gaining expertise in building full-stack
                    applications with the PERN stack, creating single-page
                    applications, and utilizing tools like Git, Visual Studio
                    Code, and testing frameworks.
                </p>
                <div className="skillChipContainer">
                    <span
                        className={`skillChip ${
                            selectedJob.fsa ? "selected" : ""
                        }`}
                    >
                        React
                    </span>
                    <span
                        className={`skillChip ${
                            selectedJob.fsa ? "selected" : ""
                        }`}
                    >
                        JavaScript
                    </span>
                    <span
                        className={`skillChip ${
                            selectedJob.fsa ? "selected" : ""
                        }`}
                    >
                        Node.js
                    </span>
                    <span
                        className={`skillChip ${
                            selectedJob.fsa ? "selected" : ""
                        }`}
                    >
                        Express.js
                    </span>
                    <span
                        className={`skillChip ${
                            selectedJob.fsa ? "selected" : ""
                        }`}
                    >
                        PostgreSQL
                    </span>
                    <span
                        className={`skillChip ${
                            selectedJob.fsa ? "selected" : ""
                        }`}
                    >
                        Mocha
                    </span>
                </div>
            </div>
        </div>
    );
};

export default FSA;
