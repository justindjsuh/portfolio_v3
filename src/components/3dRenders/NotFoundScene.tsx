import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import {
    ErrorSphere,
    InteractiveMesh,
} from "../animations/RoomSphere/RoomSphere";
import { useFrame } from "@react-three/fiber";

function NotFoundScene() {
    const spotLightRef = useRef<THREE.SpotLight>(null);

    useFrame(() => {
        if (spotLightRef.current) {
            spotLightRef.current.shadow.bias = -0.004;
            spotLightRef.current.shadow.radius = 24;
        }
    });

    return (
        <>
            {/* Lighting for Realism */}
            <ambientLight intensity={0.1} />
            <directionalLight
                position={[3, 5, 3]}
                intensity={2}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                ref={spotLightRef}
            />
            <spotLight
                position={[3, 5, 3]}
                angle={0.5}
                intensity={5}
                castShadow={false}
                penumbra={0.2}
            />
            <spotLight
                position={[3, 5, 3]}
                angle={0.5}
                intensity={12}
                castShadow
                penumbra={0.2}
            />
            <spotLight
                position={[0, 3, 2]}
                angle={0.5}
                intensity={7}
                castShadow={false}
                penumbra={0.2}
            />
            <directionalLight
                position={[0, 0.4, 0]}
                intensity={0.3}
                castShadow
            />

            <ErrorSphere />
            <InteractiveMesh color={"#ff0033"} />

            {/* Controls for Camera Interaction */}
            <OrbitControls
                enableZoom={false}
                enableRotate={false}
                enablePan={false}
            />
        </>
    );
}

export default NotFoundScene;
