// A fullscreen header for the main github portfolio 
// Will contain its own menubar different from the sidebar menu

import React, { useState , useEffect, FC, ReactElement } from 'react';

// Contains relevant links
interface tabOptions {
    name : string,
    contextmenu? : string,
    // Add more interface options to handle moving the scrollbar to correct point in the page
}

interface HeaderType {
    title : string
    tabs : [tabOptions]
}

const Header : FC<HeaderType> = ({
    
}) : ReactElement => {
    return(
        <div id="HeaderParent">
            <div id="nav">
                <ul id="navul">
                    {}
                </ul>
            </div>
        </div>
    )
}