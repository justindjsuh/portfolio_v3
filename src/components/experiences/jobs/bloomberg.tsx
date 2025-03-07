import React from "react";
import { IJobType } from "../ExperiencesView";
import "../ExperiencesView.css";
import { motion } from "framer-motion";

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
            className={`jobCard comcast ${
                selectedJob.bloomberg ? "hover" : ""
            } ${selectedJob.unselected ? "unselected" : ""}`}
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
                    <p className="jobLocation">Princeton, NJ</p>
                </div>
                <motion.p
                    className="jobDescription"
                    initial={{ height: "0px", opacity: 0 }}
                    animate={
                        selectedJob.bloomberg
                            ? { height: "4rem", opacity: 1 }
                            : { height: "0px", opacity: 0 }
                    }
                    transition={{
                        height: {
                            duration: 0.2,
                            ease: "easeOut",
                        },
                        opacity: selectedJob.bloomberg
                            ? { delay: 0.2, duration: 0.3, ease: "easeOut" }
                            : { delay: 0.2, duration: 0.3, ease: "easeOut" },
                    }}
                >
                    Designed and tested advanced web crawlers for seamless
                    Bloomberg Terminal integration and automated Jira role
                    access processes, significantly enhancing workflow
                    efficiency and supporting the analysis of over 1M+ financial
                    data points daily using Python, JavaScript, and Jupyter
                    Notebook.
                </motion.p>
                <div className="skillChipContainer">
                    {["JavaScript", "HTML5", "CSS3", "Python", "Regex"].map(
                        (skill) => (
                            <span
                                key={skill}
                                className={`skillChip ${
                                    selectedJob.bloomberg ? "selected" : ""
                                }`}
                            >
                                {skill}
                            </span>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default Bloomberg;
