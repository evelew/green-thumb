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
        <Styles.PlantDetails>
          <Header />
          <PlantDetails />
        </Styles.PlantDetails>
      </Styles.Container>

      <Styles.WrapperBottomContent>
        <Styles.Container>{children}</Styles.Container>
      </Styles.WrapperBottomContent>
    </Styles.PageContent>
  )
}
