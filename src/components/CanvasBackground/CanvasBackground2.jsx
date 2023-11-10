import React, { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";

import { loadSlim } from "tsparticles-slim";
import { useSelector } from "react-redux";

import particlesOptions from "./particlesOptions";

function CanvasBackground2() {
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
            canvasClassName="tsparticles2"
            id="tsparticles2"
            init={particlesInit}
            loaded={particlesLoaded}
            options={option}
        />
    );
}

export default React.memo(CanvasBackground2);
