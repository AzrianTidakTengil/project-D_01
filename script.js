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
var isipage2_1 = "Tunggu Sebentar..";
var isipage2_2 = "Kesepian Yang Dingin";
var pisah = isipage2_2.split("");
var selesai;
const baganKetik = document.getElementById("type")
const bagantunggu = document.getElementById("tunggu")

function beforetypebutanimation(){
    bagantunggu.innerHTML = isipage2_1;
    bagantunggu.classList.add("transisiTunggu");
    setTimeout(type,10000)
}

function type(){
    bagantunggu.innerHTML = "";
    baganKetik.classList.add("animation-2")
    if(pisah.length > 0){
        baganKetik.innerHTML += pisah.shift();
    } else{
        document.getElementById("fade-2").classList.remove("none")
        document.getElementById("fade-2").classList.add("subtext-2")
        setTimeout(nextPage02, 4000);
    }
    setTimeout(type, 250);
}

beforetypebutanimation()

//masuk ke page 3
function nextPage02(){
    document.getElementById("page2").style.backgroundColor= "rgba(0,0,0, 0%)";
    document.getElementById("page2").classList.add("change-page-2");
    document.getElementById("page3").style.display = "block"
}
