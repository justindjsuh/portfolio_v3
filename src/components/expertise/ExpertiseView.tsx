import IMAGES from "../../assets/images/Images";
import {
    darkModeMap,
    IJobDetailsProps,
} from "../experiences/experiencesHelper";
import "./ExpertiseView.css";

const ExpertiseView: React.FunctionComponent<IJobDetailsProps> = ({
    topLeft,
    topRight,
    bottomLeft,
    bottomRight,
    hidden = false,
    darkMode = false,
}) => {
    return (
        <div
            className="expertiseContainer fade-in"
            style={{ visibility: hidden ? "hidden" : "visible" }}
        >
            <div className={`skillCard ${darkMode ? "darkMode" : ""}`}>
                <img
                    className="skillImg"
                    src={
                        darkMode
                            ? IMAGES[darkModeMap[topLeft.imgSrc]]
                            : IMAGES[topLeft.imgSrc]
                    }
                />
                <p className="skillLabel">{topLeft.label}</p>
            </div>
            <div className={`skillCard ${darkMode ? "darkMode" : ""}`}>
                <img
                    className="skillImg"
                    src={
                        darkMode
                            ? IMAGES[darkModeMap[topRight.imgSrc]]
                            : IMAGES[topRight.imgSrc]
                    }
                />
                <p className="skillLabel">{topRight.label}</p>
            </div>
            <div className={`skillCard ${darkMode ? "darkMode" : ""}`}>
                <img
                    className="skillImg"
                    src={
                        darkMode
                            ? IMAGES[darkModeMap[bottomLeft.imgSrc]]
                            : IMAGES[bottomLeft.imgSrc]
                    }
                />
                <p className="skillLabel">{bottomLeft.label}</p>
            </div>
            <div className={`skillCard ${darkMode ? "darkMode" : ""}`}>
                <img
                    className="skillImg"
                    src={
                        darkMode
                            ? IMAGES[darkModeMap[bottomRight.imgSrc]]
                            : IMAGES[bottomRight.imgSrc]
                    }
                />
                <p className="skillLabel">{bottomRight.label}</p>
            </div>
        </div>
    );
};

export default ExpertiseView;
