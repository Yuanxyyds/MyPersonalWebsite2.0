function FadeIn() {
    const elements = document.querySelectorAll(".fade-in");

    elements.forEach((element) => {
        const position = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementTopToViewBottom = windowHeight - position.top;
        const ViewTopToElementBottom = position.bottom;

        let opacity = 0;
        const transitionDistance = windowHeight / 4;

        if (elementTopToViewBottom >= 0 && ViewTopToElementBottom >= 0) {
            if (elementTopToViewBottom <= transitionDistance) {
                opacity = Math.pow(elementTopToViewBottom / transitionDistance, 2);
            } else if (ViewTopToElementBottom <= transitionDistance) {
                opacity = Math.pow(ViewTopToElementBottom / transitionDistance, 2);
            } else {
                opacity = 1
            }
        }

        // Set the opacity
        element.style.opacity = opacity;
    });
}
export default FadeIn;