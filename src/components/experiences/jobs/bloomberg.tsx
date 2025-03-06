import React from "react";
import { IJobType } from "../ExperiencesView";
import "../ExperiencesView.css";

interface IBloombergProps {
    selectedJob: IJobType;
    handleHoverSelection: (job: keyof IJobType) => void;
    darkMode?: boolean;
}

const Bloomberg: React.FunctionComponent<IBloombergProps> = ({
    selectedJob,
    handleHoverSelection,
    darkMode = false,
}) => {
    return (
        <div
            className={`jobCard comcast ${
                selectedJob.bloomberg ? "hover" : ""
            } ${selectedJob.unselected ? "unselected" : ""} ${
                darkMode ? "darkMode" : ""
            }`}
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
                    <h3 className="jobPosition">
                        Data Engineer Co-op @ Bloomberg
                    </h3>
                    <p className={`jobLocation ${darkMode ? "darkMode" : ""}`}>
                        Princeton, NJ
                    </p>
                </div>
                <p className={`jobDescription ${darkMode ? "darkMode" : ""}`}>
                    Designed and tested advanced web crawlers for seamless
                    Bloomberg Terminal integration and automated Jira role
                    access processes, significantly enhancing workflow
                    efficiency and supporting the analysis of over 1M+ financial
                    data points daily using Python, JavaScript, and Jupyter
                    Notebook.
                </p>
                <div className="skillChipContainer">
                    <span
                        className={`skillChip ${
                            selectedJob.bloomberg ? "selected" : ""
                        } ${darkMode ? "darkMode" : ""}`}
                    >
                        JavaScript
                    </span>
                    <span
                        className={`skillChip ${
                            selectedJob.bloomberg ? "selected" : ""
                        } ${darkMode ? "darkMode" : ""}`}
                    >
                        HTML
                    </span>
                    <span
                        className={`skillChip ${
                            selectedJob.bloomberg ? "selected" : ""
                        } ${darkMode ? "darkMode" : ""}`}
                    >
                        CSS
                    </span>
                    <span
                        className={`skillChip ${
                            selectedJob.bloomberg ? "selected" : ""
                        } ${darkMode ? "darkMode" : ""}`}
                    >
                        Python
                    </span>
                    <span
                        className={`skillChip ${
                            selectedJob.bloomberg ? "selected" : ""
                        } ${darkMode ? "darkMode" : ""}`}
                    >
                        Regex
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Bloomberg;
