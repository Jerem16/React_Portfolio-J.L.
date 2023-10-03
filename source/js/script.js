// var typed = new Typed(".typing", {
//     strings: [
//         "",
//         "Web Designer",
//         "Web Developer",
//         "Graphique Designer",
//         "Web Integrator",
//     ],
//     typeSpeed: 120,
//     backSpeed: 60,
//     loop: true,
// });

// const navLinks = document.querySelectorAll(".nav a[data-target]");

// function updateActiveLink() {
//     const scrollPosition = window.scrollY;

//     navLinks.forEach((link) => {
//         const targetId = link.getAttribute("data-target");
//         const targetSection = document.getElementById(targetId);

//         if (
//             targetSection &&
//             targetSection.offsetTop <= scrollPosition &&
//             targetSection.offsetTop + targetSection.offsetHeight >
//                 scrollPosition
//         ) {
//             navLinks.forEach((navLink) => {
//                 navLink.classList.remove("active-link");
//             });

//             link.classList.add("active-link");
//         }
//     });
// }

// window.addEventListener("scroll", updateActiveLink);

// updateActiveLink();

// navLinks.forEach((link) => {
//     link.addEventListener("click", (event) => {
//         event.preventDefault();
//         const targetId = link.getAttribute("data-target");
//         const targetSection = document.getElementById(targetId);

//         if (targetSection) {
//             window.scrollTo({
//                 top: targetSection.offsetTop,
//                 behavior: "smooth",
//             });
//         }
//     });
// });

// window.addEventListener("hashchange", () => {
//     const currentHash = window.location.hash;

//     navLinks.forEach((navLink) => {
//         navLink.classList.remove("active-link");
//     });

//     const matchingLink = document.querySelector(
//         `.nav a[data-target="${currentHash.slice(1)}"]`
//     );
//     if (matchingLink) {
//         matchingLink.classList.add("active-link");
//     }
// });
// function updateActiveLink() {
//     const scrollPosition = window.scrollY + 120; // Ajoutez 120 pixels au défilement

//     navLinks.forEach((link) => {
//         const targetId = link.getAttribute("data-target");
//         const targetSection = document.getElementById(targetId);

//         if (
//             targetSection &&
//             targetSection.offsetTop <= scrollPosition &&
//             targetSection.offsetTop + targetSection.offsetHeight >
//                 scrollPosition
//         ) {
//             navLinks.forEach((navLink) => {
//                 navLink.classList.remove("active-link");
//             });

//             link.classList.add("active-link");
//         }
//     });
// }

// const navTogglerbtn = document.querySelector(".nav-toggler"),
//     aside = document.querySelector(".aside"),
//     section = document.querySelector(".main-content");

// navTogglerbtn.addEventListener("click", () => {
//     asideSectionTogglerBtn();
// });
// function asideSectionTogglerBtn() {
//     aside.classList.toggle("open");
//     section.classList.toggle("open");
//     navTogglerbtn.classList.toggle("open");
// }
