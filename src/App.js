import React, { Fragment, useContext, Suspense } from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo' 
import { Detail } from './pages/Detail'
import { Home } from './pages/Home'
import { Router, Redirect } from '@reach/router'
import { NavBar } from './components/NavBar'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import {Context} from './Context'
import { NotFound } from './pages/NotFound'

const Favs = React.lazy(() => import('./pages/Favs'));

export const App = () => {
    const { isAuth } = useContext(Context)
    return(
        <Suspense fallback={<div/>}>
            <GlobalStyle />
            <Logo/>
            <Router>
                <NotFound default/>
                <Home path='/'/>
                <Home path='/pet/:detailId'/>
                <Detail path='/detail/:detailId'/>
                {!isAuth && <NotRegisteredUser path='/login'/> }
                {!isAuth && <Redirect from='/favs' to='/login'/>}
                {!isAuth && <Redirect from='/user' to='/login'/>}
                {isAuth && <Redirect from='/login' to='/'/>}
                <Favs path='/favs'/>
                        <User path='/user'/>
            </Router>
            {/* {
                ({ isAuth }) => 
                    isAuth
                    ?<Router>
                        <Favs path='/favs'/>
                        <User path='/user'/>
                    </Router>
                    :<Router>
                        <NotRegisteredUser path='/favs'/>
                        <NotRegisteredUser path='/user'/>
                    </Router>  
            } */}
                
            <NavBar/>
        </Suspense>
    )
}
