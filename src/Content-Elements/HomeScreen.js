// @ts-ignore
import Pdf from "../Resources/Other/varunan_varathan_resume.pdf";
import React from "react";


const AnimatingHome = () => {



  return(
    <div className="HomeLinks" id="nextPageItem">
      <div id="dividerItem1"></div>
      <div id="blogAd" className="shadedBoxShadow"> {/*Grid Layout*/}
        <div id="recentBlogPost"> {/*Grid Layout*/}
          <div id="blogIntro">Recent Blog Posts</div>
          <div id="recentBlogTitle" className="rblogTitle">Sample Article Title</div>
          <div id="recentBlogDate" className="rblogDate">00/00/0000</div>
          <p id="recentBlogContent" className="rblogContent">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque erat eros, at posuere risus cursus vitae. Nullam eget orci commodo, gravida velit in, egestas ligula. Quisque ullamcorper eleifend massa at pretium. Integer semper ex id justo gravida iaculis. Suspendisse a diam in sem euismod venenatis. Curabitur hendrerit auctor leo, ut hendrerit magna facilisis eget. Nam eu magna ut est commodo finibus ut sed orci.

Morbi eu aliquet arcu. In eget sapien fringilla, tristique leo non, laoreet velit. Nunc volutpat enim quis tempus sodales. Aenean condimentum odio ac aliquet sodales. Sed imperdiet, odio molestie placerat molestie, sapien justo condimentum arcu, nec accumsan libero tellus quis tortor. Donec ac nisl erat. Aliquam nisl augue, tempor nec metus tincidunt, ullamcorper eleifend felis. Maecenas in neque mauris. Phasellus sit amet facilisis mauris. Etiam fringilla velit sit amet rutrum semper. 
          </p>
          <div id="2recentBlogTitle" className="rblogTitle">Sample Article Title</div>
          <div id="2recentBlogDate" className="rblogDate">00/00/0000</div>
          <p id="2recentBlogContent" className="rblogContent">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque erat eros, at posuere risus cursus vitae. Nullam eget orci commodo, gravida velit in, egestas ligula. Quisque ullamcorper eleifend massa at pretium. Integer semper ex id justo gravida iaculis. Suspendisse a diam in sem euismod venenatis. Curabitur hendrerit auctor leo, ut hendrerit magna facilisis eget. Nam eu magna ut est commodo finibus ut sed orci.

Morbi eu aliquet arcu. In eget sapien fringilla, tristique leo non, laoreet velit. Nunc volutpat enim quis tempus sodales. Aenean condimentum odio ac aliquet sodales. Sed imperdiet, odio molestie placerat molestie, sapien justo condimentum arcu, nec accumsan libero tellus quis tortor. Donec ac nisl erat. Aliquam nisl augue, tempor nec metus tincidunt, ullamcorper eleifend felis. Maecenas in neque mauris. Phasellus sit amet facilisis mauris. Etiam fringilla velit sit amet rutrum semper. 
          </p>
        </div>
        <button id="moreBlogContentButton">More Articles</button>
      </div>
      <div id="quickLinks" className="shadedBoxShadow">
        <a id="linkedInButton" className="socialsButton" href={"https://www.linkedin.com/in/varunan-varathan"}  target="_blank" rel="noopener noreferrer">My LinkedIn</a>
        <a id="githubButton" className="socialsButton" href={"https://github.com/varunan-vara"} target="_blank" rel="noopener noreferrer">My GitHub</a>
        <a id="resumeButton" className="socialsButton" href={Pdf}>My Resume</a>
      </div>
      <div id="idkyet"></div>
    </div>
  )
}

export default AnimatingHome