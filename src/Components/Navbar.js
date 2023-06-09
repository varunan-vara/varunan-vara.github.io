import { Link } from "react-router-dom";
import { useState } from "react";

// List of Navbar Pages
const navbarPages = [
    {
        "name" : "Home",
        "link" : "/"
    }, 
    {
        "name": "Projects", 
        "link": "/projects"
    },
    {
        "name": "Github",
        "link": "https://github.com/varunan-vara"
    }
];



// Navbar Item that will be exported from here
const Navbar = ({mainPageName}) => {

    // Variables to store classNames so that it can be changed using useState
    const [burgerClasses, setBurgerClasses] = useState("navbar-burger");
    const [menuClasses, setMenuClasses] = useState("navbar-menu");
    var isOpen = false;

    const toggleSandwich = () => {
        if (isOpen) {
            setBurgerClasses("navbar-burger is-active");
            setMenuClasses("navbar-menu is-active");
            isOpen = false;
        } else {
            setBurgerClasses("navbar-burger");
            setMenuClasses("navbar-menu");
            isOpen = true;
        }
        console.log("CHANGED, " + String(isOpen))
    }

    // Simple isTab checker function returns if the current tab is selected
    const isTab  = (tabName) => {
        return (tabName === mainPageName) ? 
        "navbar-button-primary navbar-item column m-6 navbar-button" : 
        "navbar-item column m-6 navbar-button";
    }

    // Function that maps links to buttons for Desktop Page
    const mapElToLink = (el) => {
        return (el.link[0] === "/") ?
            <Link to={el.link} className={isTab(el.name)}><div>{el.name}</div></Link> :
            <a href={el.link} className={isTab(el.name)}><div>{el.name}</div></a>
    }

    return (<div>
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <Link class="navbar-item" to="/">
                    <div id="topLeftLogo">
                        &lt;Portfolio /&gt;
                    </div>
                </Link>

                <button class={burgerClasses} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={toggleSandwich}>
                    <span aria-hidden="true" className="menuSpan"></span>
                    <span aria-hidden="true" className="menuSpan"></span>
                    <span aria-hidden="true" className="menuSpan"></span>
                </button>
            </div>

            <div id="navbarBasicExample" class={menuClasses}>


                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons navbar-itemitem">
                            {navbarPages.map(mapElToLink)}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
        
    );
}

export default Navbar;