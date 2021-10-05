import React, {useState, useContext} from 'react'
import { useHistory } from 'react-router-dom';
import HeaderContainer from '../containers/header';
import {FirebaseContext} from '../context/firebase'
import FooterContainer from "../containers/footer";
import { Form } from '../components';
import * as ROUTES from '../constants/routes'
const SignIn = () => {
    const history = useHistory()
    const {firebase} = useContext(FirebaseContext)
    const [email,setEmail] = useState('')
    const [pass,setPass] = useState('')
    const [error, setError] = useState('')

    //checking form validations
    //email and password   

    const isInvalid = pass === '' || email === '';
    const handleSignIn = (event) => {
        event.preventDefault()


        //firebase works here
        firebase.auth().signInWithEmailAndPassword(email,pass)
        .then((res) => {
            history.push(ROUTES.BROWSE)
            
        }).catch(err => {
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
                    Sign In
                </Form.Title>
                {error && 
                    <Form.Error>
                        {error}
                    </Form.Error>
                }
                <Form.Base onSubmit = {handleSignIn} method = "POST"> 
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
                    New to Netflix? <Form.Link to = "/signup">Sign up Now.</Form.Link>
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

export default SignIn
