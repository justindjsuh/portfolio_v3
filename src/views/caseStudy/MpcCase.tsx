import { useNavigate } from "react-router-dom";
import "./caseStudy.css";
import { useState } from "react";
import IMAGES from "../../assets/images/Images";
import { motion } from "framer-motion";
import StickyCursor from "../../components/stickyCursor/stickyCursor";
import useLenisSmoothScroll from "../../components/smoothScroll/SmoothScroll";

const MpcCaseStudy: React.FunctionComponent = () => {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();
    useLenisSmoothScroll(false);

    return (
        <div className="caseStudyBg">
            <StickyCursor />
            <div className="caseStudyContainer">
                <motion.div
                    className="backNavigation"
                    initial={{ opacity: 0, y: 50 }} // Start invisible and 50px lower
                    whileInView={{ opacity: 1, y: 0 }} // Fade in and move up
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <div
                        className="backNavLeft"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        onClick={() =>
                            navigate("/", {
                                state: { from: location.pathname },
                            })
                        }
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="60"
                            height="15"
                            viewBox="30 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={`feather feather-arrow-left ${
                                isHovered ? "hover" : ""
                            }`}
                        >
                            <line x1="60" y1="12" x2="5" y2="12"></line>
                            <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                        <p>Back to my portfolio</p>
                    </div>
                    <div className="backNavRight">
                        <a
                        // href="https://emmanuel-ec.vercel.app/"
                        // target="_blank"
                        >
                            <button>Live Site</button>
                        </a>
                        <a
                        // href="https://github.com/justindjsuh/emmanuel-ec"
                        // target="_blank"
                        >
                            <button>GitHub</button>
                        </a>
                    </div>
                </motion.div>
                <motion.div
                    className="caseStudyHeader"
                    initial={{ opacity: 0, y: 50 }} // Start invisible and 50px lower
                    whileInView={{ opacity: 1, y: 0 }} // Fade in and move up
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
                >
                    <p className="caseStudyText">CASE STUDY</p>
                    <p className="caseStudyHeaderText">
                        Montgomery Presbyterian Church
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }} // Start invisible and 50px lower
                    whileInView={{ opacity: 1, y: 0 }} // Fade in and move up
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                    style={{
                        fontSize: "1rem",
                        margin: "0 auto",
                        fontWeight: "400",
                        fontFamily: "Jost",
                        letterSpacing: ".5rem",
                    }}
                >
                    COMING SOON
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }} // Start invisible and 50px lower
                    animate={{ opacity: 1, y: 0 }} // Fade in and move up
                    transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                    style={{
                        margin: "0 auto",
                    }}
                    className="caseImage blur"
                >
                    <img src={IMAGES.caseMpcBg} />
                </motion.div>
            </div>
        </div>
    );
};

export default MpcCaseStudy;
