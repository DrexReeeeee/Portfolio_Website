let username;
function Startfunc() {
    username = prompt("What is your name?");
    if (username) {
        localStorage.setItem('username', username);
        let con = confirm(`Do you wish to proceed, ${username}?`);
        if (con) {
            window.location.href = "homepage.html";
        }
    }
}

function AboutMefunc() {
    username = localStorage.getItem('username');
    if (username) {
        let con1 = confirm(`Are you sure you want to proceed, ${username}?`);
        if (con1) {
            window.location.href = "aboutme.html";
        }
    } else {
        let con2 = alert("Are you sure you want to proceed, user?");
        if (con2) {
            window.location.href = "aboutme.html";
        }
    }
}


 function readyfunc() {
        let infoBox = document.getElementById("infoBox");
        if (infoBox) {
            infoBox.scrollIntoView({ behavior: "smooth" });
        }
    }

function open1func() {
    window.location.href = "Portfolio1.html";
}


function Backfunc() {
    window.location.href = "homepage.html";
}


function Referencefunc() {
    window.location.href = "reference1.html"
}
function Referencefunc2() {
    window.location.href = "Reference2.html"
}
function Referencefunc3() {
    window.location.href = "reference3.html"
}

function Referencefunc4() {
    window.location.href = "reference4.html"
}
function Referencefunc5() {
    window.location.href = "reference5.html"
}
function Referencefunc6() {
    window.location.href = "reference6.html"
}

function open2func() {
    window.location.href = "Portfolio2.html";
}

function open3func() {
    window.location.href = "Portfolio3.html";
}

function Backfunc1() {
    window.location.href = "Portfolio1.html";
}
function Backfunc2() {
    window.location.href = "Portfolio2.html";
}

function Backfunc3() {
    window.location.href = "Portfolio3.html";
}
function Backfunc4() {
    window.location.href = "Portfolio4.html";
}
function Backfunc5() {
    window.location.href = "Portfolio5.html";
}
function Backfunc6() {
    window.location.href = "Portfolio6.html";
}

function open4func() {
    window.location.href = "Portfolio4.html";
}

function open5func() {
    window.location.href = "Portfolio5.html";
}

function open6func() {
    window.location.href = "Portfolio6.html";
}