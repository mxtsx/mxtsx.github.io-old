import React, {useLayoutEffect, useState} from "react";
import c from "./withLoadingEffect.module.css"

function withLoadingEffect<WCP> (Component: React.ComponentType<WCP>) {
    return React.memo((props: WCP) => {
        const [isLoaded, setIsLoaded] = useState(false)
        useLayoutEffect(() => {
            setTimeout(() => {
                setIsLoaded(true)
            })
        }, [])
        return (
            <div className={isLoaded ? c.componentVisible : c.componentInvisible}>
                <Component {...props} />
            </div>
        )
    })
}

export default withLoadingEffect