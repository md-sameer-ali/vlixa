
$(".checkbox").click(function () {
    if (localStorage.getItem("darkmode") == 'true') {
        localStorage.setItem("darkmode", 'false')
        $("body").removeClass("dark");
    } else {
        localStorage.setItem("darkmode", 'true')
        $("body").addClass("dark")

    }
});

jQuery(function($){
    $(document).ajaxSend(function() {
      $("#overlay").fadeIn(300);
    });
      
    $('#load1').click(function(){
      $.ajax({
        type: 'GET',
        success: function(data){
          console.log(data);
        }
      }).done(function() {
        setTimeout(function(){
          $("#overlay").fadeOut(300);
        },300);
      });
    }); 
  });
jQuery(function($){
    $(document).ajaxSend(function() {
      $("#overlay1").fadeIn(300);
    });
      
    $('#load2').click(function(){
      $.ajax({
        type: 'GET',
        success: function(data){
          console.log(data);
        }
      }).done(function() {
        setTimeout(function(){
          $("#overlay1").fadeOut(300);
        },300);
      });
    }); 
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
        $(this).toggleClass("change-on");
    });

    $(".inner_change_icon").click(function (e) {
        e.preventDefault();
        $(this).find(".on-icon").toggle();
        $(this).toggleClass("change-on");
    });
    /*==================== Icon Change ======================*/

    /*==================== Comments Show Hide ======================*/
    $(".open_comments").click(function (e) {
        e.preventDefault();
        $(this).parents(".body-wrapper-new").find(".comment-form-new").slideToggle("slow");
        $(this).parents(".body-wrapper-new").find(".comment_sec").slideToggle("slow");
        $(this).parents(".video-page .body_wrapper").find(".comment-form-new").slideToggle("slow");
        $(this).parents(".video-page .body_wrapper").find(".comment_sec").slideToggle("slow");
        $(this).parents(".video-details-body").find(".comment_sec").slideToggle("slow");
        $(this).parents(".video-details-body").find(".comment-form-new").slideToggle("slow");
        $(this).parents(".photo-page-body").find(".comment_sec").slideToggle("slow");
        $(this).parents(".photo-page-body").find(".comment-form-new").slideToggle("slow");
    });
    $(".total_comment_click").click(function (e) {
        e.preventDefault();
        $(this).parents(".body_wrapper").find(".total_comment_show").slideToggle('slow');
        $(this).hide();
        $(".blog_comments").fadeOut();
        $(".total_comment_click2").show();
    });
    $(".total_comment_click2").click(function (e) {
        $(".total_comment_click").fadeIn();
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
        $(".view-all").toggle();
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
        $('.follow').toggle();
        $('.followed').toggle();
        $(this).toggleClass('followed-on');
    });
    $(".trend-btn").click(function (e) {
        e.preventDefault();
        $(this).find('.flw-on').toggle();
        $(this).find('.flwed').toggle();
        $(this).parent().find(".trend-btn").toggleClass('flw-active');
    });




    $('.tab-a').click(function () {
        $(".tab").removeClass('tab-active');
        $(".tab[data-id='" + $(this).attr('data-id') + "']").addClass("tab-active");
        $(".tab-a").removeClass('active-a');
        $(this).parent().find(".tab-a").addClass('active-a');
    });

    $('.change_icon.open_comments').on('click', function () {
        $('.c-comment-area.final-comment-area').stop(true, true).slideToggle();
    });

    $(".open_comments").on("click", function () {
        $(".video-details-body .body_wrapper").toggleClass("border-bottom");
        $(".photo-page-new .body_wrapper").toggleClass("border-bottom");
        $(".feed-wrapper").toggleClass("border-bottom");
        $(this).parents(".body-wrapper-new").toggleClass("border-bottom");
    });
    $(".like-count-main , .mark2").on("click" , function(e){
        e.preventDefault();
        $(this).find(".b-unactive").toggle();
        $(this).find(".b-active").toggle();

    })
    // $(".login_btn").html('<img src="images/login-icon-new.png" alt="img"> <span>Log in</span>')




    $(".up-arrow").on("click", function () {
        $(this).find(".on-icon").toggle();
        $(this).toggleClass("on");
        $(this).parent().find(".on-icon2").hide();
        $(this).parent().find(".down-arrow").removeClass("on");
    });
    $(".down-arrow").on("click", function () {
        $(this).find(".on-icon2").toggle();
        $(this).toggleClass("on");
        $(this).parent().find(".on-icon1").hide();
        $(this).parent().find(".up-arrow").removeClass("on");
    });

    // FILTER AREA 

    $('.click-dropdown2').on('click' , function(){
        $('.dropdown-menu').toggle();
        $('.click-div-only-for-filter').show();
    });
    $(document).on('scroll' , function(){
        $('.dropdown-menu').hide();
        $('.click-div-only-for-filter').hide();
    });
    $('.click-div-only-for-filter').on('click' , function(){
        $(this).hide();
        $('.dropdown-menu').hide();
    });
    
    var path = window.location.href; 
    // because the 'href' property of the DOM element is the absolute path
    $('.nav ul a').each(function() {
      if (this.href === path) {
        $(this).addClass('active-page');
      }
    });
    $('.cut-popup , .cut-popup3').on( "click" , function(){
        $('.gallery-popup').fadeOut();
    });
    $('.cut-popup2').on( "click" , function(){
        $('.zoom-img-popup').fadeOut();
    });
    $('.gallery-open').on( "click" , function(e){
        e.preventDefault();
        $('.gallery-popup').fadeIn();
    });
    $('.new-single').on( "click" , function(e){
        e.preventDefault();
        $('.gallery-popup').fadeIn();
    });
    $('.zoom').on( "click" , function(){
        $('.zoom-img-popup').fadeIn();
    });
    $('.zoom-img-popup').on( "click" , function(){
        $('.zoom-img-popup').fadeOut();
    });
    // $('.repo-dot').on( "click" , function(e){
    //     e.preventDefault();
    //     $('.repo-dropdown').toggle();
    //     $('.click-div').toggle();
    // });
    $('.zoom-img-popup').on( "click" , function(){
        $('.zoom-img-popup').fadeOut();
    });
    $('.repo-dot').on( "click" , function(e){
        e.preventDefault();
        $('.report-in-popup').fadeIn();
        $('.click-div3').fadeIn();
    });
    $('.repo-input-area select').on( "click" , function(){
        $(this).css('color' , '#3c3c3c');
    });
    $('.image-box').on( "click" , function(){
        $('.gallery-slider-area').fadeIn();
    });
    $('.mob-cut').on( "click" , function(){
        $('.gallery-slider-area').fadeOut();
    });


    // $('.blog-swipe').on('mouseout' , function(){
    //     $('.arrow-left').toggle();
    // })

    // $("img").lazyload({
    //     effect : "fadeIn"
    // });
});

