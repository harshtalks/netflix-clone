import React , {createContext, useContext, useState} from 'react'
import {Title, Container, Frame, Header, Item, Body, Inner} from './styles/accordian'

const ToggleContext = createContext()

const Accordian = ({children, ...rest}) => {
    return (
        <Container {...rest}>
            <Inner>
                {children}
            </Inner>
        </Container>
    )
}

export default Accordian


Accordian.Title = function AccodianTitle({children, ...rest}) {
    return <Title {...rest}>{children}</Title>
}

Accordian.Frame = function AccodianFrame({children, ...rest}) {
    return <Frame {...rest}>{children}</Frame>
}

Accordian.Item = function AccodianItem({children, ...rest}) {
    const [toggleShow, setToggleShow] = useState(false)
 
   return <ToggleContext.Provider value = {{toggleShow,setToggleShow}} >
     <Item {...rest}>{children}</Item>
    </ToggleContext.Provider>
}

Accordian.Header = function AccodianHeader({children, ...rest}) {

    const {toggleShow, setToggleShow} = useContext(ToggleContext)
    return (
    <Header onClick = {() => setToggleShow((toggleShow) => !toggleShow)}
    {...rest}>
    {children}
    {toggleShow ? (
        <img 
            src = "/images/icons/close-slim.png" 
            alt = "close"
        />
    ) : (
        (
        <img 
            src = "/images/icons/add.png" 
            alt = "opened"
        />
    )
    )}
        </Header>
     )
}

Accordian.Body = function AccordianBody({children, ...rest}) {

    const {toggleShow} = useContext(ToggleContext)
    return (
        toggleShow ? <Body 
    {...rest}>{children}</Body> : null
    )
}