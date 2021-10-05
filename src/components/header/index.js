import React from 'react'
import { Link as ReactRouterLink} from 'react-router-dom'

import {Background, Container, Logo, ButtonLink} from './styles/header'

const Header = ({bg  = true, children, ...rest}) => {
    return (
        bg ? <Background {...rest}>{children}</Background> : children
    )
}

Header.Frame = function HeaderFrame({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Header.ButtonLink = function HeaderButtonLink({children, ...restProps}) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>
}

Header.Logo =  function HeaderLogo({to, ...rest}){
   return <ReactRouterLink to = {to}>
        <Logo {...rest} />
    </ReactRouterLink>
}

export default Header
