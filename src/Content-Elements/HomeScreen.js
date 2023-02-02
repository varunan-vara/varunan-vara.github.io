// @ts-ignore
import Pdf from "../Resources/Other/Resume_-_Varunan_Varathan.pdf";
import React from "react";


const AnimatingHome = () => {
  
  return(
    <div className="HomeLinks" id="nextPageItem">
      <div id="dividerItem1"></div>
      <div id="quickLinks" className="shadedBoxShadow">
        <a id="linkedInButton" className="socialsButton" href={"https://www.linkedin.com/in/varunan-varathan"}  target="_blank" rel="noopener noreferrer">My LinkedIn</a>
        <a id="githubButton" className="socialsButton" href={"https://github.com/varunan-vara"} target="_blank" rel="noopener noreferrer">My GitHub</a>
        <a id="resumeButton" className="socialsButton" href={Pdf}>My Resume</a>
      </div>
      <div id="curveHolder">
        <div className="custom-shape-divider-bottom-1632688346">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
            </svg>
        </div>  
      </div>
      <div id="enggrid" >
        <div className = "ProjectBox shadedBoxShadow">
          <p className = "ProjectBoxTitle">Recent Project: AdventOfCode</p>
          <p className = "ProjectBoxSubtitle" >What is Advent of Code?</p>
          <p className = "ProjectBoxText" >Advent of Code is a yearly event that takes place during the lead up to the Christmas season. The contest, similar to a holiday advent calendar, has a different event on the 25 days of December preceding Christmas Day. Each event consists of a challenge with extremely large numbers that could only conceivably be cracked using code and algorithms. The challenges get progressively harder as the event progresses!</p>
          <p className = "ProjectBoxText" >This year, I decided to focus more on developing my skills in some of the low level programming languages I got taught in my second year computer engineering courses, namely C and C++. I learned a lot about pointers and various array organization methods, and feel more comfortable applying the skills I learned in other real-world applications like app development and logic programming.</p>
          <a className = "ProjectLink" href={"https://varunan-vara.notion.site/Personal-Projects-f606cbe730bf4da38bad4b0ed2559ac6"}><p className="ProjectBoxText" >Check out some of my other projects here! (Notion)</p></a>
          <div className = "ProjectSpacer"></div>
        </div>
        <div className = "ProjectBox shadedBoxShadow">
          <p className = "ProjectBoxTitle">Hackathon Projects!</p>
          <p className = "ProjectBoxSubtitle" >UofTHacksX</p>
          <p className = "ProjectBoxText" >UofTHacks is a student-run hackathon that takes place at UoFT's St. George Campus on a yearly basis. The 2022 season, also known as UofTHacksX, promoted the theme "Exploration", with some subthemes including Women Empowerment, Mental Health Awareness, and Fitness.</p>
          <p className = "ProjectBoxSubtitle" >Main Project</p>
          <p className = "ProjectBoxText" >After joinig a group of 4, our goal was to focus on the exploration and mental health awarenes. Our goal was to create a Mental Health Journalling App that prioritized feelings, emotions, and moods. After collecting data for a period of time, the app would reccomend advice, give a rundown of how the individual feels, and even provide reports that could be shown to a physician or healthcare expert.</p>
          <a className = "ProjectLink" href={"https://github.com/varunan-vara/UofTHacksX-Ant-Hill"}><p className="ProjectBoxText" >Link to the Code Repository (GitHub)</p></a>
          <div className = "ProjectSpacer"></div>
        </div>
      </div>
      <div id="footer"></div>
    </div>
  )
}

export default AnimatingHome;