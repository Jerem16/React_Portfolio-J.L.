import { scroller } from "react-scroll";

export const scrollConfig = {
    offset: -70, // Ajustez l'offset comme nécessaire
    duration: 500, // Durée de l'animation de défilement
    smooth: true, // Activation du défilement fluide
};

export const scrollTo = (element) => {
    scroller.scrollTo(element, {
        ...scrollConfig,
        ignoreCancelEvents: true,
    });
};
