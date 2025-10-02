const form = document.querySelector(".form");
const input = document.querySelector(".form input");
const button = document.querySelector(".form button")
import getImagesByQuery from "./js/pixabay-api.js";
import { showLoader } from "./js/render-functions.js";


form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (input.value.trim() === "") {
        alert("The field cannot be empty");
        return;
    };

    showLoader();
    getImagesByQuery(input.value);
});