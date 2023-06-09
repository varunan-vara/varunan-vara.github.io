import profilepic from "./IMG-20220620-WA0003.jpg";
import { useState } from "react";

const DesktopAboutMeBox =  () => {
    
    const [width, setWidth] = useState(window.innerWidth);

    const handleResize = () => {setWidth(window.innerWidth)}

    window.addEventListener("resize", handleResize)

    if (width > 950) {

        return (
            <div id="aboutMeBox" className="box">
                <section className="section">
                    <article className="media aboutMeBox">
                        <figure className="media-left">
                            <p class="image imageContainerAboutMe is-rounded">
                                <img src={profilepic} alt="Loading??" className="aboutMePic"/>
                            </p>
                        </figure>
                        <div class="media-content">
                            <section className="section">
                                <h1 className="title">Who am I?</h1>
                                <p className="content aboutMeContent">My name is Varunan Varathan, and I am a third-year Bachelor of Computer Engineering student at McMaster University. I was introduced to the world of computing and programming at the age of 13 when I purchased my first Raspberry Pi to use as a low-budget computer. I am intersted in learning more about artificial intelligence, chip and logic design, electrical components and robotics. I continue to maintain a set of open source projects related to Autodesk Tools and mobile app development on my Github and document my projects on my portfolio website!</p>
                                <div className="columns tagList">
                                    <p>Programming Languages:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                                    <span class="tag m-1">
                                        JavaScript
                                    </span>
                                    <span class="tag m-1">
                                        C/C++
                                    </span>
                                    <span class="tag m-1">
                                        Python
                                    </span>
                                    <span class="tag m-1">
                                        C#
                                    </span>
                                    <span class="tag m=1">
                                        Verilog/Assembly
                                    </span>
                                    
                                </div>
                            </section>
                        </div>
                    </article>
                </section>
            </div>
        )

    
    } else {
        return (
        <div id="aboutMeBox" className="box">
            <img src={profilepic} alt="Loading??" className="aboutMePic"/>
            <section className="section">
                <h1 className="title">Who am I?</h1>
                <p className="content aboutMeContent">My name is Varunan Varathan, and I am a third-year Bachelor of Computer Engineering student at McMaster University. I was introduced to the world of computing and programming at the age of 13 when I purchased my first Raspberry Pi to use as a low-budget computer. I am intersted in learning more about artificial intelligence, chip and logic design, electrical components and robotics. I continue to maintain a set of open source projects related to Autodesk Tools and mobile app development on my Github and document my projects on my portfolio website!</p>
                <div className="columns tagList">
                    
                </div>
            </section>
        </div>
        )
    }
}
// Not used
const MobileAboutMeBox = () => {
    return (
        <div id="aboutMeBox" className="box">

        </div>
    )
}

export { DesktopAboutMeBox , MobileAboutMeBox };