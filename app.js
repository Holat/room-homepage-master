const displayBox = [
        {
            id : 0,
            imageM: "./images/mobile-image-hero-1.jpg",
            imageD: "./images/desktop-image-hero-1.jpg",
            head : "Discover innovative ways to decorate",
            text : "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",

        },
        {
            id : 1,
            imageM: "./images/mobile-image-hero-2.jpg",
            imageD: "./images/desktop-image-hero-2.jpg",
            head : "We are available all across the globe",
            text : "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",

        },
        {
            id : 2,
            imageM: "./images/mobile-image-hero-3.jpg",
            imageD: "./images/desktop-image-hero-3.jpg",
            head : "Manufactured with the best materials",
            text : "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",

        },
    ];
const navBar = document.querySelector(".nav");
const toggles = document.querySelectorAll(".toggle");
const back = document.querySelector(".back");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const title = document.querySelector(".title");
const text = document.querySelector(".text");
const imgM = document.querySelector(".mobile");
const imgD = document.querySelector(".desktop");
let i = 0;


toggles.forEach(toggle =>{
    toggle.addEventListener("click", (e) => {
       if (e.currentTarget.className == "toggle open")
       {
           navBar.classList.add("nav-toggle");
           back.style.transform = "translateY(0)";
       }
        else
        {
            navBar.classList.remove("nav-toggle");
            back.style.transform = "translateY(-100%)";
        }
    })
});

function slider(){
    imgM.src = displayBox[i]["imageM"];
    imgD.src = displayBox[i]["imageD"];
    title.textContent = displayBox[i]["head"];
    text.textContent = displayBox[i]["text"];
}

prev.addEventListener("click", () => {
    i > 0 ? i-- : i = (displayBox.length - 1);
    slider(i);
})

next.addEventListener("click", () => {
    i < (displayBox.length - 1) ? i++ : i = 0;
    slider(i)
});