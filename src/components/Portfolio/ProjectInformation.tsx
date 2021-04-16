import React from "react";
import p from "./Portfolio.module.css"
import cn from "classnames"

type PropsType = {
    name: string,
    description: string,
    url: string,
    id: number,
    notes: string[] | undefined
}

const ProjectInformation: React.FC<PropsType> = React.memo(({name, description, url, id, notes}) => {
    return(
        <div className={p.portfolioProject}>
            <h1 className={cn(p.portfolioProjectItem, p.portfolioProjectName)}>{id}. {name}</h1>
            <span className={cn(p.portfolioProjectItem, p.portfolioProjectDescription)}>{description}</span>
            <a href={url} className={cn(p.portfolioProjectItem, p.portfolioProjectUrl)}>{url.substring(8)}</a>
            {notes && notes.map((m, index) => <span key={index} className={p.portfolioProjectNote}>{m}</span>)}
        </div>
    )
})

export default ProjectInformation