import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Cube } from "../cube";
import { PointLight, PointLightHelper } from "three";
import { useRef } from "react";
import { useHelper } from "@react-three/drei";

export const LandingScene = () => {
    const lightRef = useRef<PointLight>(null!);
    useHelper(lightRef, PointLightHelper, 1);

    return (
        <>
            {/* Ambient light for overall illumination */}
            <ambientLight intensity={1} />
            <pointLight
                position={[0, 0, 10]}
                intensity={10}
                decay={0}
                ref={lightRef}
                // color="#101010"
            />
            <EffectComposer>
                <Bloom
                    intensity={1}
                    luminanceThreshold={0.6}
                    luminanceSmoothing={0.5}
                />
            </EffectComposer>

            {/* One big cube in the middle */}
            {/* Top Left */}
            <Cube
                position={[0, 0, 0]}
                size={8}
                hRotation={6}
                vRotation={4}
                xPosFloat={0.1}
                yPosFloat={0.1}
                rotationTimeMultiplier={0.3}
                rotationMultiplier={0.05}
                color="#5259A6"
            />

            {/* Four small cubes placed in between */}
            {/* Top Left */}
            <Cube
                position={[-8, 8, 0]}
                size={1}
                hRotation={3}
                vRotation={6}
                xPosFloat={0.08}
                yPosFloat={0.08}
                rotationTimeMultiplier={0.5}
                rotationMultiplier={0.2}
                color="#101010"
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
                rotationTimeMultiplier={0.5}
                rotationMultiplier={0.2}
                reverse
                color="#101010"
            />
            {/* Bottom Left */}
            <Cube
                position={[-12, -3, -5]}
                size={1}
                hRotation={6}
                vRotation={6}
                xPosFloat={0.04}
                yPosFloat={0.04}
                rotationMultiplier={0.2}
                rotationTimeMultiplier={0.3}
                reverse
                color="#101010"
            />
            {/* Bottom Right */}
            <Cube
                position={[13, -3, -5]}
                size={1}
                hRotation={2.6}
                vRotation={5.5}
                xPosFloat={0.04}
                yPosFloat={0.04}
                rotationTimeMultiplier={0.3}
                rotationMultiplier={0.2}
                color="#101010"
            />
            {/* <TexturedCube /> */}
        </>
    );
};
