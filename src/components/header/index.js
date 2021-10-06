import React from 'react'
import { Link as ReactRouterLink} from 'react-router-dom'

import {Background, Container, Logo, ButtonLink, Group, Feature, Text, FeatureCallOut, Link} from './styles/header'

const Header = ({bg  = true, children, ...rest}) => {
    return (
        bg ? <Background {...rest}>{children}</Background> : children
    )
}

Header.Feature = function HeaderFeature({children, ...rest}) {
    return <Feature {...rest}>
        {children}
    </Feature>
}


Header.FeatureCallOut = function HeaderFeatureCallOut({children,...rest}){
    return <FeatureCallOut {...rest}>
        {children}
    </FeatureCallOut>
}

Header.Frame = function HeaderFrame({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Header.Group = function HeaderGroup({children, ...restProps}) {
    return <Group {...restProps}>{children}</Group>
}


Header.ButtonLink = function HeaderButtonLink({children, ...restProps}) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>
}

Header.Text = function HeaderText({children, ...rest}){
    return <Text {...rest}>
        {children}
    </Text>
}

Header.TextLink = function HeaderTextLink({children, ...rest}){
    return <Link {...rest}>
        {children}
    </Link>
}

Header.Logo =  function HeaderLogo({to, ...rest}){
   return <ReactRouterLink to = {to}>
        <Logo {...rest} />
    </ReactRouterLink>
}

export default Header
