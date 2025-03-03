import IMAGES from "../../../assets/images/Images";
import "./projectCard.css";

const PortfolioV1Card: React.FunctionComponent = () => {
    return (
        <div className="projectCard">
            <img src={IMAGES.portfolioV1Bg} draggable="false" />
            <p className="projectTitle">Portfolio V1</p>
            <p className="projectDesc">Personal portfolio</p>
            <div className="projectChipContainer">
                <span>JAVASCRIPT</span>
                <span>REACT</span>
                <span>AOS</span>
                <span>CSS3</span>
                <span>HTML5</span>
            </div>
        </div>
    );
};

export default PortfolioV1Card;
