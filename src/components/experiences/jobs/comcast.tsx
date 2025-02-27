import React from "react";
import { IJobType } from "../ExperiencesView";
import "../ExperiencesView.css";

interface IComcastProps {
    selectedJob: IJobType;
    handleHoverSelection: (job: keyof IJobType) => void;
}

const Comcast: React.FunctionComponent<IComcastProps> = ({
    selectedJob,
    handleHoverSelection,
}) => {
    return (
        <div
            className={`jobCard comcast ${selectedJob.comcast ? "hover" : ""}`}
            onMouseEnter={() => handleHoverSelection("comcast")}
        >
            <div className="jobLeftSide">
                <p>2023 — Present</p>
            </div>
            <div className="jobRightSide">
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
        </div>
    );
};

export default Comcast;
