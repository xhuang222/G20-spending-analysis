var my_image = document.getElementById("mainImage");

var image_array = ["images/G20.jpg","images/education.jpg", "images/health.jpg", "images/military.jpg"];

var image_index = 0;

function change_image() {
    my_image.setAttribute("src", image_array[image_index]);
    image_index++;
    if (image_index >= image_array.length) {
        image_index = 0;

    }
}

var interval_handle = setInterval(change_image, 2180);

my_image.onclick = function() {

    clearInterval(interval_handle);
}

