
$(".checkbox").click(function () {
    if (localStorage.getItem("darkmode") == 'true') {
        localStorage.setItem("darkmode", 'false')
        $("body").removeClass("dark");
    } else {
        localStorage.setItem("darkmode", 'true')
        $("body").addClass("dark")

    }
});


jQuery(function ($) {
    /*==================== Side Nav ======================*/
    $(".toggle-menu").click(function (e) {
        e.preventDefault();
        $(".nav-area").addClass("active");
        $('.click-div2').fadeIn(500);
    });
    $(".close-menu").click(function (e) {
        e.preventDefault();
        $(".nav-area").removeClass("active");
        $('.click-div2').fadeOut(500);
    });
    /*==================== Side Nav ======================*/

    /*==================== Search Bar Dropdown Show ======================*/
    $(".textbar").keyup(function () {
        $(".search_dropdown").show();
    });
    // $(".textbar").keydown(function () {
    //     $(".search_dropdown").hide();
    // });

    $("body").click(function () {
        $(".search_dropdown").hide();
    });
    /*==================== Search Bar Dropdown Show ======================*/

    /*==================== Icon Change ======================*/
    $(".change_icon").click(function (e) {
        e.preventDefault();
        $(this).find(".on-icon").toggle();
    });

    $(".inner_change_icon").click(function (e) {
        e.preventDefault();
        $(this).find(".on-icon").toggle();
    });
    /*==================== Icon Change ======================*/

    /*==================== Comments Show Hide ======================*/
    $(".open_comments").click(function (e) {
        e.preventDefault();
        $(this).parents(".body_wrapper").find(".comment-form-new").slideToggle("slow");
        $(this).parents(".video-details-body").find(".comment_sec").slideToggle("slow");
        $(this).parents(".feed-new").find(".comment_sec").slideToggle("slow");
        $(this).parents(".photo-page-body").find(".comment_sec").slideToggle("slow");
    });
    $(".total_comment_click").click(function (e) {
        e.preventDefault();
        $(this).parents(".body_wrapper").find(".total_comment_show").slideToggle();
        $(this).hide();
        $(".blog_comments").hide();
    });

    $(".open_comments_modal").click(function (e) {
        e.preventDefault();
        $(this).parents(".custom_modal").find('.comment_sec_modal').slideToggle();
    });
    /*==================== Comments Show Hide ======================*/

    /*==================== Modal Showing ======================*/
    $('.openpopup').on('click', function (e) {
        e.preventDefault();
        var popupId = $(this).attr("href");
        console.log(popupId);
        $("body").find(popupId).fadeIn();
        $('.popup_slider').slick('setPosition');
        $('body').css('overflow', 'hidden');
    });
    $('.close_modal').on('click', function (e) {
        e.preventDefault();
        $('.custom_modal').fadeOut('');
        $('body').css('overflow', 'scroll');
    });
    /*==================== Modal Showing ======================*/

    /*==================== Show Description ======================*/
    $(".showfull_description").click(function (e) {
        e.preventDefault();
        $(".full_description").slideToggle("slow");
    });
    /*==================== Show Description ======================*/

    /*==================== Show Hide Password Field ======================*/
    $('.eye-toggle').click(function () {
        if ($(this).hasClass('fa-eye-slash')) {

            $(this).removeClass('fa-eye-slash');

            $(this).addClass('fa-eye');

            $('.password').attr('type', 'text');

        } else {

            $(this).removeClass('fa-eye');

            $(this).addClass('fa-eye-slash');

            $('.password').attr('type', 'password');
        }
    });

    $('.eye-toggle2').click(function () {
        if ($(this).hasClass('fa-eye-slash')) {

            $(this).removeClass('fa-eye-slash');

            $(this).addClass('fa-eye');

            $('.confirmpassword').attr('type', 'text');

        } else {

            $(this).removeClass('fa-eye');

            $(this).addClass('fa-eye-slash');

            $('.confirmpassword').attr('type', 'password');
        }
    });
    /*==================== Show Hide Password Field ======================*/


    /*==================== Follow Button Active ======================*/
    $(".follow-active").click(function (e) {
        e.preventDefault();
        $(this).text("Followed");
        $(this).css("background-color", "#055aaf")
    });
    $(".follow-active").dblclick(function (e) {
        e.preventDefault();
        $(this).text("Follow");
        $(this).css("background-color", "#0f86ff")
    });
    /*==================== Follow Button Active ======================*/

    /*==================== Slick Slider ======================*/
    $('.single-item').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 700,
        autoplay: false,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    $('.multiple-items').slick({
        infinite: true,
        dots: true,
        arrows: true,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 620,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 380,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }
        ]
    });

    /*============== Trending Slider =============*/

    $('.trending_slider').slick({
        infinite: true,
        dots: false,
        arrows: true,
        speed: 300,
        /*autoplay: true,
        autoplaySpeed: 4000,*/
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 620,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 380,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }
        ]
    });

    /*============== Popup Slider =============*/

    $('.popup_slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 700,
        autoplay: false,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    /*==================== Slick Slider ======================*/




    $('.tab-a').click(function () {
        $(".tab").removeClass('tab-active');
        $(".tab[data-id='" + $(this).attr('data-id') + "']").addClass("tab-active");
        $(".tab-a").removeClass('active-a');
        $(this).parent().find(".tab-a").addClass('active-a');
    });

    $('.change_icon.open_comments').on('click', function () {
        $('.c-comment-area.final-comment-area').stop(true, true).slideToggle();
    });

    $(".open_comments").on("click", function(){
        $(".video-details-body .body_wrapper").toggleClass("border-bottom")
        $(".photo-page-new .body_wrapper").toggleClass("border-bottom")
    });
});











