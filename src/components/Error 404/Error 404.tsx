import {getError404} from "../../redux/errorSelectors";
import {useSelector} from "react-redux";
import {getLanguage} from "../../redux/languageSelectors";
import e from "./Error404.module.css"
import {compose} from "redux";
import withQueryStringComponent from "../../hoc/withQueryString";
import withLoadingEffect from "../../hoc/withLoadingEffect/withLoadingEffect";
import React from "react";

const Error404: React.FC = React.memo(() => {
    const error404 = useSelector(getError404)
    const currentLanguage = useSelector(getLanguage)
    return (
        <div className={e.errorContainer}>
            <div className={e.contentWrapper}>
                <h1>{error404[currentLanguage]}</h1>
            </div>
        </div>
    )
})

export default compose<React.ComponentType>(withQueryStringComponent, withLoadingEffect)(Error404)