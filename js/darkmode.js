$(document).ready(function () {
    if (localStorage.getItem("darkmode")) {
        if (localStorage.getItem("darkmode") == 'true') {
            $("body").addClass("dark");
            $(".checkbox").prop('checked', true);
            $(".comment-arrow").addClass("comment-arrow2");
            $(".comment-arrow2").html('<img src="images/comment-arrow-dark2.png" alt="" class="arrow-img">');
        } else {
            $("body").removeClass("dark");
            $(".checkbox").prop('checked', false);
            $(".comment-arrow").removeClass("comment-arrow2");
            $(".comment-arrow").html('<img src="images/comment-arrow.png" alt="" class="arrow-img">');
        }
    } else {
        localStorage.setItem("darkmode", 'false')
    }
});


// const body = document.querySelector("body"),
//     toggle = document.querySelector(".checkbox");

// let getMode = localStorage.getItem("mode");
// if (getMode && getMode === "dark") {
//     body.classList.add("dark");
//     toggle.classList.add("active");
// }

// toggle.addEventListener("click", () => {
//     body.classList.toggle("dark");

//     if (!body.classList.contains("dark")) {
//         return localStorage.setItem("mode", "light");
//     }
//     localStorage.setItem("mode", "dark");
// });
// toggle.addEventListener("click", () => toggle.classList.toggle("active"));