// COPY CLICK COLOR CHANGE 

$(document).ready(function () {
    $(".copy-btn2").click(function () {
        $(".copy-btn2 p").css("color", "#0f86ff"),
            $(".copy-btn2 span").css("background-position", "-22px");
        $("body.dark .copy-btn2 span").css("filter", "brightness(1)");
    });
});
$(document).ready(function () {
    $(".copy-btn3").click(function () {
        $(".copy-btn3 p").css("color", "#0f86ff"),
            $(".copy-btn3 span").css("background-position", "-25px")
    });
});



// COPY TO CLIPBOARD 

$(document).ready(function () {
    $(".copy-btn").click(function (event) {
        event.preventDefault();
        CopyToClipboard("This is a testing text when you have a link so you put it here", true, "Value copied");
    });
});

function CopyToClipboard(value, showNotification, notificationText) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(value).select();
    document.execCommand("copy");
    $temp.remove();

    if (typeof showNotification === 'undefined') {
        showNotification = true;
    }
    if (typeof notificationText === 'undefined') {
        notificationText = "Copied to clipboard";
    }

    var notificationTag = $("div.copy-notification");
    if (showNotification && notificationTag.length == 0) {
        notificationTag = $("<div/>", { "class": "copy-notification", text: notificationText });
        $("body").append(notificationTag);

        notificationTag.fadeIn("slow", function () {
            setTimeout(function () {
                notificationTag.fadeOut("slow", function () {
                    notificationTag.remove();
                });
            }, 1000);
        });
    }
}

// SEARCH BOX 


// $(document).ready(function () {
//     $(".search_box").click(function () {
//         $(this).addClass("extent-search-box");
//     });
// });


//after window is loaded completely 
//  window.onload = function(){
//     //hide the preloader
//     document.querySelector(".timeline-wrapper").style.display = "none";
// }

// SHARE BUTTON 

$(document).ready(function () {
    $(".share-btn-area .change_icon").click(function () {
        $(this).parent().toggleClass("share-active");
        $('.click-div').css('display', 'block');
    });
});
// $(document).ready(function () {
//     $(".checkbox").click(function () {
//         $("body").toggleClass("dark");
//     });
// });
// $(document).ready(function () {
//     $(".checkbox").click(function () {
//         if ($("body").hasClass("dark")) {
//             $("body").removeClass("dark")
//         } else{
//             $("body").addClass("dark")
//         }
//     });
// });
$(document).ready(function () {
    $(".click-div").click(function () {
        $(".share-btn-area").removeClass("share-active");
        $(this).hide();
    });
});
$(document).ready(function () {
    $(".click-div2").click(function () {
        $(".nav-area").removeClass("active");
        $(this).fadeOut(500);;
    });
});

$(document).ready(function () {
    $(document).scroll(function () {
        $(".share-btn-area").removeClass("share-active");
        $(this).hide();
        $('.click-div').hide();
        $('.search_dropdown').hide();

    });
});
$(document).ready(function () {
    $(document).scroll(function () {
        $(".share-box-login").removeClass("log-active");
        $(this).hide();
    });
});
$(document).ready(function () {
    $(".after-login").click(function () {
        $(".share-box-login").toggleClass("log-active");
    });
});

