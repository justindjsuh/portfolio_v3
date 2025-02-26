import React, { useRef } from "react";
import * as THREE from "three";
import { TextureLoader, ClampToEdgeWrapping } from "three";
import { useFrame, useLoader } from "@react-three/fiber";

interface ICubeProps {
    position: [number, number, number];
    size?: number;
    hRotation?: number;
    vRotation?: number;
    xRotation?: number;
    color?: string;
    xPosFloat?: number;
    yPosFloat?: number;
    rotationMultiplier?: number;
    rotationTimeMultiplier?: number;
    reverse?: boolean;
}

// A reusable Cube component that renders a 3D cube.
export const Cube: React.FunctionComponent<ICubeProps> = ({
    position,
    size,
    hRotation = 0,
    vRotation = 0,
    xRotation = 3,
    xPosFloat = 0.06,
    yPosFloat = 0.06,
    rotationMultiplier = 0.05,
    rotationTimeMultiplier = 0.1,
    reverse = false,
    color = "#505050",
}) => {
    const ref = useRef<THREE.Mesh>(null);

    useFrame(({ clock }) => {
        const time = clock.getElapsedTime();
        if (ref.current) {
            // Create a floating effect using sine wave
            if (reverse) {
                ref.current.position.x =
                    position[0] - Math.sin(time) * xPosFloat;
                ref.current.position.y =
                    position[1] - Math.sin(time) * yPosFloat;
            } else {
                ref.current.position.x =
                    position[0] + Math.sin(time) * xPosFloat;
                ref.current.position.y =
                    position[1] + Math.sin(time) * yPosFloat;
            }

            // Add a subtle rotation effect on the X and Y axes.
            // Adjust the multiplier (0.1) and frequency (0.5) to get the desired effect.
            ref.current.rotation.x =
                hRotation +
                Math.sin(time * rotationTimeMultiplier) * rotationMultiplier;
            ref.current.rotation.y =
                vRotation +
                Math.cos(time * rotationTimeMultiplier) * rotationMultiplier;
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
