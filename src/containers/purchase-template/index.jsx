import React from 'react'

import Header from 'components/header'
import DesktopLogo from 'components/desktop-logo'
import PlantDetails from 'containers/plant-details'

import * as Styles from './styles'

export default function PurchaseTemplate({ children }) {
  return (
    <Styles.PageContent>
      <Styles.Container>
        <DesktopLogo style={{ top: '440px' }} />
        
        <Styles.WhiteBackground>
          <Header />
          <PlantDetails />
        </Styles.WhiteBackground>
      </Styles.Container>

      <Styles.GrayBackground>
        <Styles.Container>{children}</Styles.Container>
      </Styles.GrayBackground>
    </Styles.PageContent>
  )
}
