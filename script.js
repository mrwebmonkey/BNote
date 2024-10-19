var select = document.querySelector("select");
var caContent = document.querySelector(".caContent");
var wdContent = document.querySelector(".wdContent");

select.addEventListener("change",function () {
    if(select.selectedIndex==1) {
        wdContent.style.display = "none";
        caContent.style.display = "flex";
    }else {
        caContent.style.display = "none";
        wdContent.style.display = "flex";
    }
})



