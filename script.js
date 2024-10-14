document.forms["form"].addEventListener("submit", function (event) {
    event.preventDefault();
    ValidateForm();
});

// form Validation //
function ValidateForm() {
    const name = document.forms["form"]["input-name"].value;
    const birth = document.forms["form"]["input-birth"].value;
    const gender = document.forms["form"]["gender"].value;
    let message = document.forms["form"]["message-input"].value;
    const errpopup = document.getElementById("errorpopup");
    const sucpopup = document.getElementById("sucesspopup");
    const birthpopup = document.getElementById("birthpopup");
    const getDay = new Date().toLocaleString();
    const now = new Date();
    const selectedBirth = new Date(birth);
    const date = new Date(birth);
    const age = now.getFullYear() - date.getFullYear();

    if (name == "" || birth == "" || gender == "" || message == "") {
        // for validate if the given data is not correct//
        unsuccess();
    } else if (selectedBirth > now) {
        // selectedBirth for take input-birth data //

        // for set the user can't input birth day more than today //
        anomaly();
    } else {
        // for set if the data succesfully submitted //
        success();
        SetSender(name, birth, gender, message, getDay, age);

        // if the user already filled the form, the form will be reset //
        setTimeout(function () {
            document.forms["form"].reset();
        }, 500);
    }
}

// for set the result of input//
function SetSender(name, birth, gender, message, time, age) {
    document.getElementById("name").innerHTML = name;
    document.getElementById("name-input").innerHTML = name;
    document.getElementById("birth-input").innerHTML = birth;
    document.getElementById("gender-input").innerHTML = gender;
    document.getElementById("message-input").innerHTML = message;
    document.getElementById("time-input").innerHTML = time;
    document.getElementById("age").innerHTML = "(" + age + " years)";
}

// to set name in the log out session //
function setNamepop() {
    let name = document.getElementById("name").value;
    document.getElementById("namelogout").innerHTML = name;
}

//log out //
function LogOut() {
    Swal.fire({
        title: "Are you sure?",
        text: "Are you sure want to log out?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes !"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Log Out Success!",
                text: "See you next time !",
                icon: "success"
            });
            document.getElementById("name").innerHTML = "";
            document.getElementById("name-input").innerHTML = "";
            document.getElementById("birth-input").innerHTML = "";
            document.getElementById("gender-input").innerHTML = "";
            document.getElementById("message-input").innerHTML = "";
            document.getElementById("age").innerHTML = "";
            document.getElementById("time-input").innerHTML = "";
        }
    });
}

function success() {
    Swal.fire({
        title: "Success !",
        text: "Your data has been successfully submitted !",
        icon: "success"
    });
}

function unsuccess() {
    Swal.fire({
        title: "Error",
        text: "All data must be fill in",
        icon: "error"
    });
}

function anomaly() {
    Swal.fire({
        title: "Oops",
        text: "You can't input your birth more than now !",
        icon: "question"
    });
}

// untuk men set popup berhasil atau tidak //
function showpopup(ShowPopUp) {
    ShowPopUp.classList.add("open-popup");

    // mengatur pergerakan dari form ke popup menjadi smooth //
    ShowPopUp.scrollIntoView({ behavior: "smooth", block: "center" });

    let closebtn = ShowPopUp.querySelector(".close-button");

    closebtn.addEventListener("click", function () {
        ShowPopUp.classList.remove("open-popup");
    }, { once: true });
}

// for image slideshow //
let indexSlide = 1;
showDivs(indexSlide);

// settings for image slideshow //
function plusDivs(n) {
    showDivs((indexSlide += n));
}

function showDivs(n) {
    let i;
    let imglist = document.getElementsByClassName("img");
    if (n > imglist.length) {
        indexSlide = 1;
    } else if (n < 1) {
        indexSlide = imglist.length;
    }

    for (let i = 0; i < imglist.length; i++) {
        imglist[i].classList.remove("active");
    }

    imglist[indexSlide - 1].classList.add("active");
}

// Setting the duration of autoslide //
setInterval(() => {
    plusDivs(1);
}, 2000);


AOS.init();