$(document).ready(function () {
    $("#checkbox").click(function () {
        $(".comment-arrow").toggleClass("comment-arrow2");
        $(".comment-arrow").html('<img src="images/comment-arrow.png" alt="" class="arrow-img">');
        $(".comment-arrow2").html('<img src="images/comment-arrow-dark2.png" alt="" class="arrow-img">');
        // $('.share-box').css('display', 'block')
    });
});

// CLICK ON LOG-IN BUTTON ITS CHANGE INTO ID 

// $(document).ready(function () {
//     $(".login_btn").click(function () {
//         $(this).parent().addClass("log-div-new");
//     });
// });

$(document).ready(function () {
    $(".login_btn").click(function () {
        $(".log-in-popup").delay(200).fadeIn('slow');
        $(".click-div3").delay(200).fadeIn('slow');
    });
});
$(document).ready(function () {
    $(".backlogin").click(function () {
        $(".forgotpassword-in-popup").hide();
        $(".log-in-popup").show();
    });
});
$(document).ready(function () {
    $(".haveaccount").click(function () {
        $(".signup-in-popup").hide();
    });
});
$(document).ready(function () {
    $(".signup").click(function () {
        $(".signup-in-popup").show();
        $(".click-div3").show();
    });
});
$(document).ready(function () {
    $(".forgotpassword").click(function () {
        $(".forgotpassword-in-popup").show();
        $(".click-div3").show();
        $(".log-in-popup").hide();
    });
});
// $(document).ready(function () {
//     $(".click-div3").click(function () {
//         $(".login_box").hide();
//         $(this).hide();
//     });
// });
$(document).ready(function () {
    $(".cross-icon").click(function () {
        $(".login_box").delay(500).fadeOut('slow');
        $(".click-div3").delay(500).fadeOut('slow');
    });
});

// $(document).ready(function () {
//     $(".change_icon").click(function () {
//         if ($(this).parent().hasClass("share-active")) {
//             $(this).parent().removeClass("share-active")
//         } else{
//             $(this).parent().addClass("share-active")
//         }
//     });
// });



// FORM VALIDATION 

// $(document).ready(function() {
//     $(".basic-form").validate();
//   });



// VIDEO PLAY 

// var myvideo = document.getElementById("first-video");
// var myvideo2 = document.getElementById("v-details-page-video");
// var myvideo3 = document.getElementById("b-video");
// var myvideo4 = document.getElementById("b-video2");

// function playpause(){
//     if(myvideo.paused){
//         myvideo.play();
//         document.getElementById("video-icon").style.display = "none";
//     }
//     else {
//         myvideo.pause();
//         document.getElementById("video-icon").style.display = "flex";
//         document.getElementById("video-icon").style.backgroundImage = "none";
//     }
// };

// function playpause2(){
//     if(myvideo2.paused){
//         myvideo2.play();
//         document.getElementById("video-icon2").style.display = "none";
//     }
//     else {
//         myvideo2.pause();
//         document.getElementById("video-icon2").style.display = "flex";
//         document.getElementById("video-icon2").style.backgroundImage = "none";
//     }
// };
// function playpause3(){
//     if(myvideo3.paused){
//         myvideo3.play();
//         document.getElementById("video-icon3").style.display = "none";
//     }
//     else {
//         myvideo3.pause();
//         document.getElementById("video-icon3").style.display = "flex";
//         document.getElementById("video-icon3").style.backgroundImage = "none";
//     }
// };
// function playpause4(){
//     if(myvideo4.paused){
//         myvideo4.play();
//         document.getElementById("video-icon4").style.display = "none";
//     }
//     else {
//         myvideo4.pause();
//         document.getElementById("video-icon4").style.display = "flex";
//         document.getElementById("video-icon4").style.backgroundImage = "none";
//     }
// };


