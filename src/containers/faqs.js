import faqsData from '../fixtures/faqs.json'
import { Accordian } from '../components'

import React from 'react'
import {OptForm} from '../components'

const FAQContainer = () => {
    return (
        <Accordian>
            <Accordian.Title>
                Frequently Asked Questions
            </Accordian.Title>
            {faqsData.map(el => (
                <Accordian.Item key = {el.id}>
                    <Accordian.Header>
                        {el.header}
                    </Accordian.Header>
                    <Accordian.Body>
                        {el.body}
                    </Accordian.Body>
                </Accordian.Item>
            ))}
            <Accordian.Item />
            <OptForm>
                <OptForm.Input placeholder = "Email Address" />
                <OptForm.Button>Try it Now</OptForm.Button>
                <OptForm.Break />
                <OptForm.Text>Ready to watch? Enter your email to create or restart your membership</OptForm.Text>
            </OptForm>
        </Accordian>
    )
}

export default FAQContainer
