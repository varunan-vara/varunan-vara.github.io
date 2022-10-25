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
    title : string,
    readMore: string,
    tabs : tabOptions[]
}

const Header : FC<HeaderType> = ({
    title, readMore, tabs
}) : ReactElement => {

    const pathName = useLocation().pathname;
    console.log(pathName);
    const titleName = (pathName === "/MyProjects") ? "My Projects" : (pathName === "/AboutMe") ? "About Me" : (pathName === "/Home" || pathName === "/") ? "Varunan Varathan" : "Oops... that link does not exist :(";

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
                        setSubMenu(!submenu)
                        }} >
                        <div id="lineOne" className="hamburgerline"></div>
                        <div id="lineTwo" className="hamburgerline"></div>
                    </div>
                </div>    
                }
            </div>
            <div id="siteHeader">
                <div id="siteP">{
                !submenu ? <p id="verticalTabOpts">{titleName}</p> : <div>
                    <ul id="verticalTabOpts">
                    {tabs.map(tab=>(
                        <li key={"tab-" + tab.name} className="navAVert navAVertHover" id= {["navLi",tab.name].join("-")}>
                        {
                            tab.navOp.charAt(0) === "/" ? <Link className="navAVert" id= {["navA",tab.name].join("-")} to={tab.navOp}>
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
            <div className="readMoreText">
                <p className="readMoreP">{readMore}</p>
            </div>
        </div>
    )
}

export default Header