import { useRef } from "react";
import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";

export function MorphingSphere() {
    const meshRef = useRef<Mesh>(null);

    useFrame(({ clock }) => {
        if (meshRef.current) {
            const dynamicSpeed1 =
                0.2 + Math.sin(clock.getElapsedTime() * 0.1) * 0.05;
            meshRef.current.rotation.y += dynamicSpeed1 * 0.01;
            const yOffset = Math.sin(clock.getElapsedTime() * 0.5) * 0.05;
            meshRef.current.position.y = yOffset + 0.6;
        }
    });

    return (
        <mesh ref={meshRef} position={[0.4, 0.5, 0.4]} castShadow>
            <icosahedronGeometry args={[0.35, 2]} /> {/* Low-poly look */}
            <meshStandardMaterial
                color={"#5B5B5B"}
                flatShading
                emissiveIntensity={0.3}
                metalness={0.5}
                roughness={0.7}
            />
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
            const yOffset = Math.sin(clock.getElapsedTime() * 0.5) * 0.05;
            wireframeRef.current.position.y = yOffset + 0.6;
        }
    });

    return (
        <mesh
            ref={wireframeRef}
            scale={1.1}
            position={[0.4, 0.5, 0.4]}
            receiveShadow
        >
            {/* Slightly larger to wrap around */}
            <icosahedronGeometry args={[0.45, 2]} />
            <meshStandardMaterial
                color={"#898989"} // Purple outline
                wireframe
                transparent
                emissive={"#303030"}
                emissiveIntensity={0.3}
                opacity={0.8} // Slight transparency for softer effect
            />
        </mesh>
    );
}
