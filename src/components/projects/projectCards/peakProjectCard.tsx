import IMAGES from "../../../assets/images/Images";
import "./projectCard.css";

const PeakProjectCard: React.FunctionComponent = () => {
    return (
        <div className="projectCard lastCard">
            <img src={IMAGES.peakBg} draggable="false" />
            <p className="projectTitle">Peak Fitness</p>
            <p className="projectDesc">
                All your fitness needs in one dashboard
            </p>
            <div className="projectChipContainer">
                <span>JAVASCRIPT</span>
                <span>REACT</span>
                <span>MATERIALUI</span>
                <span>EXPRESSJS</span>
                <span>POSTGRESQL</span>
                <span>SUPABASE</span>
                <span>CSS3</span>
                <span>HTML5</span>
            </div>
        </div>
    );
};

export default PeakProjectCard;
