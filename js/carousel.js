

//carousel

//Array storage class
let carouselArr = [];
const imgs = 0;
const img = 0;

//class Carousel
class Carousel {

    image;
    title;
    url;

    static Start(arr) {
        if (arr) {

            if (arr.length > 0) {
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Next(); //start
                Carousel._interval = setInterval(function () { Carousel.Next(); }, 5000);
            }

        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next() {

    }
};
