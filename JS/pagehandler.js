function navify (currentpage) {
    var h = document.getElementById("navbar");

    //Cors Error
    //var navcontent;
    /*var xhr = new XMLHttpRequest();
    xhr.open(
        "GET",
        "./Assets/nav.html",
        false
    );
    xhr.send();
    console.log(xhr.responseText);
    */

    //Find full html in Assets/nav.html
    var navbarHTML = [
        '<ul class="navul">',
        '<li class="navli">',
        '<a class="nava" id="homenav" href="index.html">Home</a>',
        '</li>',
        '<li class="navli">',
        '<a class="nava" id="resumenav" href="resume.html">Resume</a>',
        '</li>',
        '<li class="navli">',
        '<a class="nava" id="myprojectsnav" href="myprojects.html">My Projects</a>',
        '</li>',
        '<li class="navli">',
        '<a class="nava" id="githubnav" href="https://github.com/varunan-vara">GitHub</a>',
        '</li>',
        '</ul>'
   ];
    var i;
    for (i = 0; i <navbarHTML.length; i++) {
        h.innerHTML += navbarHTML[i] + "\n"; 
    }
    document.getElementById(currentpage + "nav").className += "selectednav";
}

function footify () {
    //bruh
}