import './App.css';
import React from "react";
import Darkmode_Wrapper from './Wrapper-Elements/Darkmode-Wrapper';


// A function that wraps the Application (alternate name: AppWrapper)
class App extends React.Component {
  darkMode = false;
  render () {
    return (
      <div id="AppWrapper">
        <div id="backgroundcolour"></div>
        <Darkmode_Wrapper isDarkMode={this.darkMode}>
          <div id="test">

          </div>
        </Darkmode_Wrapper>
      </div>
    );
  }
}

export default App;