$(document).ready(function(){
        // Show the first tab and hide the rest
        $('#tabs-nav li:first-child').addClass('active');
        $('.tab-content-blog').hide();
        $('.tab-content-blog:first').show();
    
        // Click function
        $('#tabs-nav li').click(function(){
        $('#tabs-nav li').removeClass('active');
        $(this).addClass('active');
        $('.tab-content-blog').hide();
      
        var activeTab = $(this).find('a').attr('href');
        $(activeTab).fadeIn();
        return false;
       });

       
});


// COPY CLICK COLOR CHANGE 

$(document).ready(function () {
    $(".copy-btn2").click(function () {
        $(this).parent().find('.copy-btn2').addClass('copy-active');
        // $(".copy-btn2 p").css("color", "#0f86ff"),
        //     $(".copy-btn2 span").css("background-position", "-22px");
        // $("body.dark .copy-btn2 span").css("filter", "brightness(1)");
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


    $('.dots').on('click' , function(){
        $(this).parent().find('.share-box').toggleClass('dots-box');
        $(this).parent().find('.dots').toggleClass('dots-active');
        // $('.profile-head-with-arrow .share-box')
        // $(this).toggleClass('dots-active');
        $('.click-div').show();
    })
    $('.signup_btn').on('click' , function(){
        $('.signup-in-popup').delay(200).fadeIn('slow');
        $('.click-div3').delay(200).fadeIn('slow');
    });
});

$(document).ready(function () {
    $(".click-div").click(function () {
        $(".share-btn-area").removeClass("share-active");
        $('.share-box').removeClass('dots-box');
        $('.dots').removeClass('dots-active');
        $('.repo-dropdown').fadeOut();
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
        $('.profile-head-with-arrow .share-box').removeClass('dots-box');

    });
});
$(document).ready(function () {
    $(document).scroll(function () {
        $(".share-box-login").removeClass("log-active");
        $(this).hide();
        $('.share-box').removeClass('dots-box');
        $('.dots').removeClass('dots-active');
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
        $(".log-in-popup").fadeIn();
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
        $(".repo-dropdown").delay(500).fadeOut('slow');
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



// NEW SLIDER 







// $('.tab-content-inner .open_comments').click(function () {
//     window.location.href = 'video-details.html';
// });
// $('.body-new .open_comments').click(function () {
//     window.open("feed.html", "_blank");
// });







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
        $(".loggedin").show();
        $(".signup_btn").hide();
        $(".log-in-div").css("padding-left", "180px");


    } else {
        $(".popup-wrong").css("display", "block");
        $(".popup-wrong").fadeIn(500);
        $('.popup-wrong').delay(1000).fadeOut('slow');
    }
}
function validateForm3(event) {
    event.preventDefault();
    let logemail = document.getElementById("repoName").value;
    let logpassword = document.getElementById("repoEmail").value;
    let reposelect = document.getElementById("repoSelect").value;
    let error = 0;

    if (logemail == "" || logemail == " ") {
        error++;
    }
    if (logpassword == "" || logpassword == " ") {
        error++;
    }
    if (reposelect == "" || reposelect == " ") {
        error++;
    }

    if (error == 0) {
        $(".login_box").hide();
        $(".popup-right").html('<i class="fa-solid fa-circle-check"></i> <p>Thank You So Much</p>')
        $(".popup-right").css("display", "block");
        $(".popup-right").fadeIn(500);
        $('.popup-right').delay(1000).fadeOut('slow');
        $('.click-div3').delay(1500).fadeOut('slow');
        $('.repo-dropdown').delay(1500).fadeOut('slow');


    } else {
        $(".popup-wrong").css("display", "block");
        $(".popup-wrong").fadeIn(500);
        $('.popup-wrong').delay(1000).fadeOut('slow');
    }
}
function validateForm4(event) {
    event.preventDefault();
    let name = document.getElementById("name4").value;
    let email = document.getElementById("email4").value;
    let name_info = document.getElementById("name-info").value;
    let error = 0;

    if (name == "" || name == " ") {
        error++;
    }
    if (email == "" || email == " ") {
        error++;
    }
    if (name_info == "" || name_info == " ") {
        error++;
    }
  

    if (error == 0) {
        $(".popup-right").fadeIn(500);
        $('.popup-right').delay(1000).fadeOut('slow');
    } else {
        $(".popup-wrong").fadeIn(500);
        $('.popup-wrong').delay(1000).fadeOut('slow');
    }
}
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
    var btnText2 = document.getElementById("myBtn2");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.style.display = "none"; 
      moreText.style.display = "inline";
      btnText2.style.display = "inline"; 

    }
  }
function myFunction2() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
    var btnText2 = document.getElementById("myBtn2");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText2.innerHTML = "View More"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText2.innerHTML = "View Less"; 
      moreText.style.display = "inline";
    }
  }

  


    


  


