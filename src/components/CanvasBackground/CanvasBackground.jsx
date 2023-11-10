import React, { useCallback, useMemo } from "react";

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import particlesOptions from "./particlesOptions";

import { useSelector } from "react-redux";

function CanvasBackground() {
    const skinColor = useSelector((state) => state.theme.currentTheme);
    const option = useMemo(() => particlesOptions(skinColor), [skinColor]);

    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await container;
    }, []);

    return (
        <Particles
            canvasClassName="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={option}
        />
    );
}

export default React.memo(CanvasBackground);
