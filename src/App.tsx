import React, {useEffect, useState} from 'react';
import s from "./App.module.css"
import Preloader from "./components/common/Preloader/Preloader";
import Header from "./components/Header/Header";
import {Route, Switch} from "react-router-dom";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contacts from "./components/Contact/Contacts";
import Homepage from "./components/Homepage/Homepage";
import Error404 from "./components/Error 404/Error 404";
import Footer from "./components/Footer/Footer";

const App: React.FC = React.memo(() => {
    const [isReady, setIsReady] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setIsReady(true)
        }, 1500)
    }, [])

    if (!isReady) {
        return <Preloader />
    }
    return (
        <div className={s.contentWrapper}>
            <Header/>
            <main className={s.main}>
                <Switch>
                    <Route path={'/about'} render={() => <About/>}/>
                    <Route path={'/portfolio'} render={() => <Portfolio/>}/>
                    <Route path={'/contacts'} render={() => <Contacts/>}/>
                    <Route exact path={'/'} render={() => <Homepage/>}/>
                    <Route path={"*"} render={() => <Error404/>}/>
                </Switch>
            </main>
            <Footer/>
        </div>
    );
})

export default App;
