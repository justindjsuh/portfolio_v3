import { useRef, useState } from "react";
import "./ExperiencesView.css";
import Comcast from "./jobs/comcast";
import FSA from "./jobs/fsa";
import Bloomberg from "./jobs/bloomberg";
import SIG from "./jobs/sig";
import { motion, useScroll, useTransform } from "framer-motion";

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
    const experienceContainerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();

    const width = useTransform(scrollY, [1050, 1450], [65, 100]);
    const widthStyle = useTransform(width, (v) => `${v}%`);

    const borderRadiusCalc = useTransform(scrollY, [1000, 1400], [15, 0]);

    const borderRadius = useTransform(
        borderRadiusCalc,
        (value) => `${value}px`
    );

    const handleHoverSelection = (selectedJob: keyof IJobType) => {
        setSelectedJob((prev) =>
            Object.keys(prev).reduce((acc, curr) => {
                acc[curr as keyof IJobType] = curr === selectedJob;
                return acc;
            }, {} as typeof prev)
        );
    };

    return (
        <div className="experiencesBg">
            <motion.div
                ref={experienceContainerRef}
                className="experiencesContainer"
                style={{
                    width: widthStyle,
                    position: "relative",
                    bottom: "2rem",
                    borderRadius: borderRadius,
                }}
            >
                <div className="experiencesContent">
                    <div className="experienceHeaderContainer">
                        <p className="experienceHeader">Experience</p>
                        <p>See where I&apos;ve made my impact.</p>
                    </div>
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
