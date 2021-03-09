// Top Bar Scrolling Effect Start....

window.onscroll = setInterval((scrollFunction) => {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        document.querySelector(".top-bar").style.top = "0";
    } else {
        document.querySelector(".top-bar").style.top = "-100px";

    };
}, 2000);

// Top Bar Scrolling Effect End.


// Menu Item Effect Start.
// $(document).ready(function () {
//     $(".f-item-1").hover(function () {
//         $('.menu').css("background-color", "#8165a6");
//     }, function () {
//         $('.menu').css("background-color", "#38635a81");
//     });
//     // f-item-2
//     $(".f-item-2").hover(function () {
//         $('.menu').css("background-color", "#735ed5");
//     }, function () {
//         $('.menu').css("background-color", "#38635a81");
//     });
//     // f-item-3
//     $(".f-item-3").hover(function () {
//         $('.menu').css("background-color", "#797b7b");
//     }, function () {
//         $('.menu').css("background-color", "#38635a81");
//     });
//     // f-item-4
//     $(".f-item-4").hover(function () {
//         $('.menu').css("background-color", "#1ea2e0");
//     }, function () {
//         $('.menu').css("background-color", "#38635a81");
//     });
//     // f-item-5
//     $(".f-item-5").hover(function () {
//         $('.menu').css("background-color", "#4a90e2");
//     }, function () {
//         $('.menu').css("background-color", "#38635a81");
//     });
// });
// Menu Item Effect End.

//Typing Animation Start....
var typedIntro = new Typed('.typing-intro', {
    strings: ["Hi, I'm Mihir.", "Web Developer."],
    loop: true,
    typeSpeed: 100,
    smartBackspace: true,
    fadeOut: true,
    showCursor: true,
});
var typeDes = new Typed('.typingDes', {
    strings: ["Co Operation Is The Best Solution"],
    loop: false,
    typeSpeed: 100,
    smartBackspace: true,
    fadeOut: true,
    showCursor: true,
});
//Typing Animation End....

//Responsive Menu Bar Start......**

function menuHumberger() {
    document.getElementById("menu-items").classList.toggle("responsive");
    // let menuItm = document.getElementById("menu-items");
    // let mbtn = document.querySelector(".menu-btn");
    
    // if (menuItm.className === "menu") {
    //     menuItm.classList.add("responsive");
    //     mbtn.style.transform = "rotate(90deg)";
    //     mbtn.style.transition = "all 0.5s ease-out";
    // } else {
    //     menuItm.className = "menu";
    //     mbtn.style.transform = "none";
    // };
};
// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.menu-btn')) {

        var dropdowns = document.getElementsByClassName("menu");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('responsive')) {
                openDropdown.classList.remove('responsive');
            }
        }
    }
}
// $(document).ready(function() {
//     let $mBtn = $(".menu-btn");
//     $(".menu-btn").click(function () {
//         $(".menu").slideToggle("fast");
//     });
// })
// $(window).on("click", function (event) {
//     let $trigger = $(".menu-btn");
//     if ($trigger !== event.target && !$trigger.has(event.target).length) {
//         $(".menu").slideUp("fast");
//     }
// })

//Responsive Menu End......**


//Scrolling Effect Start....
AOS.init({

});
//Scrolling Effect End....


//our team section Start
$(document).ready(function () {
    $("#testimonial-slider").owlCarousel({
        items: 3,
        itemsDesktop: [1000, 3],
        itemsDesktopSmall: [979, 2],
        itemsTablet: [768, 2],
        itemsMobile: [650, 1],
        pagination: true,
        autoPlay: true
    });
});
//our team section end

// my gallery section start
let modal = document.getElementById("modal-content");
let capText = document.getElementById("caption");
function myGalleryFunc(imgs) {
    modal.src = imgs.src;
    capText.innerHTML = imgs.alt;
    modal.parentElement.style.display = "block";
};
// my gallery section end


//jump-button section start
window.onscroll = function myJump() {
    let jbtn = document.querySelector(".jump-btn");
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        jbtn.style.bottom = "0px";
    } else {
        jbtn.style.bottom = "-500px";
    };
};
function myJumpFunc() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};
//jump-button section End
