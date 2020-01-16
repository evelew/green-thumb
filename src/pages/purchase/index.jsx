import React, { useState } from 'react'

import history from 'common/browser-history'
import { isEmailValid } from 'common/helpers'

import PurchaseTemplate from 'containers/purchase-template'

import * as Styles from './styles'

export default function Purchase() {
  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [invalidEmail, setInvalidEmail] = useState(false)

  const onSubmit = e => {
    e.preventDefault()
    const isValid = isEmailValid(email)

    if (isValid === false) {
      return setInvalidEmail(true)
    }

    sendForm()
    goToNextRoute()
  }

  const sendForm = () => {
    console.log('send form')
  }

  const goToNextRoute = () => history.push('/purchase/thank-you')

  return (
    <PurchaseTemplate>
      <Styles.Contact>
        <Styles.ContactTitle>Nice pick!</Styles.ContactTitle>
        <Styles.ContactIntro>
          Tell us your name and e-mail and we will get in touch about your order
          ;)
        </Styles.ContactIntro>

        <form onSubmit={onSubmit}>
          <Styles.Label>
            <strong>Name</strong>
            <input
              value={name}
              type="text"
              name="name"
              placeholder="Crazy Plant Person"
              onChange={e => setName(e.target.value)}
            />
          </Styles.Label>

          <Styles.Label isInvalid={invalidEmail}>
            <strong>E-mail</strong>
            <input
              value={email}
              type="text"
              name="email"
              placeholder="plantperson@email.com"
              onChange={e => setEmail(e.target.value)}
            />
            {invalidEmail && (
              <Styles.MessageError>
                <span>!</span>Please provide a valid e-mail.
              </Styles.MessageError>
            )}
          </Styles.Label>

          <Styles.SubmitButton type="submit">send</Styles.SubmitButton>
        </form>
      </Styles.Contact>
    </PurchaseTemplate>
  )
}
