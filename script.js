/*
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
*/
//typewriting
var isipage2_1 = "Tunggu Sebentar..";
var isipage2_2 = "Kesepian Yang Dingin";
var pisah = isipage2_2.split("");
var selesai;
const baganKetik = document.getElementById("type")

function beforetypebutanimation(){
    baganKetik.innerHTML = isipage2_1;
    baganKetik.classList.add("transisiTunggu")
}

function type(){
    baganKetik.classList.remove("transisiTunggu")

    if(pisah.length > 0){
        baganKetik.innerHTML += pisah.shift();
    } else{
        document.getElementById("fade-2").classList.remove("none")
        document.getElementById("fade-2").classList.add("subtext-2")
    }
    setTimeout(type, 250);
}

beforetypebutanimation()




