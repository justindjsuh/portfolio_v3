import { useThree } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Cube } from "../components/cube";

export const Scene = () => {
    const { size, viewport } = useThree();

    const x = viewport.width * 0.67 - viewport.width / 2;
    const y = viewport.height / 2 - viewport.height * 0.35;

    // const lightRef = useRef<PointLight>(null!);
    // useHelper(lightRef, PointLightHelper, 1);

    return (
        <>
            {/* Ambient light for overall illumination */}
            <ambientLight intensity={0.1} />
            <pointLight
                position={[5, 3, 0]}
                intensity={1000}
                decay={3} // Controls how fast light diminishes
                castShadow
            />
            <pointLight
                position={[-5, 2, 0]}
                intensity={550}
                decay={2.8} // Controls how fast light diminishes
                castShadow
            />
            <pointLight
                position={[-2, -5, 0]}
                intensity={250}
                decay={4} // Controls how fast light diminishes
                castShadow
            />
            <Text
                font="/fonts/Poppins-Medium.ttf"
                position={[x, y, 0]}
                rotation={[0, 0, Math.PI * 1.5]}
                fontSize={
                    size.width < 1199 ? 1.5 : size.width < 768 ? 1.8 : 2.5
                }
                color="white"
                anchorX="center"
                anchorY="middle"
            >
                JS
            </Text>
            <EffectComposer>
                <Bloom
                    intensity={1}
                    luminanceThreshold={0.6}
                    luminanceSmoothing={0.5}
                />
            </EffectComposer>

            {/* Four large cubes placed at the corners */}
            {/* Top Left */}
            <Cube
                position={[-10, 11, -5]}
                size={8}
                hRotation={6}
                vRotation={4}
                xPosFloat={0.2}
                yPosFloat={0.2}
            />
            {/* Top Right */}
            <Cube
                position={[8, 11, -5]}
                size={8}
                hRotation={3}
                vRotation={4}
                xPosFloat={0.06}
                yPosFloat={0.06}
            />
            {/* Bottom Left */}
            <Cube
                position={[-13, -8, -5]}
                size={12}
                hRotation={10}
                vRotation={8.3}
                xPosFloat={0.1}
                yPosFloat={0.1}
                reverse
            />
            {/* Bottom Right */}
            <Cube
                position={[10, -8, -5]}
                size={12}
                hRotation={3.5}
                vRotation={1.2}
                xRotation={1.5}
                xPosFloat={0.05}
                yPosFloat={0.05}
                reverse
            />

            {/* Four small cubes placed in between */}
            {/* Top Middle */}
            <Cube
                position={[0, 6, -5]}
                size={1}
                hRotation={3}
                vRotation={6}
                xPosFloat={0.04}
                yPosFloat={0.04}
                rotationTimeMultiplier={0.3}
                rotationMultiplier={0.1}
            />
            {/* Right */}
            <Cube
                position={[10, 3, -5]}
                size={1}
                hRotation={1.4}
                vRotation={3.1}
                xRotation={2}
                xPosFloat={0.04}
                yPosFloat={0.04}
                rotationTimeMultiplier={0.3}
                rotationMultiplier={0.1}
                reverse
            />
            {/* Left */}
            <Cube
                position={[-4, 3, -5]}
                size={1}
                hRotation={6}
                vRotation={6}
                xPosFloat={0.04}
                yPosFloat={0.04}
                rotationMultiplier={0.1}
                rotationTimeMultiplier={0.3}
                reverse
            />
            {/* Bottom Middle */}
            <Cube
                position={[-1, -3, -5]}
                size={1}
                hRotation={2.6}
                vRotation={5.5}
                xPosFloat={0.04}
                yPosFloat={0.04}
                rotationTimeMultiplier={0.3}
                rotationMultiplier={0.1}
            />
            {/* <TexturedCube /> */}
        </>
    );
};
