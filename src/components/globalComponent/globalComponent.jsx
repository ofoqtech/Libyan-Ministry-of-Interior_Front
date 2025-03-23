export function GlobalContainer({text = '', header = ""}) {

    return (
        <div className="global-container" style={{ backgroundImage: `url('/assets/linear-background.png    ')` }}>
            <div className="container">
                <div className="text" style={{ paddingTop: "170px" }}>
                    <h1 className="title text-white ">
                        {text}
                    </h1>
                    <span className="news text-white text-light fw-light" style={{ fontSize: "14px" }}>{header}</span>
                </div>


            </div>
        </div>
    );
}
