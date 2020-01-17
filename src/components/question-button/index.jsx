import React from 'react'

import * as Styles from './styles'

export default function QuestionButton({ icon: Icon, name, color, onClick, active }) {
  return (
    <Styles.Button
      className={active ? 'active' : ''}
      color={color}
      onClick={onClick}
    >
      <Styles.WrapperIcon>
        <Icon />
      </Styles.WrapperIcon>

      <p>{name}</p>
    </Styles.Button>
  )
}
