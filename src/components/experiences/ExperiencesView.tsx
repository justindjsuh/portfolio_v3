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

const getScrollTransformValues = () => {
    const width = window.innerWidth;

    if (width <= 480) {
        // Mobile
        return { start: 1000, end: 1350, min: 70, max: 100 };
    } else if (width <= 1300) {
        // Tablet
        return { start: 1050, end: 1450, min: 70, max: 100 };
    } else {
        // Desktop
        return { start: 1100, end: 1500, min: 70, max: 100 };
    }
};

const ExperiencesView: React.FunctionComponent = () => {
    const [darkMode, setDarkMode] = useState(true);
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
                className={`experiencesContainer ${darkMode ? "darkMode" : ""}`}
                style={{
                    width: widthStyle,
                    position: "relative",
                    bottom: "2rem",
                    borderRadius: borderRadius,
                }}
            >
                <div
                    className={`experiencesContent ${
                        darkMode ? "darkMode" : ""
                    }`}
                >
                    <div
                        className={`experienceHeaderContainer ${
                            darkMode ? "darkMode" : ""
                        }`}
                    >
                        <p className="experienceHeader">Experience</p>
                        <p>See where I&apos;ve made my impact.</p>
                        <div className="darkModeToggle">
                            <button
                                className={`darkBtn ${
                                    darkMode ? "darkMode" : ""
                                }`}
                                onClick={() => setDarkMode(true)}
                            >
                                Dark Mode
                            </button>
                            <button
                                className={`lightBtn ${
                                    darkMode ? "darkMode" : ""
                                }`}
                                onClick={() => setDarkMode(false)}
                            >
                                Light Mode
                            </button>
                        </div>
                    </div>
                    <Comcast
                        selectedJob={selectedJob}
                        handleHoverSelection={handleHoverSelection}
                        darkMode={darkMode}
                    />
                    <FSA
                        selectedJob={selectedJob}
                        handleHoverSelection={handleHoverSelection}
                        darkMode={darkMode}
                    />
                    <Bloomberg
                        selectedJob={selectedJob}
                        handleHoverSelection={handleHoverSelection}
                        darkMode={darkMode}
                    />
                    <SIG
                        selectedJob={selectedJob}
                        handleHoverSelection={handleHoverSelection}
                        darkMode={darkMode}
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default ExperiencesView;
