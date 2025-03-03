import IMAGES from "../../../assets/images/Images";
import "./projectCard.css";

const EmmanuelProjectCard: React.FunctionComponent = () => {
    return (
        <div className="projectCard">
            <img src={IMAGES.emmanuelBg} draggable="false" />
            <p className="projectTitle">Emmanuel Church of Philadelphia</p>
            <p className="projectDesc">A modern website for a growing church</p>
            <div className="projectChipContainer">
                <span>TYPESCRIPT</span>
                <span>REACT</span>
                <span>NEXTJS</span>
                <span>VERCEL</span>
                <span>CSS3</span>
                <span>HTML5</span>
            </div>
        </div>
    );
};

export default EmmanuelProjectCard;
