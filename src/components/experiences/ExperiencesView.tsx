import { useState } from "react";
import "./ExperiencesView.css";
import Comcast from "./jobs/comcast";
import FSA from "./jobs/fsa";
import Bloomberg from "./jobs/bloomberg";
import SIG from "./jobs/sig";
import { motion } from "framer-motion";

// ADD A FADE UP FOR THE CONTENT

export interface IJobType {
    comcast: boolean;
    fsa: boolean;
    bloomberg: boolean;
    sig: boolean;
    unselected: boolean;
}

const ExperiencesView: React.FunctionComponent = () => {
    const [selectedJob, setSelectedJob] = useState<IJobType>({
        comcast: false,
        fsa: false,
        bloomberg: false,
        sig: false,
        unselected: true,
    });

    const handleHoverSelection = (selectedJob: keyof IJobType) => {
        setSelectedJob((prev) =>
            Object.keys(prev).reduce((acc, curr) => {
                acc[curr as keyof IJobType] = curr === selectedJob;
                return acc;
            }, {} as typeof prev)
        );
    };

    console.log(selectedJob);

    return (
        <div className="experiencesBg">
            <motion.div
                className="experiencesContainer"
                // initial={{ backgroundColor: , y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
            >
                <div className="experiencesContent">
                    <p className="experienceHeader">EXPERIENCE</p>
                    <Comcast
                        selectedJob={selectedJob}
                        handleHoverSelection={handleHoverSelection}
                    />
                    <FSA
                        selectedJob={selectedJob}
                        handleHoverSelection={handleHoverSelection}
                    />
                    <Bloomberg
                        selectedJob={selectedJob}
                        handleHoverSelection={handleHoverSelection}
                    />
                    <SIG
                        selectedJob={selectedJob}
                        handleHoverSelection={handleHoverSelection}
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default ExperiencesView;
