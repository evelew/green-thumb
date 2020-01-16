import React from 'react'

import EnvelopImage from 'assets/images/envelop.png'

import PurchaseTemplate from 'containers/purchase-template'
import * as Styles from './styles'

export default function PurchaseThankYou() {
  return (
    <PurchaseTemplate>
      <Styles.MessageWrapper>
        <Styles.Title>Thank you!</Styles.Title>
        <Styles.Message>
          You will hear from us soon. Please check yout e-mail!
        </Styles.Message>

        <Styles.ImageWrapper>
          <img src={EnvelopImage} alt="" />
        </Styles.ImageWrapper>
      </Styles.MessageWrapper>
    </PurchaseTemplate>
  )
}
