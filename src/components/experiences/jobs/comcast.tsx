import React from "react";
import { IJobType } from "../ExperiencesView";
import "../ExperiencesView.css";
import { motion } from "framer-motion";

interface IComcastProps {
    selectedJob: IJobType;
    handleHoverSelection: (job: keyof IJobType) => void;
}

const Comcast: React.FunctionComponent<IComcastProps> = ({
    selectedJob,
    handleHoverSelection,
}) => {
    return (
        <motion.div
            className="jobCard"
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
                    <p className="jobLocation">Philadelphia, PA</p>
                </div>
                <motion.p
                    className="jobDescription"
                    initial={{ height: "0px", opacity: 0 }}
                    animate={
                        selectedJob.comcast
                            ? { height: "5.5rem", opacity: 1 }
                            : { height: "0px", opacity: 0 }
                    }
                    transition={{
                        height: {
                            duration: 0.2,
                            ease: "easeOut",
                        },
                        opacity: selectedJob.comcast
                            ? { delay: 0.2, duration: 0.3, ease: "easeOut" }
                            : { delay: 0.2, duration: 0.3, ease: "easeOut" },
                    }}
                >
                    Led the development of 5+ high-impact features and
                    contributed to a $12M annual cost reduction by developing
                    scalable features with React and TypeScript, streamlining
                    workflows for network engineers managing 300,000+ devices,
                    while collaborating with cross-functional teams, authoring
                    comprehensive documentation, and leveraging tools like
                    Figma, Node.js, MongoDB, and Jest.
                </motion.p>
                <div className="skillChipContainer">
                    {[
                        "React",
                        "TypeScript",
                        "MongoDB",
                        "Node.js",
                        "Figma",
                        "Storybook",
                    ].map((skill) => (
                        <span
                            key={skill}
                            className={`skillChip ${
                                selectedJob.comcast ? "selected" : ""
                            }`}
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Comcast;
