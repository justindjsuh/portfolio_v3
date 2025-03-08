import { useEffect, useRef, useState } from "react";
import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

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
                color={"#404040"}
                flatShading
                emissiveIntensity={0.3}
                metalness={0.5}
                roughness={0.7}
            />
        </mesh>
    );
}

function getRandomIntInclusive(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function ErrorSphere() {
    const meshRef = useRef<Mesh>(null);
    const [targetRotation, setTargetRotation] = useState({
        x: 0,
        y: 0,
        z: 0,
    });
    const [lastJitterTime, setLastJitterTime] = useState(0);

    useFrame(({ clock }) => {
        if (!meshRef.current) return;

        const elapsed = clock.getElapsedTime();

        // Every few seconds, pick a new "scan" direction
        if (Math.floor(elapsed) % getRandomIntInclusive(5, 15) === 0) {
            setTargetRotation({
                x: Math.sin(elapsed * 0.3) * 0.4, // Oscillate x slightly
                y: Math.sin(elapsed * 0.2) * 0.6, // Oscillate y more
                z: Math.sin(elapsed * 0.5) * 0.2, // Small z tilt
            });
        }

        // Add **gentle jitter** every 2-3 seconds (but not every frame)
        if (elapsed - lastJitterTime > 2 + Math.random() * 1) {
            setLastJitterTime(elapsed);
            setTargetRotation((prev) => ({
                x: prev.x + (Math.random() - 0.5) * 0.3, // Small 5° twitch
                y: prev.y + (Math.random() - 0.5) * 0.15,
                z: prev.z + (Math.random() - 0.5) * 0.1,
            }));
        }

        // Smoothly transition to the target rotation
        meshRef.current.rotation.x = THREE.MathUtils.lerp(
            meshRef.current.rotation.x,
            targetRotation.x,
            0.1
        );
        meshRef.current.rotation.y = THREE.MathUtils.lerp(
            meshRef.current.rotation.y,
            targetRotation.y,
            0.1
        );
        meshRef.current.rotation.z = THREE.MathUtils.lerp(
            meshRef.current.rotation.z,
            targetRotation.z,
            0.1
        );
    });

    return (
        <mesh ref={meshRef} scale={2} position={[0, 0, 0]} castShadow>
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
                color={"#898989"}
                // color={"#2b65ff"}
                wireframe
                transparent
                emissive={"#303030"}
                emissiveIntensity={0.3}
                opacity={0.8} // Slight transparency for softer effect
            />
        </mesh>
    );
}

export function InteractiveSphere() {
    const meshRef = useRef<Mesh>(null);
    const [mouse, setMouse] = useState({ x: 0, y: 0 });

    // Track mouse position globally
    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const x = (event.clientX / window.innerWidth) * 2 - 1;
            const y = -(event.clientY / window.innerHeight) * 2 + 1;
            setMouse({ x, y });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.02; // Slow natural rotation
            meshRef.current.rotation.x += 0.0015; // Adds slight vertical spin

            // Mouse influence (adds on top of the base rotation)
            meshRef.current.rotation.y +=
                (mouse.x * 0.9 - meshRef.current.rotation.y) * 0.1;
            meshRef.current.rotation.x +=
                (mouse.y * 0.9 - meshRef.current.rotation.x) * 0.1;
        }
    });

    return (
        <mesh ref={meshRef} scale={2} position={[0, 0, 0]} castShadow>
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

export function InteractiveMesh({ color = "#898989" }) {
    const wireframeRef = useRef<Mesh>(null);

    useFrame(({ clock }) => {
        if (wireframeRef.current) {
            const dynamicSpeed2 =
                0.15 + Math.cos(clock.getElapsedTime() * 0.1) * 0.05;
            wireframeRef.current.rotation.y -= dynamicSpeed2 * 0.01;
        }
    });

    return (
        <mesh ref={wireframeRef} position={[0, 0, 0]} scale={2} receiveShadow>
            {/* Slightly larger to wrap around */}
            <icosahedronGeometry args={[0.45, 2]} />
            <meshStandardMaterial
                color={color}
                wireframe
                transparent
                emissive={"#303030"}
                emissiveIntensity={0.3}
                opacity={0.8} // Slight transparency for softer effect
            />
        </mesh>
    );
}
