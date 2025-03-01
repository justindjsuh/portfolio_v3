import React from "react";
import { IJobType } from "../ExperiencesView";
import "../ExperiencesView.css";

interface IComcastProps {
    selectedJob: IJobType;
    handleHoverSelection: (job: keyof IJobType) => void;
    darkMode?: boolean;
}

const Comcast: React.FunctionComponent<IComcastProps> = ({
    selectedJob,
    handleHoverSelection,
    darkMode = false,
}) => {
    return (
        <div
            className={`jobCard comcast ${selectedJob.comcast ? "hover" : ""} ${
                selectedJob.unselected ? "unselected" : ""
            } ${darkMode ? "darkMode" : ""}`}
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
                    <h3 className="jobPosition">
                        Full-Stack Developer @ Comcast
                    </h3>
                    <p className={`jobLocation ${darkMode ? "darkMode" : ""}`}>
                        Philadelphia, PA
                    </p>
                </div>
                <p className={`jobDescription ${darkMode ? "darkMode" : ""}`}>
                    Led the development of 5+ high-impact features and
                    contributed to a $12M annual cost reduction by developing
                    scalable features with React and TypeScript, streamlining
                    workflows for network engineers managing 300,000+ devices,
                    while collaborating with cross-functional teams, authoring
                    comprehensive documentation, and leveraging tools like
                    Figma, Node.js, MongoDB, and Jest.
                </p>
                <div className="skillChipContainer">
                    <span
                        className={`skillChip ${
                            selectedJob.comcast ? "selected" : ""
                        }`}
                    >
                        React
                    </span>
                    <span
                        className={`skillChip ${
                            selectedJob.comcast ? "selected" : ""
                        }`}
                    >
                        TypeScript
                    </span>
                    <span
                        className={`skillChip ${
                            selectedJob.comcast ? "selected" : ""
                        }`}
                    >
                        MongoDB
                    </span>
                    <span
                        className={`skillChip ${
                            selectedJob.comcast ? "selected" : ""
                        }`}
                    >
                        Node.js
                    </span>
                    <span
                        className={`skillChip ${
                            selectedJob.comcast ? "selected" : ""
                        }`}
                    >
                        Figma
                    </span>
                    <span
                        className={`skillChip ${
                            selectedJob.comcast ? "selected" : ""
                        }`}
                    >
                        Storybook
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Comcast;
