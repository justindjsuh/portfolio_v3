import { useRef, useState } from "react";
import "./ExperiencesView.css";
import Comcast from "./jobs/comcast";
import FSA from "./jobs/fsa";
import Bloomberg from "./jobs/bloomberg";
import SIG from "./jobs/sig";
import { motion, useScroll, useTransform } from "framer-motion";

export interface IJobType {
    comcast: boolean;
    fsa: boolean;
    bloomberg: boolean;
    sig: boolean;
    unselected: boolean;
}

const getScrollTransformValues = () => {
    const width = window.innerWidth;

    if (width <= 480) {
        // Mobile
        return { start: 1000, end: 1200, min: 80, max: 100 };
    } else if (width <= 1300) {
        // Tablet
        return { start: 1200, end: 1600, min: 70, max: 100 };
    } else {
        // Desktop
        return { start: 1100, end: 1500, min: 60, max: 100 };
    }
};

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
    const { start, end, min, max } = getScrollTransformValues();

    const width = useTransform(scrollY, [start, end], [min, max]);
    const widthStyle = useTransform(width, (v) => `${v}%`);

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
                    borderRadius: "10px",
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
