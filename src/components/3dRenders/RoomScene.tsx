import { OrbitControls } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import {
    MorphingSphere,
    WireframeSphere,
} from "../animations/RoomSphere/RoomSphere";
import { useFrame } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

// const InteractiveLight = () => {
//     const lightRef = useRef<THREE.DirectionalLight>(null);
//     const [mouseX, setMouseX] = useState(0.5); // Default to center

//     useEffect(() => {
//         const handleMouseMove = (event: MouseEvent) => {
//             const normalizedX = event.clientX / window.innerWidth; // Normalize between 0 and 1
//             setMouseX(normalizedX);
//         };

//         window.addEventListener("mousemove", handleMouseMove);
//         return () => window.removeEventListener("mousemove", handleMouseMove);
//     }, []);

//     useFrame(() => {
//         if (lightRef.current) {
//             // Define the two colors
//             const color1 = new THREE.Color("#2b65ff");
//             const color2 = new THREE.Color("#a033ff");

//             // Interpolate between colors based on mouse position
//             const lerpedColor = color1.lerp(color2, mouseX);

//             // Apply the lerped color to the light
//             lightRef.current.color.set(lerpedColor);
//         }
//     });

//     return (
//         <directionalLight
//             ref={lightRef}
//             position={[1, 1.4, 1]}
//             intensity={2}
//             // castShadow
//         />
//     );
// };

interface ITriangularWall {
    width: number;
    height: number;
    position: [number, number, number];
    rotation: [number, number, number];
}

const PyramidWall: React.FunctionComponent<ITriangularWall> = ({
    width,
    height,
    position,
    rotation,
}) => {
    const ref = useRef<THREE.Mesh>(null);

    const geometry = useMemo(() => {
        const segments = 10; // Controls number of triangles
        const geom = new THREE.PlaneGeometry(width, height, segments, segments);
        const posAttr = geom.attributes.position;
        const numVertices = posAttr.count;

        // Loop through the vertices in groups of 3 (each triangle)
        for (let i = 0; i < numVertices; i += 3) {
            // Compute the center vertex of the triangle
            const centerIndex = i + 5; // Using the last vertex as the peak

            // Raise the peak of the triangle to create a pyramid effect
            const peakHeight = 0.08; // Adjust for more or less depth
            const z = posAttr.getZ(centerIndex) + peakHeight;
            posAttr.setZ(centerIndex, z);
        }

        geom.computeVertexNormals(); // Ensure correct lighting

        return geom;
    }, [width, height]);

    return (
        <mesh
            ref={ref}
            geometry={geometry}
            position={position}
            rotation={rotation}
            receiveShadow
        >
            <meshPhysicalMaterial
              flatShading
                color="#222222"
                roughness={0.6}
                metalness={0.5}
                clearcoat={1}
                clearcoatRoughness={0.1}
            />
        </mesh>
    );
};

// const TriangularWall: React.FunctionComponent<ITriangularWall> = ({
//     width,
//     height,
//     position,
//     rotation,
// }) => {
//     const ref = useRef<THREE.Mesh>(null);

//     const geometry = useMemo(() => {
//         const segments = 15; // Adjust for more triangles
//         const geom = new THREE.PlaneGeometry(width, height, segments, segments);
//         geom.computeVertexNormals();
//         return geom;
//     }, [width, height]);

//     return (
//         <mesh
//             ref={ref}
//             geometry={geometry}
//             position={position}
//             rotation={rotation}
//             receiveShadow
//         >
//             <meshStandardMaterial
//                 color={"white"}
//                 transparent
//                 opacity={0.6}
//                 roughness={0.9}
//                 metalness={0.5}
//             />
//             <meshStandardMaterial color="#101010" wireframe />
//         </mesh>
//     );
// };

function Room() {
    const spotLightRef = useRef<THREE.SpotLight>(null);
    const floorRef = useRef<THREE.Mesh>(null);
    const cubeRef = useRef<THREE.Mesh>(null);
    const cube2Ref = useRef<THREE.Mesh>(null);

    useFrame(() => {
        if (spotLightRef.current) {
            spotLightRef.current.shadow.bias = -0.004;
            spotLightRef.current.shadow.radius = 24;
        }
    });

    useFrame(({ clock }) => {
        if (cubeRef.current) {
            const t = clock.getElapsedTime();
            cubeRef.current.position.y = Math.sin(t * 1) * 0.01 - 0.7; // Adjust speed and height
        }
        if (cube2Ref.current) {
            const t = clock.getElapsedTime();
            cube2Ref.current.position.y = Math.sin(t * 1) * 0.01 - 0.71; // Adjust speed and height
        }
    });

    return (
        <>
            {/* Lighting for Realism */}
            <ambientLight intensity={0.1} />
            <directionalLight
                position={[3, 5, 3]}
                intensity={2.5}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                ref={spotLightRef}
            />
            <spotLight
                position={[3, 5, 3]}
                angle={0.5}
                intensity={12}
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
            <directionalLight position={[0, 0.4, 0]} intensity={1} castShadow />

            {/* Extra Lights */}
            {/* <InteractiveLight /> */}

            {/* Triangular Walls */}
            <PyramidWall
                width={4}
                height={4}
                position={[0, 0, -2]}
                rotation={[0, 0, 0]}
            />
            <PyramidWall
                width={4}
                height={4}
                position={[-2, 0, 0]}
                rotation={[0, Math.PI / 2, 0]}
            />

            <MorphingSphere />
            <WireframeSphere />

            {/* Floor */}
            <mesh
                position={[0, -1, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                receiveShadow
                castShadow
                ref={floorRef}
            >
                <planeGeometry args={[6, 6]} />
                <meshPhysicalMaterial
                    color="#181818"
                    roughness={0.6}
                    metalness={0.5}
                    clearcoat={1}
                    clearcoatRoughness={0.1}
                />
            </mesh>

            {/* Cube */}
            <mesh
                position={[0, -0.7, 0]}
                ref={cubeRef}
                castShadow
                receiveShadow
            >
                <boxGeometry args={[2, 0.4, 2]} />
                <meshPhysicalMaterial
                    color="#202020"
                    roughness={0.5}
                    metalness={0.4}
                    clearcoat={1}
                    clearcoatRoughness={0.05}
                />
            </mesh>

          {/* Glowing edges */}
          <mesh ref={cube2Ref} position={[0, 2, 0]}>
            <boxGeometry args={[1.99, 0.41, 1.99]} />
            <meshPhysicalMaterial
              color="#2b65ff"
              // wireframe
              emissive="#2b65ff"
              emissiveIntensity={1}
            />
          </mesh>
            <EffectComposer>
              <Bloom
                intensity={.2} // Adjust for glow strength
                luminanceThreshold={0.2} // Controls glow activation threshold
                luminanceSmoothing={0.5} // Softens the glow transition
              />
            </EffectComposer>
            {/* Controls for Camera Interaction */}
            <OrbitControls
                enableZoom={false}
                enableRotate={false}
                enablePan={false}
            />
        </>
    );
}

export default Room;
