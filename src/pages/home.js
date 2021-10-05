import React from 'react'
import FooterContainer from "../containers/footer";
import { OptForm,Feature } from '../components';
import JumbotronContainer from "../containers/jumbotron";
import FAQContainer from "../containers/faqs";
import HeaderContainer from '../containers/header';
const Home = () => {
    return (
        <>
             <HeaderContainer>
                <Feature>
                    <Feature.Title>
                        Unlimited films, TV programmes and more.
                    </Feature.Title>
                    <Feature.SubTitle>
                        Watch anytime, Cancel at anytime
                    </Feature.SubTitle>
                    {/* //OptForm
                     */}
                     <OptForm>
                <OptForm.Input placeholder = "Email Address" />
                <OptForm.Button>Try it Now</OptForm.Button>
                <OptForm.Break />
                <OptForm.Text>Ready to watch? Enter your email to create or restart your membership</OptForm.Text>
            </OptForm>
                </Feature>
                
             </HeaderContainer>
             <JumbotronContainer />
             <FAQContainer />
             <FooterContainer />
        </>
    )
}

export default Home