// $(document).ready(function(){
//     $(".click-dropdown").on("click" , function(){
//         $(this).parent().find(".dropdown-menu").toggle();
//         $(this).toggleClass("visited");
//         $(".dropdown-container2 .dropdown-menu").hide();
//         $(".click-dropdown2").removeClass("visited");
//         $(".click-div").show();
//     });
//     $(document).scroll(function(){
//         $(".dropdown-menu").hide();
//     });
    
//     $(".click-dropdown2").on("click" , function(){
//         $(this).parent().find(".dropdown-menu").toggle();
//         $(this).toggleClass("visited");
//         $(".dropdown-container1 .dropdown-menu").hide();
//         $(".click-dropdown1").removeClass("visited");
//         $(".click-div").show();
//     });
// })



// window.onload = function() {
//     var largePicture = document.querySelector('.image-container')
    
//     // Load large image
//     var imgLarge = new Image();
//     imgLarge.src = largePicture.dataset.large; 
//     imgLarge.onload = function () {
//       imgLarge.classList.add('loaded');  
//     };
//       imgLarge.classList.add('picture');
//     largePicture.appendChild(imgLarge);
//   }







//   $(".popup-wrong").click(function () {
//     $(".popup-wrong").fadeOut(500);
//     $(".popup-wrong").css("display", "none");
//   });
//   $(".popup-right").click(function () {
//     $(".popup-right").fadeOut(500);
//     $(".popup-right").css("display", "none");
//   });