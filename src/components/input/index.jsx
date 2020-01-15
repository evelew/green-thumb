import React from 'react'

import * as Styles from './styles'

export default function Input({ icon: Icon, name, color, onClick }) {
  return (
    <Styles.Wrapper color={color} onClick={onClick}>
      <Styles.WrapperIcon>
        <Icon />
      </Styles.WrapperIcon>

      <p>{name}</p>
    </Styles.Wrapper>
  )
}
