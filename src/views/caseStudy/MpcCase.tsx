import { useNavigate } from "react-router-dom";
import "./caseStudy.css";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import StickyCursor from "../../components/stickyCursor/stickyCursor";
import useLenisSmoothScroll from "../../components/smoothScroll/SmoothScroll";

const MpcCaseStudy: React.FunctionComponent = () => {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();
    useLenisSmoothScroll(false);

    const [visible, setVisible] = useState(false);
    const firstDivRef = useRef(null);
    const isInView = useInView(firstDivRef, { amount: 1 });

    useEffect(() => {
        if (isInView && !visible) setVisible(true);
    }, [isInView, visible]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
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
                        href="https://mpc-em.vercel.app/"
                        target="_blank"
                        >
                            <button>Live Site</button>
                        </a>
                        <a
                        href="https://github.com/justindjsuh/mpc-em"
                        target="_blank"
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
                    animate={{ opacity: 1, y: 0 }} // Fade in and move up
                    transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                    style={{
                        margin: "0 auto",
                    }}
                    className="caseImage"
                >
                    <img src='/caseImages/case_mpc.png' />
                </motion.div>
                <div className="caseStudyContent">
                    <div className="caseLeftSide">
                        <div className="caseSection">
                            <motion.p
                                initial={{ opacity: 0, y: 50 }} // Start invisible and 50px lower
                                animate={visible ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeOut",
                                }}
                                ref={firstDivRef}
                            >
                                PURPOSE
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 50 }} // Start invisible and 50px lower
                                animate={visible ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    delay: 0.1,
                                    duration: 0.5,
                                    ease: "easeOut",
                                }}
                            >
                                This website serves in the frontlines of user interaction for Montgomery Presbyterian Church English Ministry.
                            </motion.p>
                        </div>
                        <div className="caseSection">
                            <motion.p
                                initial={{ opacity: 0, y: 50 }} // Start invisible and 50px lower
                                animate={visible ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    delay: 0.6,
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
                                    delay: 0.7,
                                    duration: 0.5,
                                    ease: "easeOut",
                                }}
                            >
                                This is a big project that I've been working on for a bit of time. This is now my second client-related project and it was a lot of fun to work on and really see how much I've grown as a developer to create an application that is going to be used by real users.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 50 }} // Start invisible and 50px lower
                                animate={visible ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    delay: 0.8,
                                    duration: 0.5,
                                    ease: "easeOut",
                                }}
                            >
                               It's been some time since I worked on a real full stack application, and this was a great reminder of how complex integrating the backend can be. From data typing, data mapping, error handling, and all the edge cases, adding a backend really increases the complexity of an application. This particular website wasn't extremely complex in nature, so it was easier to get myself back into working with a client as well as a great opportunity for me to test my development skills.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 50 }} // Start invisible and 50px lower
                                animate={visible ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    delay: 0.8,
                                    duration: 0.5,
                                    ease: "easeOut",
                                }}
                            >
                               For one, I really do think planning is so important when looking at full stack applications like this. You need to think about what components you need, how the components will play out, and how to make it a cohesive website, on the user's side as well as from the development side. I remember writing some of the code for the events api handling, and I was working with nested modals on the admin view page which really cluttered up my code. I think if I had put more comments in and took the time to keep things organized, it would've been a smoother development process for me. I found myself being confused at points because I couldn't remember why I wrote this part of code, but thankfully I was able to keep the process moving and get a working result.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 50 }} // Start invisible and 50px lower
                                animate={visible ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    delay: 0.8,
                                    duration: 0.5,
                                    ease: "easeOut",
                                }}
                            >
                               This project also got me thinking about my designs. So often I design things in Figma (literally every screen), yet I find myself veering from the designs because I think of something even better while developing it. I think this makes it extremely difficult to plan ahead for what components I want to use, because I'll develop a component, or not develop a component, and realize that the different design approach I'm taking makes it more complicated to utilize an existing component, or makes me realize I should've made a component for it. Overall, with smaller projects I do think it's not too much of an obstacle, but for future client-related projects, I should definitely take the time to plan it out before building it out. Think and rest on the designs, and then move forward, rather than rushing into development.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 50 }} // Start invisible and 50px lower
                                animate={visible ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    delay: 0.8,
                                    duration: 0.5,
                                    ease: "easeOut",
                                }}
                            >
                               Lastly, this project definitely came with its difficulties. The client this time didn't really have much to say for designs, and the entire process was really left up to me as the sole developer. It made it much more difficult and took more time than it probably should've. One thing I feel like I want to do in the future, is ask the client - How involved do you want to be in this development process? It saves both parties a lot of time if we're both aware of what the expectation is for the client and developer.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 50 }} // Start invisible and 50px lower
                                animate={visible ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    delay: 0.8,
                                    duration: 0.5,
                                    ease: "easeOut",
                                }}
                            >
                              I was particularly proud of the nav bar that I created, which was inspired by Apple. Other UI design work was not bad and had some good implementations, but could be improved in the future. Overall, I really enjoyed working on this project, and although I was a bit rushed to get this done, I was very satisfied with the product, and the client was happy with it too!
                            </motion.p>
                        </div>
                        <div className="caseSection">
                            <motion.p
                                initial={{ opacity: 0, y: 50 }} // Start invisible and 50px lower
                                animate={visible ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    delay: 0.6,
                                    duration: 0.5,
                                    ease: "easeOut",
                                }}
                            >
                                REFLECTIONS
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 50 }} // Start invisible and 50px lower
                                animate={visible ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    delay: 0.8,
                                    duration: 0.5,
                                    ease: "easeOut",
                                }}
                            >
                              I was particularly proud of the nav bar that I created, which was inspired by Apple. Other UI design work was not bad and had some good implementations, but could be improved in the future. Overall, I really enjoyed working on this project, and although I was a bit rushed to get this done, I was very satisfied with the product, and the client was happy with it too!
                            </motion.p>
                        </div>
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
                            <p>Montgomery Presbyterian Church</p>
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
                            className="caseMetadata"
                            initial={{ opacity: 0, y: 50 }} // Start invisible and 50px lower
                            animate={visible ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                delay: 0.2,
                                duration: 0.5,
                                ease: "easeOut",
                            }}
                        >
                            <p className="metadataHeader">DATE COMPLETED</p>
                            <p>April 3, 2025</p>
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
                                <span>FRAMER MOTION</span>
                                <span>NEXTJS</span>
                                <span>SUPABASE</span>
                                <span>ANT DESIGN</span>
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

export default MpcCaseStudy;
