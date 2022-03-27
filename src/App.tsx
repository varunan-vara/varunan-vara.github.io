import React from 'react';
import Header from "./Header";
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <Header 
        title = "varunan-vara.github.io" 
        tabs = {
          [
            {name:"About Me", link:"#AboutMe"},
            {name:"Blog", link:"#BlogLink"},
            {name:"Current Projects", link:"#CurrentProjects"},
            {name:"GitHub", link:"https://github.com/varunan-vara"}
          ]
        }  
      />
    );  
  }
}

export default App;
