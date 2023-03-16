import Swiper from 'swiper/bundle';
import { Fancybox } from "@fancyapps/ui";

import Inputmask from "inputmask/dist/inputmask.es6.js";

// import NiceSelect from 'nice-select2/src/js/nice-select2.js';
// global.NiceSelect = NiceSelect;

document.addEventListener('DOMContentLoaded', () => {

    var selector = document.querySelectorAll(".form__input_tel");

    var im = new Inputmask("+7 (999) 999 99 99");
    im.mask(selector);

    new Swiper(".docs-slider", {
        spaceBetween: 40,
        loop: true,
        slidesPerView: "auto",
        centeredSlides: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        breakpoints: {
            320: {
                slidesPerView: "auto",
                centeredSlides: true,
                spaceBetween: 10
            },
            992: {
                spaceBetween: 40,
                loop: true,
                centeredSlides: true,
            }
        }
    });


    var toggler = document.querySelector(".menu-toggler");
	toggler.addEventListener("click",function(e){
		document.body.classList.toggle('menu-openned');
	}, false);

});
