
function getNav () {
    var nav = '<h1 class = "logo"><img alt="Lettuce" src = "Assets/logo.png" height="42" width="42"></h1><nav><ul><div class = "borderXwidth"><li><a href = "index.html">Home</a></li><li><a href = "aboutme.html">About Me</a></li><li><a href = "links.html">Resources</a></li><li><a href = "github.html">My Github</a></li></div></ul></nav>';

/*

<h1 class = "logo">
                    <img alt="Lettuce" src = "Assets/logo.png" height="42" width="42">
                </h1>
                <nav>
                    <ul>
                        <div class = "borderXwidth">
                            <li><a href = "index.html" id = "Home">Home</a></li>
                            <li><a href = "aboutme.html" id = "AboutMe">About Me</a></li>
                            <li><a href = "links.html" id = "Resources">Resources</a></li>
                            <li><a href = "github.html" id = "MyGithub">My Github</a></li>
                        </div>
                    </ul>
                </nav>

*/

document.getElementById("navigation").innerHTML = nav;
}

