import {NavLink, useLocation} from "react-router-dom";
import s from "./Header.module.css";
import React, {Dispatch, SetStateAction, useEffect, useMemo, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getLanguage} from "../../redux/languageSelectors";
import {getCurrentPageTitle, getHeaderText} from "../../redux/headerSelectors";
import cn from "classnames"
import LanguageSelectForm from "./LanguageSelectForm";
import collapseMinus from "../../collapse_minus.svg"
import collapsePlus from "../../collapse_plus.svg"
import {actions} from "../../redux/headerReducer";
import {Helmet} from "react-helmet";
import {getError} from "../../redux/errorSelectors";

type TextType = { title: { eng: string; ukr: string; rus: string; cz: string; hr: string; }; path: string; id: number; }[]

const Header: React.FC = React.memo(() => {
    const [isOpen, setIsOpen] = useState(false)
    const text = useSelector(getHeaderText)
    const currentPage: Array<string> = useMemo(() => [], [])
    return (
        <header className={cn(s.header,
            isOpen && s.headerOpened)}>
            <Title text={text} currentPage={currentPage}/>
            <div className={s.logo}>
                <div className={s.name}>Maksym Stepanets</div>
                <div className={s.level}>Junior React Developer</div>
            </div>
            <button className={s.collapseButton} onClick={() => setIsOpen(!isOpen)}>
                {isOpen ?
                    <img src={collapseMinus} alt="collapseMinus"/> :
                    <img src={collapsePlus} alt="collapsePlus"/>}
            </button>
            <HeaderNavbar setIsOpen={setIsOpen} text={text}
                          currentPage={currentPage} />
        </header>
    )
})

const Title: React.FC<{text: TextType, currentPage: Array<string>}> = React.memo(({text, currentPage}) => {
    const currentLanguage = useSelector(getLanguage)
    const dispatch = useDispatch()
    const location = useLocation()
    const page = useSelector(getCurrentPageTitle)
    const error = useSelector(getError)
    const currentLocation = location.pathname

    useEffect(() => {
        if (!text.some(el => el.path === currentLocation)) {
            dispatch(actions.setCurrentPage(error[currentLanguage]))
        } else {
            dispatch(actions.setCurrentPage(currentPage[currentPage.length - 1]))
        }
    }, [currentPage, currentLanguage, error, dispatch, text, currentLocation])

    return(
        <Helmet>
            <title>{ page }</title>
        </Helmet>
    )
})

const HeaderNavbar: React.FC<{setIsOpen: Dispatch<SetStateAction<boolean>>, text: TextType, currentPage: Array<string>}> = React.memo(({setIsOpen, text, currentPage}) => {
    const currentLanguage = useSelector(getLanguage)
    return(
        <nav className={cn(s.nav,
            {[s.navWidth360]: currentLanguage === "eng"},
            {[s.navWidth370]: currentLanguage === "cz"},
            {[s.navWidth400]: currentLanguage === "hr"},
            {[s.navWidth460]: currentLanguage === "rus"},
            {[s.navWidth460]: currentLanguage === "ukr"})}
        >
            <LanguageSelectForm />
            {text.map((m) => {
                return(
                    <NavLink onClick={() => setIsOpen(false)}
                             key={m.id} exact to={m.path}
                             isActive={(match) => {
                                 match && currentPage.push(m.title[currentLanguage])
                                 return !!match
                             }}
                             activeClassName={s.active}>
                        {m.title[currentLanguage]}
                    </NavLink>
                )
            })}
        </nav>
    )
})


export default Header