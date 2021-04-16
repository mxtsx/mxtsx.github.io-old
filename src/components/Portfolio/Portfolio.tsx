import {useSelector} from "react-redux";
import {getLanguage} from "../../redux/languageSelectors";
import {getPortfolioText} from "../../redux/portfolioSelectors";
import p from "./Portfolio.module.css"
import ProjectInformation from "./ProjectInformation";
import {compose} from "redux";
import withQueryStringComponent from "../../hoc/withQueryString";
import React from "react";
import withLoadingEffect from "../../hoc/withLoadingEffect/withLoadingEffect";

const Portfolio: React.FC = React.memo(() => {
    const currentLanguage = useSelector(getLanguage)
    const text = useSelector(getPortfolioText)
    return (
        <div className={p.portfolioContainer}>
            <div className={p.contentWrapper}>
                {text[currentLanguage].map((m, index) =>
                    <ProjectInformation key={index} name={m.name} description={m.description} url={m.url} id={m.id} notes={m.notes}/>)}
            </div>
        </div>
    )
})

export default compose<React.ComponentType>(withQueryStringComponent, withLoadingEffect)(Portfolio)