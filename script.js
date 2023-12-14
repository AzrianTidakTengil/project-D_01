
const link = ["asset/des02.jpg", "asset/des03.jpg", "asset/des01.jpg"]
let counterlik1 = 0;
let counterlik2 = 1;
let counterlik3 = 2;
slides()
function slides() {
    const img1 = document.getElementById("i1");
    const img2 = document.getElementById("i2");
    const img3 = document.getElementById("i3");
    if (counterlik1 == 3){
        counterlik1 = 0
    };
    if (counterlik2 == 3){
        counterlik2 = 0
    };
    if (counterlik3 == 3){
        counterlik3 = 0
    };
    img1.style.backgroundImage = `url(${link[counterlik1]})`;
    img2.style.backgroundImage = `url(${link[counterlik2]})`;
    img3.style.backgroundImage = `url(${link[counterlik3]})`;
    counterlik1++;
    counterlik2++;
    counterlik3++; 
    setTimeout(slides, 4500);
}

//typewriting
var isipage2 = "Kesepian Yang Dingin";
var pisah = isipage2.split("");
var selesai;
function type(){
    if(pisah.length > 0){
        document.getElementById("type").innerHTML += pisah.shift();
    }
    else{
        document.getElementById("ini-2").innerHTML="iya"

    }
    setTimeout(type, 250);
}

type()
