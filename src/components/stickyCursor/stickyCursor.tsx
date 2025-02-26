import React, { useEffect } from "react";
import "./stickyCursor.css";
import { motion, useMotionValue, useSpring } from "motion/react";

const StickyCursor: React.FunctionComponent = () => {
    // const [isHovered, setIsHovered] = useState(false);

    // const cursorSize = isHovered ? 60 : 20;
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
        // const rect = stickyAbout.current?.getBoundingClientRect();
        // if (isHovered && rect) {
        //     const { left, top, width, height } = rect;
        //     const center = { x: left + width / 2, y: top + height / 2 };

        //     mouse.x.set(center.x - cursorSize / 2 - 5);
        //     mouse.y.set(center.y - cursorSize / 2);
        // } else {
        //     mouse.x.set(clientX - cursorSize / 2);
        //     mouse.y.set(clientY - cursorSize / 2);
        // }
        mouse.x.set(clientX - cursorSize / 2);
        mouse.y.set(clientY - cursorSize / 2);
    };

    // const manageMouseOver = () => {
    //     setIsHovered(true);
    // };

    // const manageMouseLeave = () => {
    //     setIsHovered(false);
    // };

    useEffect(() => {
        window.addEventListener("mousemove", manageMouseMove);
        //     stickyAbout.current?.addEventListener("mouseenter", manageMouseOver);
        //     stickyAbout.current?.addEventListener("mouseleave", manageMouseLeave);
        return () => {
            window.removeEventListener("mousemove", manageMouseMove);
            //         stickyAbout.current?.removeEventListener(
            //             "mouseenter",
            //             manageMouseOver
            //         );
            //         stickyAbout.current?.removeEventListener(
            //             "mouseleave",
            //             manageMouseLeave
            //         );
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
