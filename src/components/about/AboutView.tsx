import { motion } from "framer-motion";
import "./AboutView.css";

// ADD A FADE UP FOR THE CONTENT

const AboutView: React.FunctionComponent = () => {
    return (
        <div className="aboutContainer">
            <motion.div
                className="aboutContent"
                initial={{ opacity: 0, y: 100 }} // Start invisible and 50px lower
                whileInView={{ opacity: 1, y: 0 }} // Fade in and move up
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
            >
                <h2>
                    Hey there, I'm <span className="highlight">Justin.</span>
                </h2>
                <p>
                    I'm a{" "}
                    <span className="word-highlight">
                        full-stack software engineer
                    </span>{" "}
                    based in PA, passionate about creating{" "}
                    <span className="word-highlight">
                        user-centric, innovative solutions
                    </span>{" "}
                    that make a real impact on users. I have a strong drive to
                    push my skills to new heights and I aim to craft meaningful
                    products that{" "}
                    <span className="word-highlight">
                        truly connect with people.
                    </span>{" "}
                    I love what I do, and even recently, I've had the
                    opportunity to give back by building websites for local
                    churches, combining my technical expertise with my desire to{" "}
                    <span className="word-highlight">serve the community.</span>
                </p>
                <p>I hope you enjoy your stay.</p>
            </motion.div>
        </div>
    );
};

export default AboutView;
