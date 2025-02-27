import React from "react";
import { IJobType } from "../ExperiencesView";
import "../ExperiencesView.css";

interface ISIGProps {
    selectedJob: IJobType;
    handleHoverSelection: (job: keyof IJobType) => void;
}

const SIG: React.FunctionComponent<ISIGProps> = ({
    selectedJob,
    handleHoverSelection,
}) => {
    return (
        <div
            className={`jobCard sig ${selectedJob.sig ? "hover" : ""}`}
            onMouseEnter={() => handleHoverSelection("sig")}
        >
            <div className="jobLeftSide">
                <p>2018 — 2019</p>
            </div>
            <div className="jobRightSide">
                <div className="title">
                    <p className="jobPosition">
                        Full-Stack Web Developer @ SIG
                    </p>
                    <p className="jobLocation">Bala Cynwyd, PA</p>
                </div>
                <div className="jobDescription">
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
                        }`}
                    >
                        Bash
                    </p>
                    <p
                        className={`skillChip ${
                            selectedJob.sig ? "selected" : ""
                        }`}
                    >
                        Markdown
                    </p>
                    <p
                        className={`skillChip ${
                            selectedJob.sig ? "selected" : ""
                        }`}
                    >
                        Jira
                    </p>
                    <p
                        className={`skillChip ${
                            selectedJob.sig ? "selected" : ""
                        }`}
                    >
                        Confluence
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SIG;
