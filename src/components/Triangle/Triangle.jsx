import React, { Component } from "react";
import CanvasBackground from "../CanvasBackground/CanvasBackground";

class IsoscelesTriangle extends Component {
    componentDidMount() {
        // Créez un élément div pour le triangle
        const triangle = document.createElement("div");

        // Ajoutez une classe CSS pour le triangle
        triangle.classList.add("triangle");

        // Calculez la hauteur du triangle en utilisant le théorème de Pythagore
        const base = 200; // Base en px
        const cote = 100; // Côté en px
        const hauteur = Math.sqrt(Math.pow(cote, 2) - Math.pow(base / 2, 2));

        // Appliquez les dimensions au triangle
        triangle.style.width = `${base}px`;
        triangle.style.height = `${hauteur}px`;

        // Appliquez la couleur de remplissage au triangle
        triangle.style.backgroundColor = "red"; // Couleur de remplissage souhaitée

        // Ajoutez le triangle au DOM
        this.container.appendChild(triangle);
    }

    render() {
        return (
            <div>
                <div ref={(el) => (this.container = el)}></div>
            </div>
        );
    }
}

export default IsoscelesTriangle;
