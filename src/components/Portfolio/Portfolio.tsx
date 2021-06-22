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
                {text.map((m: any, index) => {
                    console.log(m)
                    return(
                        <ProjectInformation
                            key={index}
                            name={m.name[currentLanguage]}
                            description={m.description[currentLanguage]}
                            codeUrl={m.codeUrl}
                            url={m.url}
                            downloadUrl={m.downloadUrl}
                            id={m.id}
                            notes={m.notes && m.notes[currentLanguage]}
                        />
                    )
                })}
            </div>
        </div>
    )
})

export default compose<React.ComponentType>(withQueryStringComponent, withLoadingEffect)(Portfolio)