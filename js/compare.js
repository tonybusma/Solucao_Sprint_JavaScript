
//car
let carArr = [];

class Car {
    nome;
    preco;
    alturaCacamba;
    alturaVeiculo;
    alturaSolo;
    capacidadeCarga;
    motor;
    potencia;
    volumeCacamba;
    roda;
    image;

    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image) {
        this.nome = nome;
        this.preco = preco;
        this.alturaCacamba = alturaCacamba;
        this.alturaVeiculo = alturaVeiculo;
        this.alturaSolo = alturaSolo;
        this.capacidadeCarga = capacidadeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeCacamba = volumeCacamba;
        this.roda = roda;
        this.image = image;
    }
}

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].nome === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {

    if (carClass instanceof Car) {
        if (el.checked) {
            carArr.push(carClass);
        } else {
            carArr = carArr.filter(object => { return object.nome !== carClass.nome });
        }
    } else {
        throw "You need set a Car Class";
    }


}

function ShowCompare() {
    if (carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare() {
    document.getElementById("compare").style.display = "none";
}

// Creates element img
let img0 = document.createElement("img");
let img1 = document.createElement("img");

function UpdateCompareTable() {
    
    // Adds and adjusts image
    let tdImage0 = document.getElementById('compare_image_0');
    tdImage0.appendChild(img0);
    img0.src = carArr[0].image;
    img0.style.maxWidth = '100%';
    let tdImage1 = document.getElementById('compare_image_1');
    tdImage1.appendChild(img1);
    img1.src = carArr[1].image;
    img1.style.maxWidth = '100%';

    // Gets and adds the data in the elements
    for(let i = 0; i < 2; i++){

    let tdModelo = document.getElementById('compare_modelo_' + i);
    let tdAlturaCacamba = document.getElementById('compare_alturacacamba_' + i);
    let tdAlturaVeiculo = document.getElementById('compare_alturaveiculo_' + i);
    let tdAlturaSolo = document.getElementById('compare_alturasolo_' + i);
    let tdCapacidadeCarga = document.getElementById('compare_capacidadecarga_' + i);
    let tdMotor = document.getElementById('compare_motor_' + i);
    let tdPotencia = document.getElementById('compare_potencia_' + i);
    let tdVolumeCacamba = document.getElementById('compare_volumecacamba_' + i);
    let tdRoda = document.getElementById('compare_roda_' + i);
    let tdPreco = document.getElementById('compare_preco_' + i);

    tdModelo.textContent = carArr[i].nome;
    tdAlturaCacamba.textContent = carArr[i].alturaCacamba;
    tdAlturaVeiculo.textContent = carArr[i].alturaVeiculo;
    tdAlturaSolo.textContent = carArr[i].alturaSolo;
    tdCapacidadeCarga.textContent = carArr[i].capacidadeCarga;
    tdMotor.textContent = carArr[i].motor;
    tdPotencia.textContent = carArr[i].potencia;
    tdVolumeCacamba.textContent = carArr[i].volumeCacamba;
    tdRoda.textContent = carArr[i].roda;
    tdPreco.textContent = carArr[i].preco;
    }
   
}


