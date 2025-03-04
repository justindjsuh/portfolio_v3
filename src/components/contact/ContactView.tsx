import { motion } from "framer-motion";
import "./ContactView.css";
import IMAGES from "../../assets/images/Images";

const ContactView: React.FunctionComponent = () => {
    return (
        <div className="contactContainer">
            <motion.div
                className="contactContent"
                initial={{ opacity: 0, y: 100 }} // Start invisible and 50px lower
                whileInView={{ opacity: 1, y: 0 }} // Fade in and move up
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <p className="contactText">CONTACT</p>
                <div className="mainTextContainer">
                    <p className="getConnectedText">Let's get connected.</p>
                    <p>CAPTURE YOUR IDEAS, CREATE CONNECTIONS</p>
                </div>
                <hr className="divider" />
                <div className="contactChipContainer">
                    <a
                        className="contactChip"
                        href="https://github.com/justindjsuh"
                        target="_blank"
                    >
                        <img src={IMAGES.githubIcon} />
                    </a>
                    <a
                        className="contactChip"
                        href="https://www.linkedin.com/in/justin-suh98/"
                        target="_blank"
                    >
                        <img src={IMAGES.linkedinIcon} />
                    </a>
                    <a
                        className="contactChip"
                        href="mailto:justindjsuh@gmail.com"
                    >
                        <img src={IMAGES.emailIcon} />
                    </a>
                </div>
            </motion.div>
        </div>
    );
};

export default ContactView;
