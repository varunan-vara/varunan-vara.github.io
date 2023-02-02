// Main App for the varunan-vara.github.io website. Handles routing and all of the main components in one area
// Imports: 
import './App.css';
import React  from "react";
import { FC, ReactElement } from "react";
import Darkmode_Wrapper from './Wrapper-Elements/Darkmode-Wrapper';
import Header from './Content-Elements/Header'
import AnimatingHome from './Content-Elements/HomeScreen';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


// newRoute interface changes the titles and subtitles of the Header, which stays constant throughout. Returns a JSX Element
interface newRoute {
  setTitle: string,
  setReadMore: string,
  setComponenet: JSX.Element
}

// home webpage is the origin url too. 
interface home {

}

const Home: FC<home> = ({}) : ReactElement => {
  return <div className="contentSection" id="homeContentSection">
    <AnimatingHome />
  </div>
}

interface myProjects {

}

const MyProjects: FC<myProjects> = ({}) : ReactElement => {
  return <div className="contentSection" id="myProjectsContentSection"></div>
}

interface aboutMe {

}

const AboutMe: FC<aboutMe> = ({}) : ReactElement => {
  return <div className="contentSection" id="aboutMeContentSection"></div>
}

interface appConst {
  darkMode: boolean,
  title: string,
  readMore: string
}

interface appProps {}

// A function that wraps the Application (alternate name: AppWrapper)
class App extends React.Component<appProps, appConst> {

constructor(props) {
  super(props);
  this.state = {
      // Pass into darkmode wrapper
      darkMode: true,
      // Title of the Header element
      title: "Varunan Varathan",
      // What comes above the arrow at the bottom of the page
      readMore: "",
  };
}

  mx = 0
  my = 0
  px = 0
  py = 0


  setDarkMode = () : void => {
    this.setState({darkMode : (!this.state.darkMode)})
  }
  render () {
    return ( 
      <Router>
        <div id="AppWrapper">
          <Darkmode_Wrapper isDarkMode={this.state.darkMode}>
            <div id="mainContent">
              <Header 
              tabs = {[
                // Routing is made in advance, in case it is needed in the future
                {name: "Home", navOp: "/Home"},
                {name : "Projects", navOp: "https://varunan-vara.notion.site/"}, 
                // {name: "About Me", navOp: "/AboutMe"}, 
                {name: "GitHub", navOp: "https://github.com/varunan-vara"}
              ]}/>

<Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/Home" element={<Home />}/>
                <Route path="/MyProjects" element={ <MyProjects />}/>
                // In the future, MyProjects will be converted to a React site instead of Notion
                <Route path="/AboutMe" element={<AboutMe />}/>
              </Routes>

            </div>
          </Darkmode_Wrapper>
        </div>
      </Router>
    );
  }
}

export default App;