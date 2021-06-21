import React from "react";
import p from "./Portfolio.module.css"
import cn from "classnames"

type PropsType = {
    name: string,
    description: string,
    url: string,
    codeUrl: string,
    downloadUrl: string,
    id: number,
    notes: string[] | undefined
}

const ProjectInformation: React.FC<PropsType> = React.memo(({name, description, url, codeUrl, downloadUrl, id, notes}) => {
    return(
        <div className={p.portfolioProject}>
            <h1 className={cn(p.portfolioProjectItem, p.portfolioProjectName)}>{id}. {name}</h1>
            <span className={cn(p.portfolioProjectItem, p.portfolioProjectDescription)}>{description}</span>
            <a href={url} className={cn(p.portfolioProjectUrl)}>{url.substring(8)}</a>
            <a href={codeUrl} className={cn(p.portfolioProjectItem, p.portfolioProjectUrl)}>Code source: {codeUrl.substring(8)}</a>
            {downloadUrl && <a href={downloadUrl} className={cn(p.portfolioProjectItem, p.portfolioProjectUrl)}>Download</a>}
            {notes && notes.map((m, index) => <span key={index} className={p.portfolioProjectNote}>{m}</span>)}
        </div>
    )
})

export default ProjectInformation