import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { MorphingSphere, WireframeSphere } from "./morphingSphere";
import { OrbitControls } from "@react-three/drei";

const SphereScene: React.FunctionComponent = () => {
    const topLightRef = useRef<THREE.PointLight>(null);
    const bottomLightRef = useRef<THREE.PointLight>(null);
    const mouseLightRef = useRef<THREE.PointLight>(null);

    useFrame(({ clock }) => {
        if (topLightRef.current)
            topLightRef.current.intensity =
                2 + Math.sin(clock.getElapsedTime() * 1.5) * 0.3;
        if (bottomLightRef.current)
            bottomLightRef.current.intensity =
                2 + Math.sin(clock.getElapsedTime() * 1.5 + Math.PI) * 0.3;
    });

    const { mouse } = useThree();
    useFrame(() => {
        if (mouseLightRef.current) {
            mouseLightRef.current.position.x = mouse.x * 5;
            mouseLightRef.current.position.y = mouse.y * 5;
        }
    });

    return (
        <>
            <ambientLight intensity={0.5} />
            {/* Top Purple Light */}
            <pointLight
                position={[0, 2, 2]}
                color={"#a033ff"}
                intensity={15}
                distance={3} // Controls how far the glow extends
                decay={0} // Softens the light falloff
                ref={topLightRef}
            />

            {/* Bottom Blue Light */}
            <pointLight
                position={[0, -2, 2]}
                color={"#2b65ff"}
                intensity={15}
                distance={3}
                decay={0}
                ref={bottomLightRef}
            />

            {/* Bottom Blue Light */}
            <pointLight
                position={[0, 0, 2]}
                color={"#gray"}
                intensity={0.2}
                distance={3}
                decay={0}
                ref={mouseLightRef}
            />
            <MorphingSphere />
            <WireframeSphere />
            <OrbitControls
                enableZoom={false}
                enableRotate={false}
                enablePan={false}
            />
        </>
    );
};

export default SphereScene;
