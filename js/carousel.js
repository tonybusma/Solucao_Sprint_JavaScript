

//carousel

//Array storage class
let carouselArr = [];

//class Carousel
class Carousel {

    image;
    title;
    url;

    constructor(image, title, url) {
        this.image = image;
        this.title = title;
        this.url = url;
    }

    static createElements(){

        // Creating the elements link and img
        this.linkElement = document.createElement("a");
        this.imgElement = document.createElement("img");
    
        // Taking the html elements
        this.carouselElement = document.getElementById('carousel');
        this.carouselTitleElement = document.getElementById('carousel-title');
    
        // Adding the elements created in the 'carousel' and 'carousel-title'
        this.carouselElement.appendChild(this.imgElement);
        this.carouselTitleElement.appendChild(this.linkElement);
    }

    static Start(arr) {
        if (arr) {

            if (arr.length > 0) {
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.createElements();
                Carousel.Next(); //start
                Carousel._interval = setInterval(function () { Carousel.Next(); }, 2000);
            }

        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next() {
        let index = this._sequence++ % this._size;
        this.linkElement.href = carouselArr[index].url;
        this.linkElement.textContent = carouselArr[index].title;
        this.imgElement.src = "img/" + carouselArr[index].image;
        
        // Applying style to the img element
        this.imgElement.style.width = '500px';
        this.imgElement.style.height = '300px';
        this.imgElement.style.display = 'block';
        this.imgElement.style.margin = '0px auto';
    }
}