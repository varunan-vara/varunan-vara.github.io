// A fullscreen header for the main github portfolio 
// Will contain its own menubar different from the sidebar menu

import React, { FC, ReactElement, useState } from 'react';
import { Link, useLocation} from "react-router-dom";
import HamburgerMenu from './DropDownNav';

function dimensions() {
    const { innerWidth: width, innerHeight: height} = window;
    return {
        width,
        height
    }
}

// Contains relevant links
interface tabOptions {
    name : string,
    navOp : string,
    // Add more interface options to handle moving the scrollbar to correct point in the page
}

interface HeaderType {
    tabs : tabOptions[]
}

const Header : FC<HeaderType> = ({
    tabs
}) : ReactElement => {
    function handleResize () {
        if (dimensions()["width"] > 850) {
            setSubMenu(false);
        }
    }
    window.addEventListener('resize', handleResize);
    var pathName = "0";
    pathName = useLocation().pathname;
    const titleName = (pathName === "/MyProjects") ? "My Projects" : (pathName === "/AboutMe") ? "About Me" : (pathName === "/Home" || pathName === "/") ? "Varunan Varathan" : "Oops... that link does not exist :(";
    // const titleName = "Oops... that link does not exist :(";
    const [submenu, setSubMenu] = useState(false)

    return(
        <div id="HeaderParent">
            <div id="nav">
                {dimensions()["width"] > 850 ? 
                <ul id="navul">
                    {tabs.map(tab => (
                        <li key={"tab-" + tab.name} className="navLi" id= {["navLi",tab.name].join("-")}>
                            {
                                tab.navOp.charAt(0) === "/" ? <Link className="navA" id= {["navA",tab.name].join("-")} to={tab.navOp}>
                                                                {tab.name}
                                                            </Link>
                                                            : <a className="navA" id= {["navA",tab.name].join("-")} href={tab.navOp}>
                                                            {tab.name}
                                                            </a>
                            }
                        </li>
                    ))}
                </ul> : 
                <div>
                    <div id="navSandwichMenu" onClick={() => {
                        if (dimensions()["width"] < 850) {
                            setSubMenu(!submenu)
                        } else {setSubMenu(false)}
                        }} >
                        <div id="lineOne" className="hamburgerline"></div>
                        <div id="lineTwo" className="hamburgerline"></div>
                    </div>
                </div>    
                }
            </div>
            <div id="siteHeader">
                <div id="siteP">{
                !submenu ? <p id="verticalTabOpts">{titleName}</p> : <div id="dropdownParent">
                    <ul id="verticalTabOpts">
                    {tabs.map(tab=>(
                        <li key={"tab-" + tab.name} className="navAVert navAVertHover" id= {["navLi",tab.name].join("-")}>
                        {
                            tab.navOp.charAt(0) === "/" ? <Link className="navAVert" id= {["navA",tab.name].join("-")} to={tab.navOp} onClick={() => setSubMenu(false)}>
                                                            {tab.name}
                                                        </Link>
                                                        : <a className="navAVert" id= {["navA",tab.name].join("-")} href={tab.navOp}>
                                                        {tab.name}
                                                        </a>
                        }
                    </li>
                    ))}
                    </ul>
                </div>
                }</div>
            </div>
            <div id="topLeftLogo">
                &lt;Portfolio /&gt;
            </div>
            {(titleName === "Oops... that link does not exist :(") ? <div></div> : <a href="#nextPageItem" className="arrowa"><div className="arrow" id="bigArrow"></div></a>}
        </div>
    )
}

export default Header