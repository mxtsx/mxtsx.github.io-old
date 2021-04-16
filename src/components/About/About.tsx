import {useSelector} from "react-redux";
import {getLanguage} from "../../redux/languageSelectors";
import {getAboutText} from "../../redux/aboutSelectors";
import {compose} from "redux";
import withQueryStringComponent from "../../hoc/withQueryString";
import React from "react";
import a from "./About.module.css"
import withLoadingEffect from "../../hoc/withLoadingEffect/withLoadingEffect";

const About: React.FC = React.memo(() => {
    const currentLanguage = useSelector(getLanguage)
    const text = useSelector(getAboutText)
    return(
        <div className={a.aboutContainer}>
            <div className={a.contentWrapper}>
                <h1 className={a.title}>{text[currentLanguage].title}</h1>
                {text[currentLanguage].description.map((m, index) => {
                    return(
                        <span key={index} className={a.text}>{m}</span>
                    )
                })}
            </div>
        </div>
    )
})

export default compose<React.ComponentType>(withQueryStringComponent, withLoadingEffect)(About)