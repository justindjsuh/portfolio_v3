import { useRef } from "react";
import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";

export function MorphingSphere() {
    const meshRef = useRef<Mesh>(null);

    useFrame(({ clock }) => {
        if (meshRef.current) {
            const dynamicSpeed1 =
                0.2 + Math.sin(clock.getElapsedTime() * 0.1) * 0.05;

            meshRef.current.rotation.y += dynamicSpeed1 * 0.01;

            const yOffset = Math.sin(clock.getElapsedTime() * 0.5) * 0.1;
            meshRef.current.position.y = yOffset;
        }
    });

    return (
        <mesh ref={meshRef} castShadow receiveShadow>
            <icosahedronGeometry args={[1, 2]} /> {/* Low-poly look */}
            <meshStandardMaterial
                color={"#E6E6E6"}
                flatShading
                emissive={"white"}
                emissiveIntensity={0.3}
                metalness={0.5} // Helps reflect light subtly
                roughness={0.7} // Keeps the material from being too reflective
            />
            {/* Flat shading for polygonal look */}
            <Sphere args={[1.2, 20, 20]}>
                <meshPhysicalMaterial
                    transmission={0.9} // Simulates glass-like transparency
                    opacity={0.1} // Ensures full effect
                    roughness={0.05} // Low roughness for a smooth, glassy look
                    metalness={0.5} // Slight metallic feel
                    thickness={0.5} // Makes the glass effect more pronounced
                    clearcoat={0.1} // Adds a slight reflective coating
                    clearcoatRoughness={0.1} // Ensures it's not too glossy
                />
            </Sphere>
        </mesh>
    );
}

export function WireframeSphere() {
    const wireframeRef = useRef<Mesh>(null);

    useFrame(({ clock }) => {
        if (wireframeRef.current) {
            const dynamicSpeed2 =
                0.15 + Math.cos(clock.getElapsedTime() * 0.1) * 0.05;
            wireframeRef.current.rotation.y -= dynamicSpeed2 * 0.01;
            const yOffset = Math.sin(clock.getElapsedTime() * 0.5) * 0.1;
            wireframeRef.current.position.y = yOffset;
        }
    });

    return (
        <mesh ref={wireframeRef} scale={1.1} castShadow receiveShadow>
            {/* Slightly larger to wrap around */}
            <icosahedronGeometry args={[1.3, 2]} />
            <meshStandardMaterial
                color={"#fafafa"} // Purple outline
                wireframe
                transparent
                emissive={"#303030"}
                emissiveIntensity={0.3}
                opacity={0.8} // Slight transparency for softer effect
            />
        </mesh>
    );
}
