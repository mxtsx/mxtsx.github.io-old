import preloader from "./preloader.svg"
import React from "react";

const Preloader: React.FC = React.memo(() => {
    return(
        <div>
            <img src={preloader} alt="Preloader"/>
        </div>
    )
})

export default Preloader