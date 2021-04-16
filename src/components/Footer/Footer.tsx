import React from "react";
import f from "./Footer.module.css"

const Footer: React.FC = React.memo(() => {
    return(
        <div className={f.footer}>
                <span className={f.copyright}>
                    <span className={f.copyrightIcon}>&copy;</span> 2021
                </span>
        </div>
    )
})

export default Footer