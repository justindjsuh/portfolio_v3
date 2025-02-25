import React, { useRef } from "react";
import * as THREE from "three";
import { TextureLoader, ClampToEdgeWrapping } from "three";
import { useFrame, useLoader } from "@react-three/fiber";

interface ICubeProps {
    position: [number, number, number];
    size?: number;
    hRotation: number;
    vRotation: number;
    xRotation?: number;
    color?: string;
    xPosFloat?: number;
    yPosFloat?: number;
}

// A reusable Cube component that renders a 3D cube.
export const Cube: React.FunctionComponent<ICubeProps> = ({
    position,
    size,
    hRotation,
    vRotation,
    xRotation = 3,
    xPosFloat = 0.06,
    yPosFloat = 0.06,
    color = "#505050",
}) => {
    const ref = useRef<THREE.Mesh>(null);

    useFrame(({ clock }) => {
        if (ref.current) {
            // Create a floating effect using sine wave
            ref.current.position.x =
                position[0] + Math.sin(clock.elapsedTime) * xPosFloat;
            ref.current.position.y =
                position[1] + Math.sin(clock.elapsedTime) * yPosFloat;
        }
    });

    // useFrame(({ mouse }) => {
    //     if (ref.current) {
    //         // Apply slight movement based on mouse position
    //         ref.current.position.x = position[0] + mouse.x * 0.3;
    //         ref.current.position.y = position[1] - mouse.y * 0.3;
    //     }
    // });

    return (
        <mesh
            ref={ref}
            position={position}
            rotation={[hRotation, vRotation, xRotation]}
            castShadow
            receiveShadow
        >
            <boxGeometry args={[size, size, size]} />
            <meshPhysicalMaterial
                color={color}
                roughness={0.5} // Controls surface texture (lower = more reflective)
                metalness={1} // Makes it more like a polished surface
                clearcoatRoughness={1} // Makes reflections sharper
            />
        </mesh>
    );
};

export const TexturedCube = () => {
    // Load the image texture
    const texture = useLoader(TextureLoader, "/linkedin-icon.png");
    // Ensure the image does not repeat or stretch
    texture.wrapS = ClampToEdgeWrapping;
    texture.wrapT = ClampToEdgeWrapping;
    // Adjust texture scaling and positioning
    texture.repeat.set(1.25, 1.25); // Scale to 50% of the face
    texture.offset.set(-0.15, -0.15); // Center the image

    return (
        <mesh position={[0, 0, 0]} rotation={[0.5, 0.5, 0]}>
            <boxGeometry args={[1, 1, 1]} /> {/* Standard cube */}
            {/* Assign different materials to each face */}
            <meshStandardMaterial attach="material-0" color="#505050" />
            <meshStandardMaterial attach="material-1" color="#505050" />
            <meshStandardMaterial attach="material-2" color="#505050" />
            <meshStandardMaterial attach="material-3" color="#505050" />
            <meshStandardMaterial attach="material-4" map={texture} />{" "}
            {/* Apply texture to this face */}
            <meshStandardMaterial attach="material-5" color="#505050" />
        </mesh>
    );
};
