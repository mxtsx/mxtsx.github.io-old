import {NavLink} from "react-router-dom";
import s from "./Header.module.css";
import React, {useState} from "react";
import {useSelector} from "react-redux";
import {getLanguage} from "../../redux/languageSelectors";
import {getHeaderText} from "../../redux/headerSelectors";
import cn from "classnames"
import LanguageSelectForm from "./LanguageSelectForm";
import collapseMinus from "../../collapse_minus.svg"
import collapsePlus from "../../collapse_plus.svg"

const Header: React.FC = React.memo(() => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <header className={cn(s.header,
            isOpen && s.headerOpened)}>
            <div className={s.logo}>
                <div className={s.name}>Maksym Stepanets</div>
                <div className={s.level}>Junior React Developer</div>
            </div>
            <button className={s.collapseButton} onClick={() => setIsOpen(!isOpen)}>
                {isOpen ?
                    <img src={collapseMinus} alt="collapseMinus"/> :
                    <img src={collapsePlus} alt="collapsePlus"/>}
            </button>
            <HeaderNavbar />
        </header>
    )
})

const HeaderNavbar: React.FC = React.memo(() => {
    const currentLanguage = useSelector(getLanguage)
    const text = useSelector(getHeaderText)
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
                    <NavLink key={m.id} exact to={m.path} activeClassName={s.active}>
                        {m.title[currentLanguage]}
                    </NavLink>
                )
            })}
        </nav>
    )
})


export default Header