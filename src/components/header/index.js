import React,{useState} from 'react'
import { Link as ReactRouterLink} from 'react-router-dom'

import {Background, Container,SearchInput, PlayButton, SearchIcon, Search, Logo, ButtonLink, DropDown,Group, Feature, Text, FeatureCallOut, Link, Picture, Profile} from './styles/header'

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

Header.PlayButton = function HeaderPlayButton({children, ...restProps}) {
    return <PlayButton {...restProps}>{children}</PlayButton>
}

Header.Picture = function HeaderPicture({src, ...rest}){
    return <Picture {...rest} src = {`images/users/${src}.png`} />
}


Header.Search = function HeaderSearch({serachTerm, setSearch, ...rest}) {
    const [searchActive, setSearchActive] = useState(false);

    return <Search {...rest}>
        <SearchIcon onClick = {() => setSearchActive(searchActive=>!searchActive)}>
            <img src = '/images/icons/search.png' alt = 'search' />
        </SearchIcon>
        <SearchInput
        alue = {serachTerm} 
            onChange = {(e) => setSearch(e.target.value)}
            placeholder = 'search films and series'
            active = {searchActive}
        >
        </SearchInput>
    </Search>
}

Header.ButtonLink = function HeaderButtonLink({children, ...restProps}) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>
}

Header.Text = function HeaderText({children, ...rest}){
    return <Text {...rest}>
        {children}
    </Text>
}

Header.DropDown = function HeaderText({children, ...rest}){
    return <DropDown {...rest}>
        {children}
    </DropDown>
}

Header.TextLink = function HeaderTextLink({children, ...rest}){
    return <Link {...rest}>
        {children}
    </Link>
}

Header.Profile = function HeaderProfile({children, ...rest}){
    return <Profile {...rest}>
        {children}
    </Profile>
}

Header.Logo =  function HeaderLogo({to, ...rest}){
   return <ReactRouterLink to = {to}>
        <Logo {...rest} />
    </ReactRouterLink>
}



export default Header
