import React, { useContext, useState, useEffect } from 'react'
import ProfileContainer from './profile'
import { FirebaseContext } from '../context/firebase'
import { Loading } from '../components'
import { Header } from '../components'
import * as ROUTES from '../constants/routes'
import logo from  '../logo.svg'

const BrosweContainer = ({slides}) => {
    const {firebase} = useContext(FirebaseContext)
    const [profile,setProfile] = useState({})
    const [loading,setLoading] = useState(true)
    const user = firebase.auth().currentUser || {}

    useEffect(() => {
        console.log(profile)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    },[profile.displayName])


    return (
        profile.displayName ? (
            <>
            {
                loading ? <Loading src = {user.photoURL} /> : ( 
                <Loading.ReleaseBody /> 
                )
            }
            <Header src = "joker1" dontShowOnSmall>
                <Header.Frame>
                    <Header.Group>
                    <Header.Logo to = {ROUTES.HOME} src = {logo} alt = "Netflix" />
                    <Header.TextLink>Series</Header.TextLink>
                    <Header.TextLink>Films</Header.TextLink>
                    </Header.Group>
                    <Header.Group>
                        <Header.Profile>
                            <Header.Picture src = {user.photoURL} />
                            <Header.Dropdown>
                                <Header.Group>
                                    <Header.Picture src = {user.photoURL} />
                                    <Header.TextLink>{user.displayName}</Header.TextLink>
                                </Header.Group>
                            </Header.Dropdown>
                        </Header.Profile>
                    </Header.Group>
                </Header.Frame>
                <Header.Feature>
                    <Header.FeatureCallOut>
                        Watch Joker Now
                    </Header.FeatureCallOut>
                    <Header.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis doloremque in deserunt aut? Voluptatibus, neque molestias. Reiciendis, ab accusantium. Aperiam illum quaerat modi voluptate nemo enim vero tempore itaque aliquid.
                        Ad aliquam explicabo quaerat! Illum, autem totam labore ad dignissimos eum ducimus sint numquam cum minima. Voluptate, sapiente magni suscipit hic consectetur sint quo, ad molestiae deserunt saepe aut doloremque.
                    </Header.Text>
                </Header.Feature>
            </Header>
            </>
        ) : (
            <ProfileContainer user = {user} setProfile = {setProfile}/>
        )
    )
}

export default BrosweContainer
//tomorrow from 6:03:46

