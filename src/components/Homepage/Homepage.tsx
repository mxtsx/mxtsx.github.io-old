import {useSelector} from "react-redux";
import {getLanguage} from "../../redux/languageSelectors";
import {getHomePageText} from "../../redux/homepageSelectors";
import h from "./Homepage.module.css"
import React from "react";
import {compose} from "redux";
import withQueryStringComponent from "../../hoc/withQueryString";
import withLoadingEffect from "../../hoc/withLoadingEffect/withLoadingEffect";
import {getContactText} from "../../redux/contactSelectors";

const Homepage: React.FC = React.memo(() => {
    const currentLanguage = useSelector(getLanguage)
    const contacts = useSelector(getContactText)
    const text = useSelector(getHomePageText)
    return(
        <div className={h.homepageContainer}>
            <div className={h.contentWrapper}>
            <div className={h.text}>
                <div>
                    {text[currentLanguage].greeting}
                </div>
                <div>
                    {text[currentLanguage].description}
                </div>
            </div>
                <div className={h.links}>
                    {contacts.map(m => {
                        return (
                            <a key={m.id} href={m.url}>
                                <img src={m.image} alt={m.name}/>
                            </a>
                        )
                    })}
                </div>
            </div>
        </div>
    )
})

export default compose<React.ComponentType>(withQueryStringComponent, withLoadingEffect)(Homepage)