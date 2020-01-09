import React from 'react'

import LogoGreenthumb from 'assets/images/logo-greenthumb.svg'
import * as Styles from './styles'

export default function Header() {
  return (
    <Styles.Header>
      <Styles.WrapperLogo>
        <img src={LogoGreenthumb} alt="Logo Greenthumb" />
      </Styles.WrapperLogo>
    </Styles.Header>
  )
}
