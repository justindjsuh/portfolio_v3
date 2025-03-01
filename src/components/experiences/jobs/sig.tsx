import React from "react";
import { IJobType } from "../ExperiencesView";
import "../ExperiencesView.css";

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
        <div
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
                    <h3 className="jobPosition">
                        Full-Stack Web Developer @ SIG
                    </h3>
                    <p className={`jobLocation ${darkMode ? "darkMode" : ""}`}>
                        Bala Cynwyd, PA
                    </p>
                </div>
                <p className={`jobDescription ${darkMode ? "darkMode" : ""}`}>
                    Provided technical consultation for troubleshooting
                    hardware, software, and network issues, assembled and
                    configured production workstations, and created clear
                    documentation to enhance the hardware build process across
                    the company.
                </p>
                <div className="skillChipContainer">
                    <span
                        className={`skillChip ${
                            selectedJob.sig ? "selected" : ""
                        } ${darkMode ? "darkMode" : ""}`}
                    >
                        Bash
                    </span>
                    <span
                        className={`skillChip ${
                            selectedJob.sig ? "selected" : ""
                        } ${darkMode ? "darkMode" : ""}`}
                    >
                        Markdown
                    </span>
                    <span
                        className={`skillChip ${
                            selectedJob.sig ? "selected" : ""
                        } ${darkMode ? "darkMode" : ""}`}
                    >
                        Jira
                    </span>
                    <span
                        className={`skillChip ${
                            selectedJob.sig ? "selected" : ""
                        } ${darkMode ? "darkMode" : ""}`}
                    >
                        Confluence
                    </span>
                </div>
            </div>
        </div>
    );
};

export default SIG;
