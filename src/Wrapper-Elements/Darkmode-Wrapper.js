// A Wrapper that changes the classname based on whether it is darkmode or not
function Darkmode_Wrapper (props) {
    if (props.isDarkMode == true) {
        var cClass = "darkmode"
    } else {var cClass = "lightmode"}
    // cClass will affect which root values are applied from CSS
    return (
        <div className={cClass}>
            {props.children}
        </div>
    )
} 

export default Darkmode_Wrapper;