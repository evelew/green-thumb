import React, { useState } from 'react'

import history from 'common/browser-history'
import { useStateValue } from 'store'
import { buyPlant } from 'api'

import PurchaseTemplate from 'containers/purchase-template'

import * as Styles from './styles'

export default function Purchase() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [invalidEmail, setInvalidEmail] = useState(false)
  const [invalidName, setInvalidName] = useState(false)
  const [{ plant }] = useStateValue()

  const onSubmit = async e => {
    e.preventDefault()

    setInvalidEmail(false)
    setInvalidName(false)

    try {
      const data = {
        name,
        email,
        id: plant.id
      }

      await buyPlant(data)

      goToNextRoute()
    } catch (err) {
      const { error } = err.response.data

      if (error === 'Invalid Email' || email.length === 0) {
        setInvalidEmail(true)
      }

      if (name.split(' ').length <= 1) {
        setInvalidName(true)
      }
    }
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
          <Styles.Label isInvalid={invalidName}>
            <strong>Name</strong>
            <input
              value={name}
              type="text"
              name="name"
              placeholder="Crazy Plant Person"
              onChange={e => setName(e.target.value)}
            />
            {invalidName && (
              <Styles.MessageError>
                <span>!</span>Please provide your complete name.
              </Styles.MessageError>
            )}
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
