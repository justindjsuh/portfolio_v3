import { motion } from "framer-motion";
import "./AboutView.css";

const AboutView: React.FunctionComponent = () => {
    return (
        <div className="aboutContainer">
            <motion.div
                className="aboutContent"
                initial={{ opacity: 0, y: 100 }} // Start invisible and 50px lower
                whileInView={{ opacity: 1, y: 0 }} // Fade in and move up
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <h2>
                    Hey there, I'm <span className="highlight">Justin.</span>
                </h2>
                <p className="aboutMe">
                    I bridge the gap between{" "}
                    <span className="word-highlight">creativity</span> and{" "}
                    <span className="word-highlight">code</span> to build{" "}
                    <span className="word-highlight">
                        unforgettable experiences.
                    </span>
                </p>
                <p>Enjoy your stay.</p>
            </motion.div>
        </div>
    );
};

export default AboutView;