// NEW SLIDER 


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var swiper = new Swiper(".mobile-swiper", {
    slidesPerView: 2,
    spaceBetween: 2,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


//   DARK MODE 

// const checkbox = document.querySelector("div .checkbox")
// let getMode = localStorage.getItem("mode");
// if (getMode && getMode === "dark") {
// body.classList.add("dark");
// toggle.classList.add("active");
// }
// // const arrow = document.getElementsByClassName("arrow-img")
// checkbox.addEventListener("click", () => {
//     document.body.classList.toggle("dark");
//     if (!body.classList.contains("dark")) {
//         return localStorage.setItem("mode", "light");
//         }
//         localStorage.setItem("mode", "dark");

//     //   document.getElementById("arrow-img").src =  "images/comment-arrow-dark2.png";
//     // document.getElementsByClassName("comment-arrow").classList.toggle("comment-arrow2")
// });



// FORWARD AND BACKWARD 

// var player = videojs('first-video', {
//     loop: true,
//     plugins: {
//         hotkeys: {
//             enableModifiersForNumbers: false,
//             seekStep: 10
//         },
//     }
//   });


// $('body').toggleClass(localStorage.toggled);

// function darkLight() {
//     /*DARK CLASS*/
//     if (localStorage.toggled != 'dark') {
//       $('body').toggleClass('dark', true);
//       localStorage.toggled = "dark";

//     } else {
//       $('body').toggleClass('dark', false);
//       localStorage.toggled = "";
//     }
//   }

//   /*Add 'checked' property to input if background == dark*/
//   $(document).ready(function () {
//     $(".checkbox").click(function () {
//         if ($("body").hasClass("dark")) {
//             $("body").removeClass("dark")
//         } else{
//             $("body").addClass("dark")
//         }
//     });
// });


// Show the first tab and hide the rest

// var darkMode;

// if (localStorage.getItem('dark-mode')) {  
//   // if dark mode is in storage, set variable with that value
//   darkMode = localStorage.getItem('dark-mode');  
// } else {  
//   // if dark mode is not in storage, set variable to 'light'
//   darkMode = 'light';  
// }


// localStorage.setItem('dark-mode', darkMode);


// if (localStorage.getItem('dark-mode') == 'dark') {
//   // if the above is 'dark' then apply .dark to the body
//   $('body').toggleClass('dark');  
// }

// $('.checkbox').on('click', function() {  
//     $('body').toggleClass('dark');  
//     localStorage.setItem('dark-mode', darkMode);
//   });

//   $('.checkbox').on('click', function() {  
//     // set stored value to 'light'
//     localStorage.setItem('dark-mode', 'light');   
//   });


// $(window).on('load', function () {
//     // Local storage theme variable presenc check
//     const current ThemeColor = localStorage.getItem('theme-color');
//     ///
//     if (currentThemeColor) {
//         // add class to body
//         $('body').addClass(current ThemeColor);
//         if (currentTheme Color === 'theme-dark') {
//              $('.checkbox').prop('checked', true);
//              $('body').addClass('dark');
//             };
//         };
// });

$('.tab-content-inner .open_comments').click(function () {
    window.location.href = 'video-details.html';
});
$('.body-new .open_comments').click(function () {
    window.open("feed.html" , "_blank");
});







function validateForm(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmpassword = document.getElementById("confirmpassword").value;
    let error = 0;

    if (name == "" || name == " ") {
        error++;
    }
    if (email == "" || email == " ") {
        error++;
    }
    if (password == "" || password == " ") {
        error++;
    }
    if (confirmpassword == "" || confirmpassword == " ") {
        error++;
    }

    if (error == 0) {
        $(".popup-right").css("display", "block");
        $(".popup-right").fadeIn(500);
        $('.popup-right').delay(1000).fadeOut('slow');
        $(".signup-in-popup").delay(1100).fadeOut('slow');
        $(".log-in-popup").delay(1100).fadeIn('slow');

    } else {
        $(".popup-wrong").css("display", "block");
        $(".popup-wrong").fadeIn(500);
        $('.popup-wrong').delay(1000).fadeOut('slow');
    }
}
function validateForm2(event) {
    event.preventDefault();
    let logemail = document.getElementById("logEmail").value;
    let logpassword = document.getElementById("logPassword").value;
    let error = 0;

    if (logemail == "" || logemail == " ") {
        error++;
    }
    if (logpassword == "" || logpassword == " ") {
        error++;
    }

    if (error == 0) {
        $(".login_box").hide();
        $(".popup-right").html('<i class="fa-solid fa-circle-check"></i> <p>Thank You So Much <span>For Log in</span></p>')
        $(".popup-right").css("display", "block");
        $(".popup-right").fadeIn(500);
        $('.popup-right').delay(1000).fadeOut('slow');
        $('.click-div3').delay(1500).fadeOut('slow');
        $(".login_btn").hide();
        $(".after-login").css("display", "flex");
        $(".log-in-div").css("padding-left", "60px");


    } else {
        $(".popup-wrong").css("display", "block");
        $(".popup-wrong").fadeIn(500);
        $('.popup-wrong').delay(1000).fadeOut('slow');
    }
}





//   $(".popup-wrong").click(function () {
//     $(".popup-wrong").fadeOut(500);
//     $(".popup-wrong").css("display", "none");
//   });
//   $(".popup-right").click(function () {
//     $(".popup-right").fadeOut(500);
//     $(".popup-right").css("display", "none");
//   });