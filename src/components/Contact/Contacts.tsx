import React from "react";
import c from "./Contact.module.css"
import {compose} from "redux";
import withQueryStringComponent from "../../hoc/withQueryString";
import withLoadingEffect from "../../hoc/withLoadingEffect/withLoadingEffect";
import {useSelector} from "react-redux";
import {getContactText} from "../../redux/contactSelectors";

const Contacts: React.FC = React.memo( () => {
    const contacts = useSelector(getContactText)
    return (
        <div className={c.contactContainer}>
            <div className={c.contentWrapper}>
                {contacts.map((m) => {
                    return(
                        <div key={m.id} className={c.contact}>
                            <a href={m.url}>
                                <img src={m.image} alt={m.name} className={c.clickableImg}/>
                            </a>
                            <a href={m.url}>{m.name}</a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
})


export default compose<React.ComponentType>(withQueryStringComponent, withLoadingEffect)(Contacts)