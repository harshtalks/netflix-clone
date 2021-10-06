
import React, {useState, useContext} from 'react'
import { useHistory } from 'react-router-dom';
import HeaderContainer from '../containers/header';
import {FirebaseContext} from '../context/firebase'
import FooterContainer from "../containers/footer";
import { Form } from '../components';
import * as ROUTES from '../constants/routes'

const SignUp = () => {
    const history = useHistory()
    const {firebase} = useContext(FirebaseContext)
    const [firstname,setFirstname] = useState('')
    const [email,setEmail] = useState('')
    const [pass,setPass] = useState('')
    const [error, setError] = useState('')
    const isInvalid = firstname === '' || pass === '' || email === '';

    const handleSignUp = (e) => {
        e.preventDefault();


        //firebase stuff
        firebase.auth()
        .createUserWithEmailAndPassword(email,pass)
        .then((result) => {
            return result.user.updateProfile({
                displayName: firstname,
                photoURL: Math.floor(Math.random() * 5) + 1
            }).then(() => {
                history.push(ROUTES.BROWSE)
            })
        }).catch(err => {
            setFirstname("")
            setPass("")
            setEmail("")
            setError(err.message)
        })

    }
    
    return (
        <>
        
            <HeaderContainer>
            <Form>
                <Form.Title>
                    Sign Up
                </Form.Title>
                {error && 
                    <Form.Error>
                        {error}
                    </Form.Error>
                }
                <Form.Base onSubmit = {handleSignUp} method = "POST"> 
                <Form.Input 
                   placeholder = "First Name"
                   type = "text" 
                   value = {firstname}
                   onChange = {({target}) => setFirstname(target.value)}
                   />
                   <Form.Input 
                   placeholder = "Email Address"
                   type = "email" 
                   value = {email}
                   onChange = {({target}) => setEmail(target.value)}
                   />
                   <Form.Input 
                   type = "password"
                   placeholder = "Password"
                   autoComplete = "off"
                   value = {pass}
                   onChange = {({target}) => setPass(target.value)}
                   />
                   <Form.Submit disabled = {isInvalid} type = "submit">
                       Sign In
                   </Form.Submit>
                </Form.Base>

                <Form.Text>
                    Already have an account? <Form.Link to = "/signin">Sign In Now.</Form.Link>
                </Form.Text>
                <Form.Text>
                    This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn More
                </Form.Text>
            </Form>

        </HeaderContainer>
        <FooterContainer />
        
        </>
    )
}

export default SignUp
