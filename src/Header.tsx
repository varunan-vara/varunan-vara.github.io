import * as React from 'react';
import './App.css';

interface linkinfo {
    name: string,
    link: string
}

interface headerinfo {
    title: string,
    tabs: [
        linkinfo, 
        linkinfo, 
        linkinfo, 
        linkinfo,
    ]
}

const Header: React.FC<headerinfo> = (props: headerinfo) => (
    <div className="main-container" id="header-main">
        <h1 id="main-page-title" className="title">{props.title}</h1>
        <ul className="navbar">
            <li className="navli">
                <a className="nava" href={props.tabs[0].link}>{props.tabs[0].name}</a>
            </li>
            <li className="navli">
                <a className="nava" href={props.tabs[1].link}>{props.tabs[1].name}</a>
            </li>
            <li className="navli">
                <a className="nava" href={props.tabs[2].link}>{props.tabs[2].name}</a>
            </li>
            <li className="navli">
                <a className="nava" href={props.tabs[3].link}>{props.tabs[3].name}</a>
            </li>
        </ul>
    </div>
);

export default Header;