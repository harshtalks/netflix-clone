import React from 'react'
import { Header } from '../components'
import logo from '../logo.svg'
import * as ROUTES from '../constants/routes'

const HeaderContainer = ({children}) => {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo alt = "netflix" src = {logo} to = {ROUTES.HOME}/>
                <Header.ButtonLink to = {ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    )
}

export default HeaderContainer
