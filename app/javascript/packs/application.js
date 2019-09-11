require("turbolinks").start();
require("@rails/activestorage").start();
require("channels");
require('jquery');

import {} from 'jquery-ujs';
import "bootstrap";
import "../stylesheets/application"

document.addEventListener("turbolinks:load", () => {
    $('[data-toggle="tooltip"]').popover();
});
// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
$(function () {
    console.log('Hello World from Webpacker');
});