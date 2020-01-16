import React from 'react'

import Header from 'components/header'
import DesktopLogo from 'components/desktop-logo'
import PlantDetails from 'containers/plant-details'

import * as Styles from './styles'

export default function PurchaseTemplate({ bottomContent: BottomContent }) {
  return (
    <Styles.PageContent>
      <Styles.Container>
        <DesktopLogo />

        <Styles.PlantDetails>
          <Header />
          <PlantDetails />
        </Styles.PlantDetails>
      </Styles.Container>

      <Styles.WrapperBottomContent>
        <Styles.Container>
          <BottomContent />
        </Styles.Container>
      </Styles.WrapperBottomContent>
    </Styles.PageContent>
  )
}
