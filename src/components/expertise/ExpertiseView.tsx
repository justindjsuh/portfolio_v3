import IMAGES from "../../assets/images/Images";
import { IJobDetailsProps } from "../experiences/experiencesHelper";
import "./ExpertiseView.css";

// ADD A FADE UP FOR THE CONTENT

const ExpertiseView: React.FunctionComponent<IJobDetailsProps> = ({
    topLeft,
    topRight,
    bottomLeft,
    bottomRight,
    hidden = false,
}) => {
    return (
        <div
            className="expertiseContainer fade-in"
            style={{ visibility: hidden ? "hidden" : "visible" }}
        >
            <div className="skillCard">
                <img className="skillImg" src={IMAGES[topLeft.imgSrc]} />
                <p className="skillLabel">{topLeft.label}</p>
            </div>
            <div className="skillCard">
                <img className="skillImg" src={IMAGES[topRight.imgSrc]} />
                <p className="skillLabel">{topRight.label}</p>
            </div>
            <div className="skillCard">
                <img className="skillImg" src={IMAGES[bottomLeft.imgSrc]} />
                <p className="skillLabel">{bottomLeft.label}</p>
            </div>
            <div className="skillCard">
                <img className="skillImg" src={IMAGES[bottomRight.imgSrc]} />
                <p className="skillLabel">{bottomRight.label}</p>
            </div>
        </div>
    );
};

export default ExpertiseView;
