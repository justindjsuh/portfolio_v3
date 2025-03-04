import { useNavigate } from "react-router-dom";
import "./caseStudy.css";
import { useEffect, useState } from "react";
import IMAGES from "../../assets/images/Images";
import { motion } from "framer-motion";
import useLenisSmoothScroll from "../../components/smoothScroll/SmoothScroll";

const EmmanuelCaseStudy: React.FunctionComponent = () => {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();
    useLenisSmoothScroll(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="caseStudyBg">
            <div className="caseStudyContainer">
                <motion.div
                    className="backNavigation"
                    initial={{ opacity: 0, y: 50 }} // Start invisible and 50px lower
                    whileInView={{ opacity: 1, y: 0 }} // Fade in and move up
                    viewport={{ once: true }}
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
                            href="https://justin-suh-portfolio.onrender.com/"
                            target="_blank"
                        >
                            <button>Live Site</button>
                        </a>
                        <a
                            href="https://github.com/justindjsuh/portfolio-site"
                            target="_blank"
                        >
                            <img src={IMAGES.githubCaseIcon} />
                        </a>
                    </div>
                </motion.div>
                <motion.div
                    className="caseStudyHeader"
                    initial={{ opacity: 0, y: 50 }} // Start invisible and 50px lower
                    whileInView={{ opacity: 1, y: 0 }} // Fade in and move up
                    viewport={{ once: true }}
                    transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
                >
                    <p className="caseStudyText">CASE STUDY</p>
                    <p className="caseStudyHeaderText">Portfolio V1</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }} // Start invisible and 50px lower
                    whileInView={{ opacity: 1, y: 0 }} // Fade in and move up
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                    style={{
                        fontSize: "1rem",
                        margin: "0 auto",
                        fontWeight: "400",
                        letterSpacing: ".5rem",
                    }}
                    className="caseImage"
                >
                    <img src={IMAGES.casePortfolioV1Bg} />
                </motion.div>
                <div className="caseStudyContent">
                    <div className="caseLeftSide">
                        <motion.div
                            className="caseSection"
                            initial={{ opacity: 0, y: 50 }} // Start invisible and 50px lower
                            whileInView={{ opacity: 1, y: 0 }} // Fade in and move up
                            viewport={{ once: true }}
                            transition={{
                                delay: 0.5,
                                duration: 0.5,
                                ease: "easeOut",
                            }}
                        >
                            <p>PURPOSE</p>
                            <p>
                                This website is my personal portfolio where I
                                can not only demonstrate my skillset, but also
                                talk about my experiences and past projects that
                                have brought me to where I am now.
                            </p>
                            <p>
                                I think there's a beauty in not just making a
                                portfolio, but projects in general. Each project
                                I make is a step towards my goal of learning
                                more about the constantly expanding field of web
                                development and software engineering.
                            </p>
                        </motion.div>
                        <motion.div
                            className="caseSection"
                            initial={{ opacity: 0, y: 50 }} // Start invisible and 50px lower
                            whileInView={{ opacity: 1, y: 0 }} // Fade in and move up
                            viewport={{ once: true }}
                            transition={{
                                delay: 0.5,
                                duration: 0.5,
                                ease: "easeOut",
                            }}
                        >
                            <p>LESSONS</p>
                            <p>
                                Creating a personal website was one of the goals
                                I always wanted to accomplish, but never thought
                                I'd achieve. Even when I wasn't in web
                                development, I wanted to create a personal
                                portfolio filled with creative ideas. I will say
                                that my creativity was heavily limited by my
                                knowledge of libraries and stuck mainly with the
                                classic JavaScript, CSS and HTML. But this was
                                only more motivation for me to get even better
                                at these tools and add more to my skillset so I
                                can make something that I can satisfy my
                                creative side.
                            </p>
                            <p>
                                Probably noticed, but I hardly used anything
                                other than the bare bones for web development.
                                This brought some challenges that required me to
                                dive deeper into these tools than I had ever
                                done before. I don't regret sticking to the
                                fundamentals. I think that this provided me a
                                great opportunity to get my foundation even more
                                concrete than it was before. I would love to
                                (and plan to) learn libraries like GSAP,
                                three.js, and anime.js to really make my
                                portfolio pop the next time I do a revamp for
                                it!
                            </p>
                        </motion.div>
                        <motion.div
                            className="caseSection"
                            initial={{ opacity: 0, y: 50 }} // Start invisible and 50px lower
                            whileInView={{ opacity: 1, y: 0 }} // Fade in and move up
                            viewport={{ once: true }}
                            transition={{
                                delay: 0.5,
                                duration: 0.5,
                                ease: "easeOut",
                            }}
                        >
                            <p>REFLECTIONS</p>
                            <p>
                                As I'm creating this new portfolio, it really is
                                amazing to see how far I've come in the matter
                                of 2 years. My last commit on this portfolio_v1
                                repo was February 16, 2023. I've been able to
                                see such immense growth from my first portfolio
                                to my third one. Utilizing different libraries
                                as well as coding practices that not only make
                                the code easier to understand, but really expand
                                the boundaries of what I thought was previously
                                possible. Adding on to my from comments back
                                then, a portfolio really is a reflective way to
                                see how far you've come and just how much you've
                                learned.
                            </p>
                        </motion.div>
                    </div>
                    <div className="caseRightSide">
                        <motion.div
                            className="caseMetadata"
                            initial={{ opacity: 0, y: 50 }} // Start invisible and 50px lower
                            whileInView={{ opacity: 1, y: 0 }} // Fade in and move up
                            viewport={{ once: true }}
                            transition={{
                                delay: 0.5,
                                duration: 0.5,
                                ease: "easeOut",
                            }}
                        >
                            <p className="metadataHeader">CLIENT</p>
                            <p>Personal</p>
                        </motion.div>
                        <motion.div
                            className="caseMetadata"
                            initial={{ opacity: 0, y: 50 }} // Start invisible and 50px lower
                            whileInView={{ opacity: 1, y: 0 }} // Fade in and move up
                            viewport={{ once: true }}
                            transition={{
                                delay: 0.5,
                                duration: 0.5,
                                ease: "easeOut",
                            }}
                        >
                            <p className="metadataHeader">ROLE</p>
                            <p>Full-Stack Web Developer</p>
                        </motion.div>
                        <motion.div
                            className="caseMetadata"
                            initial={{ opacity: 0, y: 50 }} // Start invisible and 50px lower
                            whileInView={{ opacity: 1, y: 0 }} // Fade in and move up
                            viewport={{ once: true }}
                            transition={{
                                delay: 0.5,
                                duration: 0.5,
                                ease: "easeOut",
                            }}
                        >
                            <p className="metadataHeader">DATE COMPLETED</p>
                            <p>February 16, 2023</p>
                        </motion.div>
                        <motion.div
                            className="caseMetadata"
                            initial={{ opacity: 0, y: 50 }} // Start invisible and 50px lower
                            whileInView={{ opacity: 1, y: 0 }} // Fade in and move up
                            viewport={{ once: true }}
                            transition={{
                                delay: 0.5,
                                duration: 0.5,
                                ease: "easeOut",
                            }}
                        >
                            <p className="metadataHeader">TECH-STACK</p>
                            <div className="metadataChipContainer">
                                <span>JAVASCRIPT</span>
                                <span>REACT</span>
                                <span>AOS</span>
                                <span>CSS3</span>
                                <span>HTML5</span>
                                <span>FIGMA</span>
                            </div>
                        </motion.div>
                        <motion.div
                            className="caseMetadata"
                            initial={{ opacity: 0, y: 50 }} // Start invisible and 50px lower
                            whileInView={{ opacity: 1, y: 0 }} // Fade in and move up
                            viewport={{ once: true }}
                            transition={{
                                delay: 0.5,
                                duration: 0.5,
                                ease: "easeOut",
                            }}
                        >
                            <hr className="caseDivider" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmmanuelCaseStudy;
