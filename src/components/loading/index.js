import React from 'react'
import { Spinner, LockBody, Picture , ReleaseBody } from './style/loading'

const Loading = ({src, ...rest}) => {
    return (
        <Spinner {...rest}>
            <LockBody />
            <Picture src = {`images/users/${src}.png`} />
        </Spinner>
    )
}

Loading.ReleaseBody = function LoadingReleaseBody( ) {
    return <ReleaseBody />
}

export default Loading
