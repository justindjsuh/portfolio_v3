import { useEffect } from "react";
import Lenis from "lenis";

const useLenisSmoothScroll = () => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 0.6, // Adjust scroll speed (default: 1)
            // easing: (t) => 1 - Math.pow(1 - t, 3),
            easing: (t) => 1 - (1 - t) ** 2.8,
            gestureOrientation: "vertical", // Prevents unwanted horizontal scrolling
            infinite: false, // Disable infinite scrolling
        });

        const raf = (time: number) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);

        return () => lenis.destroy(); // Cleanup function on unmount
    }, []);
};

export default useLenisSmoothScroll;
