import React, { useEffect, useRef } from "react";
import { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useSelector } from "react-redux";

function CanvasBackground() {
    const skinColor = useSelector((state) => state.theme.currentTheme);

    const option = useMemo(() => {
        return {
            fullScreen: false,

            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                    resize: true,
                },
                modes: {
                    push: {
                        quantity: 3,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: skinColor,
                },
                links: {
                    color: skinColor,
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 6,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
            detectRetina: true,
        };
    });
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {      
    }, []);

    return (
        <Particles
            canvasClassName="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={option}
            style={{
                maxWidth: "100%",
                // clipPath: "polygon(50% 0, 100% 0, 100% 100%)",
                // transform: "rotate(45deg)",
            }}
        />
    );
}

export default CanvasBackground;
