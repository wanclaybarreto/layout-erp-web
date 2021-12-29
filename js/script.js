//Remoção do evento de click oriundo da tag de link no logotipo da ASN:
document.querySelector("nav ul li:nth-child(1) a").addEventListener("click", (e) => {
    e.preventDefault();
});



//Menu toggle:
document.querySelector(".toggle").addEventListener("click", toggleMenu);

function toggleMenu() {
    document.querySelector(".toggle").classList.toggle("active");
    document.querySelector("nav").classList.toggle("active");
    document.querySelector(".main").classList.toggle("active");

    if (!document.querySelector(".toggle").classList.contains("active")) {
        closeSubMenus();
    }

    if (document.querySelector("nav ul li.withSubmenu .submenu li.active")) {
        document.querySelector("nav ul li.withSubmenu .submenu li.active").click();
        document.querySelector("nav ul li.withSubmenu .submenu li.active").closest("li.withSubmenu").querySelector("a > img").classList.add("toSpin");
    }
}

//Submenu
document.querySelectorAll("nav ul li.withSubmenu").forEach((itemMenu) => {
    itemMenu.addEventListener("click", () => {
        if (itemMenu.querySelector(".submenu").style.height != '') {
            itemMenu.querySelector(".submenu").style.height = '';
        } else if (document.querySelector("nav").classList.contains("active")) {
            itemMenu.querySelector(".submenu").style.height =
                (itemMenu.querySelectorAll(".submenu li").length *
                itemMenu.querySelectorAll(".submenu li")[0].offsetHeight) +
                'px';
        }
        
        if (document.querySelector("nav").classList.contains("active")) {
            itemMenu.querySelector("a > img").classList.toggle("toSpin");
        }
    });
});

emphasisSubmenuSelected();

function closeSubMenus() {
    document.querySelectorAll("nav ul li.withSubmenu .submenu").forEach((submenu) => {
        submenu.style.height = '';
    });

    document.querySelectorAll("nav ul li.withSubmenu a > img").forEach((arrow) => {
        arrow.classList.remove("toSpin");
    });
}

function emphasisSubmenuSelected() {
    if (window.innerWidth > 769 && document.querySelector("nav ul li.withSubmenu .submenu li.active")) {
        toggleMenu();
        //document.querySelector("nav ul li.withSubmenu .submenu li.active").click();
    }
}