import { useNavigate } from "react-router-dom";
import "./caseStudy.css";
import { useEffect, useRef, useState } from "react";
import IMAGES from "../../assets/images/Images";
import { motion, useInView } from "framer-motion";
import useLenisSmoothScroll from "../../components/smoothScroll/SmoothScroll";
import StickyCursor from "../../components/stickyCursor/stickyCursor";

const PeakFitnessCase: React.FunctionComponent = () => {
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
                        <button>
                            <a href="https://peakfitness.netlify.app/">
                                Live Site
                            </a>
                        </button>
                        <a href="https://github.com/peak-fitness/peak">
                            <img rel="preload" src={IMAGES.githubCaseIcon} />
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
                    <p className="caseStudyHeaderText">Peak Fitness</p>
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
                    <img rel="preload" src={IMAGES.casePeakBg} />
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
                                Peak is a health tracking website that strives
                                to bring users closer to their fitness goals
                                with a long-term mindset.
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
                                • Keep track of when you've gone to the gym with
                                the attendance tracker. Visually tracks when
                                you've uploaded a workout to the app and keeps
                                track of your streaks.
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
                                • Workout journal to keep track of your workouts
                                (exercise, sets, reps) for the entire year.
                                Calculate your calories through our tracker that
                                lets you input custom meals for breakfast,
                                lunch, and dinner.
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
                                • Find motivation and be held accountable by
                                tracking your workouts with friends. Add other
                                users on the app as friends, and get a
                                personalized feed of your friends' lifts.
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
                                • Gain achievements through challenges to push
                                motivation and show off by displaying them on
                                your personal profile.
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
                                This was the first project I worked on with a
                                group of devs and it was definitely an eye
                                opening project. This was a "final project" of
                                sorts for the Fullstack Academy Bootcamp I was
                                attending at the time. It was a good experience
                                to work with fellow rookie devs, but it
                                definitely came with its difficulties.
                                Particularly the agreement of library usage,
                                consistency of UI designs, as well as individual
                                contributions were all quite difficult to adjust
                                to. To this day, I look back fondly on this
                                project and I do think it was a strong
                                experience builder for early-career devs.
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
                                I do think the MaterialUI usage generally would
                                be a good choice, but in the hands of amateur
                                devs, you really have a hard time getting away
                                from that "boilerplate MUI" look, which is what
                                really turned me off about this project's UI. I
                                do think I was searching for some level of
                                perfectionism, and it was hardly the right
                                mentality to have when all five of us were
                                beginner devs without determined roles. I really
                                did enjoy using Supabase though and plan to use
                                it in some projects in the near future!
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
                                I have to say that reflecting back on this
                                project brought back a lot of memories. I still
                                do look back at this project quite fondly since
                                it was a project that I was able to work on with
                                fellow passionate devs to work towards the same
                                goal/product. I do think the trials I faced were
                                good lessons for me, and I still think about
                                them time to time. I was very particular about
                                the designs of the product, but most of the devs
                                I was working with weren't design-oriented, but
                                rather wanted to focus more on the functionality
                                while compromising a good design. I know there
                                was a lot of things I could have done better,
                                but overall I was happy that I got to work on
                                this project with my cohort-mates.
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
                            <p>Fullstack Academy</p>
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
                            <p>February 16, 2023</p>
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
                                <span>MATERIALUI</span>
                                <span>EXPRESSJS</span>
                                <span>POSTGRESQL</span>
                                <span>SUPABASE</span>
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

export default PeakFitnessCase;
