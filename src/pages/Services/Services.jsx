import CanvasBackground from "../../components/CanvasBackground/CanvasBackground";
import "./services.scss";
import ParticleNetwork from "../../components/02-Profile/Profile";
import particule from "../../components/CanvasBackground/particule";

function Services() {
    return (
        <main className="main-content">
            {/* <CanvasBackground /> */}
            <canvas id="canvas">
                <CanvasBackground />
            </canvas>
        </main>
    );
}

export default Services;