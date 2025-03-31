import { useNavigate } from "react-router-dom";
import "./caseStudy.css";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import useLenisSmoothScroll from "../../components/smoothScroll/SmoothScroll";
import StickyCursor from "../../components/stickyCursor/stickyCursor";

const EmmanuelCaseStudy: React.FunctionComponent = () => {
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
                            href="https://personal-portfolio-swart-rho.vercel.app/"
                            target="_blank"
                        >
                            <button>Live Site</button>
                        </a>
                        <a
                            href="https://github.com/justindjsuh/personal-portfolio"
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
                    viewport={{ once: true }}
                    transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
                >
                    <p className="caseStudyText">CASE STUDY</p>
                    <p className="caseStudyHeaderText">Portfolio V2</p>
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
                    <img src='/caseImages/case_portfoliov2.PNG' />
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
                                This website is my personal portfolio where I
                                can not only demonstrate my skillset, but also
                                talk about my experiences and past projects that
                                have brought me to where I am now.
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
                                I think there's a beauty in not just making a
                                portfolio, but projects in general. Each project
                                I make is a step towards my goal of learning
                                more about the constantly expanding field of web
                                development and software engineering.
                            </motion.p>
                        </div>
                        <div className="caseSection">
                            <motion.p
                                initial={{ opacity: 0, y: 50 }} // Start invisible and 50px lower
                                animate={visible ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    delay: 0.3,
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
                                    delay: 0.4,
                                    duration: 0.5,
                                    ease: "easeOut",
                                }}
                            >
                                Before I begin, I must give credit to Demilade
                                Olaleye for inspiring me to create an intro
                                page. He had an amazing light/dark toggle
                                animation I just needed to apply to my
                                portfolio.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 50 }} // Start invisible and 50px lower
                                animate={visible ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    delay: 0.5,
                                    duration: 0.5,
                                    ease: "easeOut",
                                }}
                            >
                                I had made my first portfolio back in January,
                                so it felt like it was an odd decision to decide
                                to make a new one so soon (within two months).
                                But with the amount of knowledge I gained in
                                those short two months, I felt like I could do
                                so much better than what I currently had. That
                                inspired my decision to create a new portfolio
                                from scratch that utilized my new web
                                development and design knowledge.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 50 }} // Start invisible and 50px lower
                                animate={visible ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    delay: 0.6,
                                    duration: 0.5,
                                    ease: "easeOut",
                                }}
                            >
                                One of the features I really wanted to implement
                                this time around, was a dark mode feature. It
                                was very cool to work with :root variables and
                                having them change based on the theme
                                designated. I had a lot of fun with working with
                                two different themes and I hope to implement
                                something with dark/light theme again in the
                                future! It was tricky getting it to work the
                                first couple days I was working with it. One
                                thing to note, is that while the dark/light
                                toggler works, it doesn't save the theme of the
                                user. If you refresh the page, it will default
                                to light mode. I do know that this is fixable
                                using local storage and storing the currently
                                set theme as a variable in the storage object.
                                However, I wasn't able to implement that just
                                yet. It is in the list of features I am planning
                                to implement though.
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
                                I had tried to work with Anime.js and a package
                                called Splt.js, but for some reason I could not
                                get them to work properly. I stuck with GSAP for
                                animations and kept the tech pretty vanilla in
                                terms of new packages. I really struggled with
                                making the page-to-page transitions seamless. I
                                think that in the future, I would opt to find a
                                cleaner solution than the one I implemented. It
                                is a bit finnicky so it is definitely not the
                                preferred method.
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
                                I also got the opportunity to work with EmailJS
                                which is a package/service that allows you to
                                send emails without any backend code. It was
                                awesome to work with, but I don't know if I'll
                                find another use case for it. Instead of
                                displaying my email and using social links, I
                                wanted to incorporate a contact form that
                                actually sends an email to my inbox. It worked
                                perfectly and I am quite happy with the results.
                                I think I should definitely try to look into
                                using useReducer for forms that have a lot of
                                input states that need to be tracked. I could
                                also look into consolidating the five input
                                states into one state and have the value be an
                                object. Then use the spread operator to update
                                the state object values.
                            </motion.p>
                        </div>
                        <motion.div
                            className="caseSection"
                            initial={{ opacity: 0, y: 50 }} // Start invisible and 50px lower
                            animate={visible ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                delay: 0.9,
                                duration: 0.5,
                                ease: "easeOut",
                            }}
                        >
                            <p>REFLECTIONS</p>
                            <p>
                                This is the second portfolio I created and while
                                it has its good points, it was still quite
                                flawed in its design. I really liked the "single
                                page" asepect, where it wasn't just one
                                continuous long scroll, but each view had its
                                own route. I will say that it was a little
                                jarring to use and prone to a few bugs here and
                                there. Mobile responsiveness was still lacking
                                at this point, but much better than my previous
                                attempts. I think this was a huge improvement
                                over my last portfolio, but I think I tried too
                                hard to show off everything I had, and I
                                definitely did not have the skillset to combine
                                all those separate skills into a cohesive site.
                                Overall, I still look back fondly on this
                                project, and it really is another checkpoint to
                                verify just how far I've come.
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
                            <p>Personal</p>
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
                            <p>March 7, 2023</p>
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
                                <span>JAVASCRIPT</span>
                                <span>REACT</span>
                                <span>VITE</span>
                                <span>VERCEL</span>
                                <span>GSAP</span>
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
