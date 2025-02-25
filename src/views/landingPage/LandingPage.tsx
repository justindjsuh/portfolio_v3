import { Canvas } from "@react-three/fiber";
import { Scene } from "../../components/scene";
import "./LandingPage.css";

export default function LandingPage() {
    return (
        <div className="landingContainer">
            <Canvas
                style={{
                    width: "100vw",
                    height: "100vh",
                    background: "transparent",
                    position: "relative",
                }}
                camera={{ position: [0, 0, 20], fov: 50 }}
                shadows
            >
                <Scene />
            </Canvas>
            <div className="landingContentContainer">
                <div className="landingContent">
                    <h1>JUSTIN SUH</h1>
                    <p className="position">
                        SOFTWARE ENGINEER, FULL-STACK WEB DEVELOPER.
                    </p>
                    <p className="summary">
                        I create products that are as stunning as they are
                        seamless, elevating user experience.
                    </p>
                    <div className="socials">
                        <a>LinkedIn</a>
                        <a>GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
