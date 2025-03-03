import IMAGES from "../../../assets/images/Images";
import "./projectCard.css";

const MpcProjectCard: React.FunctionComponent = () => {
    return (
        <div className="projectCard firstCard">
            <img src={IMAGES.mpcBg} draggable="false" />
            <p className="projectTitle">Montgomery Presbyterian Church</p>
            <p className="projectDesc">COMING SOON</p>
            <div className="projectChipContainer">
                <span>TYPESCRIPT</span>
                <span>REACT</span>
                <span>NEXTJS</span>
                <span>EXPRESSJS</span>
                <span>SUPABASE</span>
                <span>MATERIALUI</span>
                <span>CSS3</span>
                <span>HTML5</span>
            </div>
        </div>
    );
};

export default MpcProjectCard;
