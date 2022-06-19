// An element intended to wrap all the content in the app with a sidebar
// Includes a vertical title and menubar
// Ignores the header of the app

import React, { useState , useEffect, FC, ReactElement } from 'react';


interface sidebarType {
    children : React.ReactNode,
    tabs : string[],
    header: JSX.Element
}

const Sidebar_Wrapper: FC<sidebarType> = ({
    children = (<div className="blank-error-div"></div>), tabs=["Error - No tabNames provided"], header=(<h1>No Header Provided</h1>)
}) : ReactElement => {
    // Set Tabs, TabsRef and scrollToTabs as variables that can be used in "ref" jsx keyword later
    // const tabs = ["Home", "Projects", "About Me", "Skills & Abilities", "Contact Me"];
    var currentTab = "Placeholder";
    var bigScreen = false;
    return (
        <div id="sidebar-wrapper-div">
            {header}
                <div id="sidebar-content-wrapper">
                    {bigScreen ?

                        <div id="sidebar">
                            <div id="sidebar-title-div">
                                <h5 id="sidebar-title" className="title">{currentTab}</h5>
                            </div>
                            <ul id="sidebarul" className="box">

                                {tabs.map(tab => (
                                    <li id={tab + "-sidebar-li" } className="sidebar-li box">{tab}</li>
                                ))}

                            </ul>
                        </div>

                        :

                        <div id="sidebar">
                            //sandwichmenu icon
                        </div>
                    }
                {children}
            </div>
        </div>
    )
}

export default Sidebar_Wrapper;