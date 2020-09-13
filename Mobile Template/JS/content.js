/*To grab posts from Twitter, the Twitter API can be used 
along with the useage of GET statuses/user_timeline. The 
can be done for other platforms as well.

As the website does not grab live tweets at the moment, 
the data is grabbed from a .json*/


const jsoncontent = require("./samplemedia.json");

var socialmediasection = document.createElement("section");
socialmediasection.setAttribute("id", "socialmedia");

for (var i = 0; i < 5; i++) {
    var obj = jsoncontent[i];
    var article = document.createElement("article");
    article.setAttribute("class", "card-header");
    var p = document.createElement("p");
    p.setAttribute("class", "card-content");
    p.textContent = obj.content;
    var h2 = document.createElement("h2");
    h2.setAttribute("class", "card-title");
    h2.textContent = obj.title;
    article.textContent = p + h2 + '<img class="twitter" src="Assets/Pictures/Twitter_Logo_WhiteOnImage.png">';

    socialmediasection.appendChild(article);

    console.log("Added tweet: " + article)
}

document.write("<h4 class='whatsnew'>What's New</h4>" + socialmediasection);