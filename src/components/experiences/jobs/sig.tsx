import React from "react";
import { IJobType } from "../ExperiencesView";
import "../ExperiencesView.css";
import { motion } from "framer-motion";

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
            className={`jobCard comcast ${selectedJob.sig ? "hover" : ""} ${
                selectedJob.unselected ? "unselected" : ""
            }`}
            onMouseEnter={() => handleHoverSelection("sig")}
            onMouseLeave={() => handleHoverSelection("unselected")}
        >
            <div className="jobLeftSide">
                <p>2018 — 2019</p>
            </div>
            <div className="jobRightSide">
                <div className="title">
                    <h3 className="jobPosition">
                        Full-Stack Web Developer @ SIG
                    </h3>
                    <p className="jobLocation">Bala Cynwyd, PA</p>
                </div>
                <motion.p
                    className="jobDescription"
                    initial={{ height: "0px", opacity: 0 }}
                    animate={
                        selectedJob.sig
                            ? { height: "4rem", opacity: 1 }
                            : { height: "0px", opacity: 0 }
                    }
                    transition={{
                        height: {
                            duration: 0.2,
                            ease: "easeOut",
                        },
                        opacity: selectedJob.sig
                            ? { delay: 0.2, duration: 0.3, ease: "easeOut" }
                            : { delay: 0.2, duration: 0.3, ease: "easeOut" },
                    }}
                >
                    Provided technical consultation for troubleshooting
                    hardware, software, and network issues, assembled and
                    configured production workstations, and created clear
                    documentation to enhance the hardware build process across
                    the company.
                </motion.p>
                <div className="skillChipContainer">
                    {["Bash", "Jira", "Confluence", "Markdown"].map((skill) => (
                        <span
                            key={skill}
                            className={`skillChip ${
                                selectedJob.sig ? "selected" : ""
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

export default SIG;
