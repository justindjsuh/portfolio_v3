import IMAGES from "../../../assets/images/Images";
import "./projectCard.css";

const PortfolioV2Card: React.FunctionComponent = () => {
    return (
        <div className="projectCard">
            <img src={IMAGES.portfolioV2Bg} draggable="false" />
            <p className="projectTitle">Portfolio V2</p>
            <p className="projectDesc">Personal portfolio</p>
            <div className="projectChipContainer">
                <span>JAVASCRIPT</span>
                <span>REACT</span>
                <span>VITE</span>
                <span>GSAP</span>
                <span>CSS3</span>
                <span>HTML5</span>
            </div>
        </div>
    );
};

export default PortfolioV2Card;
