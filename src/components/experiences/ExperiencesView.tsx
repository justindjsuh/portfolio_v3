import { useState } from "react";
import ExpertiseView from "../expertise/ExpertiseView";
import "./ExperiencesView.css";
import { bloombergObj, comcastObj, fsaObj, sigObj } from "./experiencesHelper";
import Comcast from "./jobs/comcast";
import FSA from "./jobs/fsa";
import Bloomberg from "./jobs/bloomberg";
import SIG from "./jobs/sig";

// ADD A FADE UP FOR THE CONTENT

export interface IJobType {
    comcast: boolean;
    fsa: boolean;
    bloomberg: boolean;
    sig: boolean;
}

const ExperiencesView: React.FunctionComponent = () => {
    const [selectedJob, setSelectedJob] = useState<IJobType>({
        comcast: true,
        fsa: false,
        bloomberg: false,
        sig: false,
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
            <div className="experiencesContainer">
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
                {/* DISPLAY NONE FOR MOBILE? */}
                {selectedJob.comcast && (
                    <ExpertiseView
                        topLeft={comcastObj.topLeft}
                        topRight={comcastObj.topRight}
                        bottomLeft={comcastObj.bottomLeft}
                        bottomRight={comcastObj.bottomRight}
                    />
                )}
                {selectedJob.fsa && (
                    <ExpertiseView
                        topLeft={fsaObj.topLeft}
                        topRight={fsaObj.topRight}
                        bottomLeft={fsaObj.bottomLeft}
                        bottomRight={fsaObj.bottomRight}
                    />
                )}
                {selectedJob.bloomberg && (
                    <ExpertiseView
                        topLeft={bloombergObj.topLeft}
                        topRight={bloombergObj.topRight}
                        bottomLeft={bloombergObj.bottomLeft}
                        bottomRight={bloombergObj.bottomRight}
                    />
                )}
                {selectedJob.sig && (
                    <ExpertiseView
                        topLeft={sigObj.topLeft}
                        topRight={sigObj.topRight}
                        bottomLeft={sigObj.bottomLeft}
                        bottomRight={sigObj.bottomRight}
                    />
                )}
            </div>
        </div>
    );
};

export default ExperiencesView;
