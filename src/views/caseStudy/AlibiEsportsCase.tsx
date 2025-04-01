import { useNavigate } from "react-router-dom";
import "./caseStudy.css";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import useLenisSmoothScroll from "../../components/smoothScroll/SmoothScroll";
import StickyCursor from "../../components/stickyCursor/stickyCursor";

const AlibiEsportsCase: React.FunctionComponent = () => {
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
                            href="https://alibi-esports.onrender.com/"
                            target="_blank"
                        >
                            <button>Live Site</button>
                        </a>
                        <a
                            href="https://github.com/justindjsuh/alibi-esports-fe"
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
                    <p className="caseStudyHeaderText">Alibi Esports</p>
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
                    <img src='/caseImages/case_alibiesports.avif' />
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
                                This website serves as a medium for the esports
                                organization, Alibi Esports, and their player
                                base. The organization reaches out to
                                communities and provides them with a competitive
                                outlet for trending games.
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
                                • An all-in-one platform for the organization
                                and players to exchange information
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
                                • There is a scrollable landing page that
                                explains what the company is about and what they
                                strive to achieve through this organization
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
                                • Players can sign up for tournaments via the
                                Register button, where they can input all of
                                their team information including up to five
                                players, a coach, a manager, and two subs.
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
                                • Players are also able to browser previous and
                                upcoming tournaments on the tournaments page
                                where the participating teams and final
                                placements are displayed
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
                                One of the first things one might ask when
                                checking out this repo is, "Why is the frontend
                                and backend split?" Now there are two main
                                reasons for that. 1. I had no idea how to
                                combine the two into one deployment (I do now)
                                2. That conveniently let me avoid the spin down
                                time on Render's deployment for web services on
                                initial load. So, loading up the page doesn't
                                take 30+ seconds, but a request (like a team
                                registration) will require the backend to spin
                                back up. More on this in my learn more section!
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
                                As my first website put into production and the
                                sole developer of this project, there were a lot
                                of obstacles I had to overcome to get this site
                                to work. One of the biggest difficulties I'd
                                like to talk about is developing with responsive
                                web design in mind. I was still getting the hang
                                of the front end technology (HTML & CSS) and
                                found myself having trouble accounting for
                                smaller screen sizes.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 50 }} // Start invisible and 50px lower
                                animate={visible ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    delay: 0.9,
                                    duration: 0.5,
                                    ease: "easeOut",
                                }}
                            >
                                Another quick lesson I learned, was that there
                                are many great deployment websites that I can
                                use for free fullstack project deployments. I
                                had a bit of an issue with Render, because any
                                web services will spin down after 15 minutes of
                                inactivity. Once a request comes in, the web
                                service has to do what's called a "cold start"
                                and spin back up which can take upwards of 30
                                seconds. Sites like Netlify, Vercel, and Cyclic
                                are all options I will consider in the future as
                                I continue to develop websites.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 50 }} // Start invisible and 50px lower
                                animate={visible ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    delay: 1,
                                    duration: 0.5,
                                    ease: "easeOut",
                                }}
                            >
                                Through a lot of Googling and looking at a ton
                                of Stack Overflow posts, I was able to learn an
                                insane amount in the short timespan of this
                                project. This website was created for an
                                organization and the deadline was in less than a
                                week's time. While the timespan was short, this
                                project logged me upwards of 80+ hours where I
                                learned how to handle obstacles like, CSS
                                animations, React useState hell (form handling
                                for 7+ people and 4-6 fields each in a single
                                form is no joke), Express custom middleware
                                (loggers and error handlers), and overall mainly
                                improving my front end development skills.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 50 }} // Start invisible and 50px lower
                                animate={visible ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    delay: 1.1,
                                    duration: 0.5,
                                    ease: "easeOut",
                                }}
                            >
                                Is this the best I can do? Absolutely not. I
                                already feel like I could immensely improve
                                countless things, but as my first step into
                                professional web development, I will definitely
                                look back on this fondly as I continue to
                                improve my skills.
                            </motion.p>
                        </div>
                        <motion.div
                            className="caseSection"
                            initial={{ opacity: 0, y: 50 }} // Start invisible and 50px lower
                            animate={visible ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                delay: 1.2,
                                duration: 0.5,
                                ease: "easeOut",
                            }}
                        >
                            <p>REFLECTIONS</p>
                            <p>
                                Looking back at my lessons learned really makes
                                me realize how passionate I was about the work
                                that I do, as well as seeing how extra I was
                                being with all the intricacies of this project.
                                At the time, I really thought it was and looked
                                good. Now, I am quite frankly a bit horrified
                                that this even went into production to be used
                                by users. After seeing the potential of this
                                project and its "could-have" and "what-ifs", I'm
                                really itching to work on a personal project
                                that will be used by real users!
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
                            <p>Alibi Esports</p>
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
                            <p>January 4, 2023</p>
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
                                <span>AOS</span>
                                <span>CSS3</span>
                                <span>HTML5</span>
                                <span>EXPRESSJS</span>
                                <span>POSTGRESQL</span>
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

export default AlibiEsportsCase;
