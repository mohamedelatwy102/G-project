import React, { useState } from "react";



const Congrate = () => {
    return (
        <div className="resualt">
            <lottie-player
                src="https://assets7.lottiefiles.com/packages/lf20_l4xxtfd3.json"
                background="transparent"
                speed="1"
                style={{ width: "100%", height: "80vh" }}
                loop autoplay>
            </lottie-player>
            <h2 className="res_test">The body is free of diabetes</h2>
        </div>
    )
}
const Sorry = () => {
    return (
        <div className="resualt">
            <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_zpjfsp1e.json" background="transparent"
                speed="1"
                style={{ width: "100%", height: "80vh" }}
                loop autoplay></lottie-player>
            <h2 className="res_test">The body contains diabetes</h2>
        </div>
    )
}


const Resualt = () => {
    const [Diabetes, setDiabetes] = useState(true)
    return (
        <React.Fragment>
            {Diabetes ? <Congrate /> : <Sorry />}
        </React.Fragment>
    );
}

export default Resualt;