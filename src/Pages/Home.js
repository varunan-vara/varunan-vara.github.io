// Imports
import "../styles.css";
import Navbar from "../Components/Navbar";
import TitleBlock from "../Components/Titleblock";
import { DesktopAboutMeBox  } from "../Components/AboutMeBox";
import SocialsLinks from "../Components/SocialsLinks";
import QuickProjectPanel from "../Components/QuickProjectPanel";


function HomePage() {
    return (
        <div className = "mainBodyElement">
            <Navbar mainPageName="Home"/>
            <TitleBlock />
            <DesktopAboutMeBox />
            <SocialsLinks />
            <QuickProjectPanel />
            <div id="bottom"></div>
        </div>
    )
}

export default HomePage