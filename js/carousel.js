

//carousel

//Array storage class
let carouselArr = [];

//class Carousel
class Carousel {

    image;
    title;
    url;

    constructor(image, title, url){
        this.image = image;
        this.title = title;
        this.url = url;
    }

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
        for(let i = 0; i < Carousel._size; i++){
            carouselArr[i];
        }
    }
}


function AddImg(carouselArr){
    let link = document.createElement("a");
    link.href = Carousel.url;
    
    let img = document.createElement("img");
    img.src = "img/" + Carousel.image;
    img.title = Carousel.title;
    
    link.textContent = img;
}

let addImage = document.getElementById('carousel');
let newImage = AddImg()


carouselArr.push(new Carousel("imagem_1.jpg","Esta é a nova Ranger Ford 2022. Verifique novidades.","lancamento.html"));
carouselArr.push(new Carousel("imagem_2.jpg","Ford a nossa história","#"));
carouselArr.push(new Carousel("imagem_3.jpg","Nova Ford Bronco Sport 2022","lancamento.html"))
console.log(carouselArr);
