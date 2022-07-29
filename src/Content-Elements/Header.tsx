// A fullscreen header for the main github portfolio 
// Will contain its own menubar different from the sidebar menu

import React, { FC, ReactElement, useState } from 'react';
import { Link } from "react-router-dom";
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
                    <HamburgerMenu tabs={tabs} changeval={setSubMenu}/>
                    <div id="sandwichMenu" style={{opacity: (submenu ? 1 : 0)}}></div>
                </div>    
                }
            </div>
            <div id="siteHeader">
                <p id="siteP">Varunan Varathan</p>
            </div>
            <div id="topLeftLogo">
                &lt;My Website /&gt;
            </div>
            <div className="arrow" id="bigArrow"></div>
            <div className="readMoreText">
                <p className="readMoreP">{readMore}</p>
            </div>
        </div>
    )
}

export default Header