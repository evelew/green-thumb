import React from 'react'

import LogoGreenthumb from 'assets/images/logo-greenthumb.svg'
import * as Styles from './styles'

export default function DesktopLogo() {
  return (
    <Styles.Logo>
      <img src={LogoGreenthumb} alt="Logo Greenthumb" />
    </Styles.Logo>
  )
}
