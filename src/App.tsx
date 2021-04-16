import React from 'react';
import s from './App.module.css';
import Header from "./components/Header/Header";
import Homepage from "./components/Homepage/Homepage";
import {Route, Switch} from "react-router-dom";
import Portfolio from "./components/Portfolio/Portfolio";
import Contacts from "./components/Contact/Contacts";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Error404 from "./components/Error 404/Error 404";


const App: React.FC = React.memo(() => {
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
