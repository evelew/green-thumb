import React from 'react'

import LogoGreenthumb from 'assets/images/logo-greenthumb.svg'
import * as Styles from './styles'

export default function DesktopLogo({ style }) {
  return (
    <Styles.Logo style={style}>
      <img src={LogoGreenthumb} alt="Logo Greenthumb" />
    </Styles.Logo>
  )
}
