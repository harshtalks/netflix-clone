import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { createContext, useContext } from 'react/cjs/react.development'

import {
    Container,
    Button,
    Overlay,
    Inner,
    Close,
    Video
} from './style/player'

export const PlayerContext = createContext()

const Player = ({children,...rest}) => {
    const [showPlayer, setShowPlayer] = useState(false)



    return (
        <PlayerContext.Provider value = {{showPlayer,setShowPlayer}}>
            <Container {...rest}>
                {children}
            </Container>
        </PlayerContext.Provider>
    )

}

Player.Video = function PlayerVideo({src, ...rest}){
    const {showPlayer, setShowPlayer} = useContext(PlayerContext)

    return showPlayer ? ReactDOM.createPortal(
        <Overlay onClick = {() => setShowPlayer(false)} {...rest}>
            <Inner>
                <video id = "netflix-player" controls>
                    <source src = {src} type = "video/mp4" />
                </video>
                <Close />
            </Inner>
        </Overlay>, document.body
    ) : null;

}

Player.Button = function PlayerButton({...rest}){
    const {showPlayer, setShowPlayer} = useContext(PlayerContext)

    return (
        <Button onClick = {() => setShowPlayer(showPlayer => !showPlayer)}>
            Play
        </Button>
    )

}

export default Player
