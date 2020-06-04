var myImage = document.getElementById("mainImage");

var imageArray = ["images/G20.jpg","images/education.jpg", "images/health.jpg", "images/military.jpg"];

var imageIndex = 0;

function changeImage() {
    myImage.setAttribute("src", imageArray[imageIndex]);
    imageIndex++;
    if (imageIndex >= imageArray.length) {
        imageIndex = 0;

    }
}

var intervalHandle = setInterval(changeImage, 2180);

myImage.onclick = function() {

    clearInterval(intervalHandle);
}

