import React from "react";
import { IJobType } from "../ExperiencesView";
import "../ExperiencesView.css";

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
            className={`jobCard fsa ${selectedJob.fsa ? "hover" : ""}`}
            onMouseEnter={() => handleHoverSelection("fsa")}
        >
            <div className="jobLeftSide">
                <p>2022 — 2023</p>
            </div>
            <div className="jobRightSide">
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
        </div>
    );
};

export default FSA;
