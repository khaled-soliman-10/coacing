let home = document.getElementById("landing");
let training = document.getElementById("training");
let about = document.getElementById("about-me");
let testimonials = document.getElementById("testimonials");
let result = document.getElementById("result");
let contact = document.getElementById("contact");

let links = document.querySelectorAll("header ul li a");

let header = document.querySelector("header");
let button = document.querySelector("button");

if (window.scrollY >= home.offsetTop) {
    links[0].style.color="var(--head-color)";
} else {
    links[0].style.color="#ddd";
}

window.onscroll = function () {
    if (window.scrollY >=100) {
        header.style.backgroundColor = "rgb(41,41,41,.9)"
        header.style.boxShadow = "0 0 5px 0 white"
    }else {
        header.style.backgroundColor = "transparent"
        header.style.boxShadow = "none"
    }

    if (window.scrollY>=500) {
        button.style.display="block"
    }else {
        button.style.display="none"
    }

     //home
    if (window.scrollY >= home.offsetTop) {
        links[0].style.color="var(--head-color)";
    } else {
        links[0].style.color="#ddd";
    }
    //training
    if (window.scrollY >= training.offsetTop - 100) {
        links[1].style.color="var(--head-color)";
        links[0].style.color="#ddd";
    } else {
        links[1].style.color="#ddd";
    }
    //about
    if (window.scrollY >= about.offsetTop - 100) {
        links[1].style.color="#ddd";
        links[2].style.color="var(--head-color)";
    } else {
        links[2].style.color="#ddd";
    }
    //testimonials
    if (window.scrollY >= testimonials.offsetTop - 100) {
        links[2].style.color="#ddd";
        links[3].style.color="var(--head-color)";
    } else {
        links[3].style.color="#ddd";
    }
    //result
    if (window.scrollY >= result.offsetTop - 100) {
        links[3].style.color="#ddd";
        links[4].style.color="var(--head-color)";
    } else {
        links[4].style.color="#ddd";
    }
    //contact
    if (window.scrollY >= contact.offsetTop - 300) {
        links[4].style.color="#ddd";
        links[5].style.color="var(--head-color)";
    } else {
        links[5].style.color="#ddd";
    }
}

button.onclick = function () {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}

button.oncl

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

