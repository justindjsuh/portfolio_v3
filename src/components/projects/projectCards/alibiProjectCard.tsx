import IMAGES from "../../../assets/images/Images";
import "./projectCard.css";

const AlibiProjectCard: React.FunctionComponent = () => {
    return (
        <div className="projectCard">
            <img src={IMAGES.alibiBg} draggable="false" />
            <p className="projectTitle">Alibi Esports</p>
            <p className="projectDesc">Central hub for competitive gamers</p>
            <div className="projectChipContainer">
                <span>JAVASCRIPT</span>
                <span>REACT</span>
                <span>AOS</span>
                <span>CSS3</span>
                <span>HTML5</span>
                <span>EXPRESSJS</span>
                <span>POSTGRESQL</span>
            </div>
        </div>
    );
};

export default AlibiProjectCard;
