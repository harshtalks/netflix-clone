import React from 'react'
import {Container, Title, SubTitle} from './styles/feature'

const Feature = ({children, ...rest}) => {
    return (
        <Container {...rest}>
            {children}
        </Container>
    )
}

Feature.Title = function FeatureTitle({children,rest}) {
   return <Title {...rest}>
        {children}
    </Title>
}

Feature.SubTitle = function FeatureSubTitle({children,rest}) {
   return <SubTitle {...rest}>
        {children}
    </SubTitle>
}


export default Feature
