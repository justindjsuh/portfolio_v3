import { useNavigate } from "react-router-dom";
import "./caseStudy.css";

const EmmanuelCaseStudy: React.FunctionComponent = () => {
    const navigate = useNavigate();

    return (
        <div className="caseStudyContainer">
            <div
                className="backNavigation"
                onClick={() =>
                    navigate("/", { state: { from: location.pathname } })
                }
            >
                <p>Back to my portfolio</p>
            </div>
            <div className="projectCard">EMMANUEL CASE STUDY</div>
        </div>
    );
};

export default EmmanuelCaseStudy;
