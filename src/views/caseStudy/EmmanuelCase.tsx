import { useNavigate } from "react-router-dom";
import "./caseStudy.css";
import { useEffect, useRef, useState } from "react";
import IMAGES from "../../assets/images/Images";
import { motion, useInView } from "framer-motion";
import useLenisSmoothScroll from "../../components/smoothScroll/SmoothScroll";
import StickyCursor from "../../components/stickyCursor/stickyCursor";

const EmmanuelCaseStudy: React.FunctionComponent = () => {
    const [loaded, setLoaded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();
    useLenisSmoothScroll(false);

    const [visible, setVisible] = useState(false);
    const firstDivRef = useRef(null);
    const isInView = useInView(firstDivRef, { amount: 1 });

    useEffect(() => {
        if (isInView) setVisible(true);
    }, [isInView]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const img = new Image();
        img.src = IMAGES.caseEmmanuelBg;
        img.onload = () => {
            console.log("Image preloaded");
            setLoaded(true);
        };
    }, []);

    return (
        <div className="caseStudyBg">
            <StickyCursor />
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
                            href="https://emmanuel-ec.vercel.app/"
                            target="_blank"
                        >
                            <button>Live Site</button>
                        </a>
                        <a
                            href="https://github.com/justindjsuh/emmanuel-ec"
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
                    <p className="caseStudyHeaderText">
                        Emmanuel Church of Philadelphia
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }} // Start invisible and 50px lower
                    animate={{ opacity: 1, y: 0 }} // Fade in and move up
                    transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                    style={{
                        fontSize: "1rem",
                        margin: "0 auto",
                        fontWeight: "400",
                        letterSpacing: ".5rem",
                    }}
                    className="caseImage"
                >
                    {!loaded ? (
                        <div style={{ width: "34rem", height: "60rem" }} />
                    ) : (
                        <img
                            rel="preload"
                            src={IMAGES.caseEmmanuelBg}
                            style={{ display: loaded ? "block" : "none" }}
                        />
                    )}
                </motion.div>
                <div className="caseStudyContent">
                    <div className="caseLeftSide">
                        <motion.div
                            className="caseSection"
                            initial={{ opacity: 0, y: 50 }} // Start invisible and 50px lower
                            animate={visible ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.5,
                                ease: "easeOut",
                            }}
                            ref={firstDivRef}
                        >
                            <p>PURPOSE</p>
                            <p>
                                This website was created for the Emmanuel Church
                                of Philadelphia, to be on the frontlines of
                                interaction with the members and potential
                                members. To be a central hub of information and
                                communication while focusing on user-centered
                                design.
                            </p>
                        </motion.div>
                        <div className="caseSection">
                            <motion.p
                                initial={{ opacity: 0, y: 50 }} // Start invisible and 50px lower
                                animate={visible ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    delay: 0.1,
                                    duration: 0.5,
                                    ease: "easeOut",
                                }}
                            >
                                LESSONS
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 50 }} // Start invisible and 50px lower
                                animate={visible ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    delay: 0.2,
                                    duration: 0.5,
                                    ease: "easeOut",
                                }}
                            >
                                It's been some time since I've picked up a
                                personal project, but I had the great
                                opportunity to build the website for the church
                                I was attending which is Emmanuel Church of
                                Philadelphia. This wasn't necessarily my first
                                time working with a client and doing this type
                                of freelancing work, but it was an awesome
                                opportunity to be able to test my skills and
                                build a website that would be used live and be
                                on the frontlines of interaction made with the
                                church.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 50 }} // Start invisible and 50px lower
                                animate={visible ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    delay: 0.3,
                                    duration: 0.5,
                                    ease: "easeOut",
                                }}
                            >
                                The website was overall quite standard, but it
                                was my first time trying to make a site as
                                simple, clean, and appealing all at the same
                                time. In the past, I've always tried to make the
                                websites I created using all the fancy packages
                                and animations I could - to make it as unique as
                                possible, but this time around, I was to stick
                                to a design that engaged the user with a design
                                that makes the user feel as if the design didn't
                                exist in a sense. It was to be seamless and
                                pleasing to the eyes.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 50 }} // Start invisible and 50px lower
                                animate={visible ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    delay: 0.4,
                                    duration: 0.5,
                                    ease: "easeOut",
                                }}
                            >
                                I worked in Figma and communicated with the
                                client in iterations which was an awesome
                                experience - it felt much like I was getting
                                into freelance work. I do think this project
                                overall was not just a way to test my technical
                                skillset, but also my communication with clients
                                as well as giving me a stronger understanding of
                                where I would like to take my skillset in the
                                future. Freelancing for churches and being able
                                to help the communities with a skillset I
                                originally thought was difficult to incorporate
                                in a volunteering sense, made me more passionate
                                to pursue higher heights.
                            </motion.p>
                        </div>
                        <motion.div
                            className="caseSection"
                            initial={{ opacity: 0, y: 50 }} // Start invisible and 50px lower
                            animate={visible ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                delay: 0.5,
                                duration: 0.5,
                                ease: "easeOut",
                            }}
                        >
                            <p>REFLECTIONS</p>
                            <p>
                                While I really did enjoy this opportunity to
                                contribute to the community and have an actual
                                "client" project, I do think I fell short a bit
                                on the completion of this project. It's only
                                been half a year, and I can already see so many
                                improvements I could have made. It was
                                definitely a great entry project into the space
                                of building websites for local churches which is
                                the project I'm taking on next!
                            </p>
                        </motion.div>
                    </div>
                    <div className="caseRightSide">
                        <motion.div
                            className="caseMetadata"
                            initial={{ opacity: 0, y: 50 }} // Start invisible and 50px lower
                            animate={visible ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.5,
                                ease: "easeOut",
                            }}
                        >
                            <p className="metadataHeader">CLIENT</p>
                            <p>Emmanuel Church of Philadelphia</p>
                        </motion.div>
                        <motion.div
                            className="caseMetadata"
                            initial={{ opacity: 0, y: 50 }} // Start invisible and 50px lower
                            animate={visible ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                delay: 0.1,
                                duration: 0.5,
                                ease: "easeOut",
                            }}
                        >
                            <p className="metadataHeader">ROLE</p>
                            <p>Full-Stack Web Developer</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }} // Start invisible and 50px lower
                            animate={visible ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                delay: 0.2,
                                duration: 0.5,
                                ease: "easeOut",
                            }}
                        >
                            <p className="metadataHeader">DATE COMPLETED</p>
                            <p>October 31, 2024</p>
                        </motion.div>
                        <motion.div
                            className="caseMetadata"
                            initial={{ opacity: 0, y: 50 }} // Start invisible and 50px lower
                            animate={visible ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                delay: 0.3,
                                duration: 0.5,
                                ease: "easeOut",
                            }}
                        >
                            <p className="metadataHeader">TECH-STACK</p>
                            <div className="metadataChipContainer">
                                <span>TYPESCRIPT</span>
                                <span>REACT</span>
                                <span>NEXTJS</span>
                                <span>VERCEL</span>
                                <span>CSS3</span>
                                <span>HTML5</span>
                                <span>FIGMA</span>
                            </div>
                        </motion.div>
                        <motion.div
                            className="caseMetadata"
                            initial={{ opacity: 0, y: 50 }} // Start invisible and 50px lower
                            animate={visible ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                delay: 0.4,
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
