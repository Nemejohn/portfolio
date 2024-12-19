const menu_container = document.getElementById("menu_container");
const menu_close = document.getElementById("close");
const menu_open = document.getElementById("menu");

    function openmenu(){
        menu_container.style.opacity = "1"
        menu_container.style.clipPath = "circle(100%)"
    }

    function closemenu(){
        menu_container.style.opacity = "0.8"
        menu_container.style.clipPath = "circle(0% at 0 0)"
    }

    function list(){
        menu_container.style.opacity = "0.8"
        menu_container.style.clipPath = "circle(0% at 0 0)"
    }

    