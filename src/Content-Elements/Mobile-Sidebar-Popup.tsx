// A mobile version of the regular sidebar that can be used on smaller screens
// Will be called from a sandwich menu button

import React, { FC, ReactElement } from "react";

interface MSidebarEl {
    title : string,
    func : () => void
}

interface Mobile_Sidebar_Popup {
    tabs : MSidebarEl[],
    showTab : boolean;
}

function tab_error () : void {
    console.log("Tab Error")
}

const Mobile_Sidebar_Popup : FC<Mobile_Sidebar_Popup> = ({
    tabs = [
        {
            title : "No tab info available",
            func : tab_error
        }
    ], showTab = false 
}) : ReactElement => {
    return(
        <div id="mobile-sidebar-wrapper">
            {!showTab ? null :
                <div id="mobile-sidebar">
                    
                </div>
            }
        </div>
    )
}

export default Mobile_Sidebar_Popup;