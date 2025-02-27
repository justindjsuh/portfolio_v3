import React from "react";
import { IJobType } from "../ExperiencesView";
import "../ExperiencesView.css";

interface IBloombergProps {
    selectedJob: IJobType;
    handleHoverSelection: (job: keyof IJobType) => void;
}

const Bloomberg: React.FunctionComponent<IBloombergProps> = ({
    selectedJob,
    handleHoverSelection,
}) => {
    return (
        <div
            className={`jobCard bloomberg ${
                selectedJob.bloomberg ? "hover" : ""
            }`}
            onMouseEnter={() => handleHoverSelection("bloomberg")}
        >
            <div className="jobLeftSide">
                <p>2019 — 2020</p>
            </div>
            <div className="jobRightSide">
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
        </div>
    );
};

export default Bloomberg;
