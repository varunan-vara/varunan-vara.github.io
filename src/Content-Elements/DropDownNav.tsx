// A dropdown menu for the header element, should look like a hamburger menu

import React, { FC, ReactElement, useState } from 'react';

interface tabOptions {
    name : string,
    navOp : string,
    // Add more interface options to handle moving the scrollbar to correct point in the page
}

interface DropDownMenuOpts {
    tabs : tabOptions[],
    changeval : any
}

const HamburgerMenu : FC<DropDownMenuOpts> = ({
    tabs, changeval
}) : ReactElement => {
    const [isOpen, changeOpen] = useState(false)



    return (
        <div id="navSandwichMenu" onClick={() => {
            changeOpen(!isOpen)
            changeval(isOpen)
            }} >
            <div id="lineOne" className="hamburgerline"></div>
            <div id="lineTwo" className="hamburgerline"></div>
        </div>
    )
}

export default HamburgerMenu