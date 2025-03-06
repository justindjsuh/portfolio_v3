import React, { useEffect } from "react";
import "./stickyCursor.css";
import { motion, useMotionValue, useSpring } from "motion/react";

const StickyCursor: React.FunctionComponent = () => {
    const cursorSize = 30;
    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0),
    };

    const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
    const smoothMouse = {
        x: useSpring(mouse.x, smoothOptions),
        y: useSpring(mouse.y, smoothOptions),
    };

    const manageMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        mouse.x.set(clientX - cursorSize / 2);
        mouse.y.set(clientY - cursorSize / 2);
    };

    useEffect(() => {
        window.addEventListener("mousemove", manageMouseMove);
        return () => {
            window.removeEventListener("mousemove", manageMouseMove);
        };
    });

    return (
        <motion.div
            className="cursor"
            style={{ left: smoothMouse.x, top: smoothMouse.y }}
            animate={{
                width: cursorSize,
                height: cursorSize,
            }}
        ></motion.div>
    );
};

export default StickyCursor;
