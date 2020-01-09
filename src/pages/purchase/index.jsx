import React from 'react'

import Header from 'components/header'
import PlantDetails from 'containers/plant-details'

import * as Styles from './styles'

export default function Purchase() {
  return (
    <Styles.Container>
      <Styles.PlantDetails>
        <Header />
        <PlantDetails />
      </Styles.PlantDetails>

      <Styles.Contact>
        <Styles.ContactTitle>Nice pick!</Styles.ContactTitle>
        <Styles.ContactIntro>
          Tell us your name and e-mail and we will get in touch about your order
          ;)
        </Styles.ContactIntro>

        <form>
          <Styles.Label>
            <strong>Name</strong>
            <input type="text" name="name" placeholder="Crazy Plant Person" />
          </Styles.Label>

          <Styles.Label>
            <strong>E-mail</strong>
            <input
              type="email"
              name="email"
              placeholder="plantperson@email.com"
            />
          </Styles.Label>

          <Styles.SubmitButton type="submit">send</Styles.SubmitButton>
        </form>
      </Styles.Contact>
    </Styles.Container>
  )
}
