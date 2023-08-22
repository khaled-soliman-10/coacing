let header = document.querySelector("header");
let button = document.querySelector("button");
// window.scroll({
//     behavior:"smooth"
// })
window.onscroll = function () {
    if (window.scrollY >=100) {
        header.style.backgroundColor = "rgb(204 160 63 / 90%)"
    }else {
        header.style.backgroundColor = "transparent"
    }

    if (window.scrollY>=500) {
        button.style.display="block"
    }else {
        button.style.display="none"
    }
}

button.onclick = function () {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}

let divShow = document.querySelector(".show-img");
let divImg = document.querySelector(".show-img img");
let exit = document.querySelector(".show-img i");
let image = document.querySelectorAll(".result .results img");

image.forEach(img => {
    img.onclick = () => {
        divShow.style.display = "block";
        divImg.src = img.src
    }
})

exit.onclick = () => {
    divShow.style.display = "none"
}

let loader = document.getElementById("loading");

setTimeout(() => {
    loader.style.opacity = "0"
},2100)

setTimeout(() => {
    loader.style.display = "none"
},2700)