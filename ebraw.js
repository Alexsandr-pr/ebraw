

const iconBtn = document.querySelector(".icon-menu");
const header = document.querySelector(".header");

iconBtn.addEventListener("click", ()=> {
    if(header.classList.contains("open")) {
        header.classList.remove("open");
        document.body.style.overflow = "";
    } else {
        header.classList.add("open");
        document.body.style.overflow = "hidden";
    }
});