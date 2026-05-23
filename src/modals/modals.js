import { selectors } from "./selectors.js";

const burgers = () => {
        selectors.burger.addEventListener('click', () => {
            selectors.burgerContent.classList.toggle('active')
            selectors.burgerNav.classList.toggle('active');
            selectors.body.classList.toggle('burger-active')
    })
}

export default burgers;