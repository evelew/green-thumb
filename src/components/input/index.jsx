import React from 'react'

import * as Styles from './styles'

export default function Input({ icon: Icon, name, color }) {
  return (
    <Styles.Wrapper color={color}>
      <Styles.WrapperIcon>
        <Icon />
      </Styles.WrapperIcon>

      <p>{name}</p>
    </Styles.Wrapper>
  )
}
