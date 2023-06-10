function ChildBox () {
    return (
        <article className="tile is-child box">

        </article>
    )
}


function QuickProjectPanel() {
    return (
        <div className="box projectPanel">
            <section className="section">
                <h1 className="title">Recent Projects</h1>
            </section>
            <section className="section">
                <div className="projectPanel tile is-ancestor is-vertical is-center">
                    <div className="tile is-parent is-12">
                        <ChildBox />
                    </div>
                    <div className="tile is-12">
                        <div className="tile is-parent is-8">
                            <ChildBox />
                        </div>
                        <div className="tile is-parent is-4">
                            <ChildBox />
                        </div>
                    </div>
                    <div className="tile is-12">
                        <div className="tile is-parent is-4">
                            <ChildBox />
                        </div>
                        <div className="tile is-parent is-8">
                            <ChildBox />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default QuickProjectPanel