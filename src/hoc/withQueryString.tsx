import {useDispatch, useSelector} from "react-redux";
import {getLanguage} from "../redux/languageSelectors";
import {useHistory} from "react-router-dom";
import React, {useEffect} from "react";
import queryString from "querystring";
import {actions, LanguageType} from "../redux/languageReducer";

type QueryStringType = {lang?: LanguageType}

function withQueryStringComponent<WCP> (Component: React.ComponentType<WCP>) {
    return (props: WCP) => {
        const currentLanguage = useSelector(getLanguage)
        const history = useHistory()
        const dispatch = useDispatch()
        useEffect(() => {
            const actualQueryString = history.location.search.split('?')[0];
            const query: QueryStringType = {}
            query.lang = currentLanguage
            if(history.location.pathname + history.location.search === `${history.location.pathname}?${queryString.stringify(query)}`){
                return
            }
            history.push({
                pathname: actualQueryString,
                search: queryString.stringify(query)
            })
            // eslint-disable-next-line
        }, [currentLanguage, history.location.search])
        useEffect(() => {
            const parsed = queryString.parse(history.location.search.substring(1)) as QueryStringType
            let actualLanguage = parsed.lang as LanguageType
            dispatch(actions.languageChanged(actualLanguage))
            // eslint-disable-next-line
        }, [])
        return <Component {...props} />
    }
}

export default withQueryStringComponent