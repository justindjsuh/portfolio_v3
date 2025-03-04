import { motion } from "framer-motion";
import "./ContactView.css";
import IMAGES from "../../assets/images/Images";

interface IContactView {
    darkMode: boolean;
}

const ContactView: React.FunctionComponent<IContactView> = ({ darkMode }) => {
    return (
        <div className={`contactContainer ${darkMode ? "darkMode" : ""}`}>
            <motion.div
                className={`contactContent ${darkMode ? "darkMode" : ""}`}
                initial={{ opacity: 0, y: 100 }} // Start invisible and 50px lower
                whileInView={{ opacity: 1, y: 0 }} // Fade in and move up
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <p className="contactText">CONTACT</p>
                <div
                    className={`mainTextContainer ${
                        darkMode ? "darkMode" : ""
                    }`}
                >
                    <p
                        className={`getConnectedText ${
                            darkMode ? "darkMode" : ""
                        }`}
                    >
                        Let's get connected.
                    </p>
                    <p>CAPTURE YOUR IDEAS, CREATE CONNECTIONS</p>
                </div>
                <hr className="divider" />
                <div className="contactChipContainer">
                    <a
                        className="contactChip"
                        href="https://github.com/justindjsuh"
                        target="_blank"
                    >
                        <img
                            src={
                                darkMode
                                    ? IMAGES.githubIcon
                                    : IMAGES.githubDarkIcon
                            }
                        />
                    </a>
                    <a
                        className="contactChip"
                        href="https://www.linkedin.com/in/justin-suh98/"
                        target="_blank"
                    >
                        <img
                            src={
                                darkMode
                                    ? IMAGES.linkedinIcon
                                    : IMAGES.linkedinDarkIcon
                            }
                        />
                    </a>
                    <a
                        className="contactChip"
                        href="mailto:justindjsuh@gmail.com"
                    >
                        <img
                            src={
                                darkMode
                                    ? IMAGES.emailIcon
                                    : IMAGES.emailDarkIcon
                            }
                        />
                    </a>
                </div>
            </motion.div>
        </div>
    );
};

export default ContactView;
