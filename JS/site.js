function downloading() {
    document.getElementById("resumedownloadbutton").innerHTML = "Downloaded!"
    window.setTimeout(() => {
        document.getElementById("resumedownloadbutton").innerHTML = "Download"
    }, 5000);
}

//This file is redundant