function SocialsLinks () {
    return (
        <div id="socialsBox" className="box columns is-mobile is-centered is-multiline">
            <button className="button column socialsLinks is-two-thirds-mobile is-large" onClick={() => {window.location.href = "https://github.com/varunan-vara/my-resume/raw/main/Resume%20-%20Varunan%20Varathan.pdf"}}>My Resume</button>
            <button className="button column socialsLinks is-two-thirds-mobile is-large is-link" onClick={() => {window.location.href = "https://www.linkedin.com/in/varunan-varathan"}}>LinkedIn</button>
            <button className="button column socialsLinks is-two-thirds-mobile is-large is-black" onClick={() => {window.location.href = "https://github.com/varunan-vara"}}>GitHub</button>
        </div>
        // https://github.com/varunan-vara/my-resume/raw/main/Resume%20-%20Varunan%20Varathan.pdf
    )
}

export default SocialsLinks