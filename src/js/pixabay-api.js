import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import axios from "axios";

import { createGallery, clearGallery, hideLoader } from "./render-functions.js";

export default function getImagesByQuery(query) {
    axios.get("https://pixabay.com/api/", {
        params: {
            key: "36689321-8b59aad86c27c2e69221e9297",
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: "true"
        }
    })
        .then(response => {
            if (response.data.hits.length === 0) {
                clearGallery();
                hideLoader();
                iziToast.error({
                  title: '',
                  message: 'Sorry, there are no images matching your search query. Please try again!',
                  position: "topRight"
                });
            } else {
                clearGallery();
                createGallery(response.data.hits);
                hideLoader();
            };
        })
        .catch(error => {
            console.log(error);
    })
};