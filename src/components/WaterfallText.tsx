import { motion } from "framer-motion";
import "./WaterfallText.css";

interface IFlipLinkProps {
    phrase: string;
    error?: boolean;
}

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink: React.FunctionComponent<IFlipLinkProps> = ({ phrase }) => {
    return (
        <motion.div
            initial="initial"
            whileHover="hovered"
            className="flipLinkContainer"
            style={{
                display: "inline-block",
                overflow: "hidden",
                position: "relative",
                lineHeight: 1.2,
                fontSize: "4rem",
                fontWeight: "500",
                cursor: "pointer",
            }}
        >
            <motion.div
                style={{
                    display: "flex",
                    position: "relative",
                    justifyContent: "center",
                }}
            >
                {phrase.split("").map((l, i) => (
                    <motion.span
                        key={`top-${i}`}
                        className="letter"
                        variants={{
                            initial: { y: 0 },
                            hovered: { y: "-100%" },
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeOut",
                            delay: STAGGER * i,
                        }}
                        style={{
                            display: "inline-block",
                            color: l !== "." ? "#fff" : "#2b65ff",
                        }}
                    >
                        {l === " " ? <span>&nbsp;</span> : l}
                    </motion.span>
                ))}
            </motion.div>

            {/* Hidden Phrase Appears When Hovered */}
            <motion.div
                style={{
                    display: "flex",
                    position: "absolute",
                    justifyContent: "center",
                    top: 0,
                    left: 0,
                    width: "100%",
                    fontSize: "4rem",
                    fontWeight: "500",
                }}
            >
                {phrase.split("").map((l, i) => (
                    <motion.span
                        key={`bottom-${i}`}
                        className="letter"
                        variants={{
                            initial: { y: "100%" },
                            hovered: { y: 0 },
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeOut",
                            delay: STAGGER * i,
                        }}
                        style={{
                            display: "inline-block",
                            color: l !== "." ? "#fff" : "#2b65ff",
                        }}
                    >
                        {l === " " ? <span>&nbsp;</span> : l}
                    </motion.span>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default FlipLink;

export const FlipLinkV2: React.FunctionComponent<IFlipLinkProps> = ({
    phrase,
}) => {
    return (
        <motion.div
            initial="initial"
            whileHover="hovered"
            className="flipLinkContainer"
            style={{
                display: "inline-block",
                overflow: "hidden",
                position: "relative",
                lineHeight: 1.2,
                fontSize: "5rem",
                fontWeight: "600",
                fontFamily: "Inter Tight",
            }}
        >
            <motion.div
                style={{
                    display: "flex",
                    position: "relative",
                }}
            >
                {phrase.split("").map((l, i) => (
                    <motion.span
                        key={`top-${i}`}
                        className="letter"
                        variants={{
                            initial: { y: 0 },
                            hovered: { y: "-100%" },
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeOut",
                            delay: STAGGER * i,
                        }}
                        style={{
                            display: "inline-block",
                            color: l !== "." ? "#fff" : "#2b65ff",
                        }}
                    >
                        {l === " " ? <span>&nbsp;</span> : l}
                    </motion.span>
                ))}
            </motion.div>

            {/* Hidden Phrase Appears When Hovered */}
            <motion.div
                style={{
                    display: "flex",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    fontSize: "5rem",
                    fontWeight: "600",
                    fontFamily: "Inter Tight",
                }}
            >
                {phrase.split("").map((l, i) => (
                    <motion.span
                        key={`bottom-${i}`}
                        className="letter"
                        variants={{
                            initial: { y: "100%" },
                            hovered: { y: 0 },
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeOut",
                            delay: STAGGER * i,
                        }}
                        style={{
                            display: "inline-block",
                            color: l !== "." ? "#fff" : "#2b65ff",
                        }}
                    >
                        {l === " " ? <span>&nbsp;</span> : l}
                    </motion.span>
                ))}
            </motion.div>
        </motion.div>
    );
};

export const FlipLinkV3: React.FunctionComponent<IFlipLinkProps> = ({
    phrase,
    error = false,
}) => {
    return (
        <motion.div
            initial="initial"
            whileHover="hovered"
            className="flipLinkContainer3"
            style={{
                display: "inline-block",
                overflow: "hidden",
                position: "relative",
                lineHeight: 1.2,
                fontWeight: "600",
                fontFamily: "Inter Tight",
            }}
        >
            <motion.div
                style={{
                    display: "flex",
                    position: "relative",
                }}
            >
                {phrase.split("").map((l, i) => (
                    <motion.span
                        key={i}
                        initial={{ y: 200, opacity: 0 }} // Start below and invisible
                        animate={{ y: 0, opacity: 1 }} // Animate each letter to rise
                        transition={{
                            type: "spring",
                            stiffness: 90,
                            damping: 20,
                            mass: 1.2,
                            duration: 0.8,
                            delay: i * 0.1, // Delay for each letter based on its index
                        }}
                        style={{
                            display: "inline-block",
                            color:
                                l !== "."
                                    ? "#fff"
                                    : error
                                    ? "#ff0033"
                                    : "#2b65ff",
                        }}
                    >
                        {l === " " ? <span>&nbsp;</span> : l}
                    </motion.span>
                ))}
            </motion.div>
        </motion.div>
    );
};
