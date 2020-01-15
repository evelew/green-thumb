import React from 'react'

import { StateProvider } from './'

const AppStore = ({ children }) => {
  const initialState = {
    sunlight: null,
    water: null,
    pet: null
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'setSunlight':
        return {
          ...state,
          sunlight: action.value
        }

      case 'setWater':
        return {
          ...state,
          water: action.value
        }

      case 'setPet':
        return {
          ...state,
          pet: action.value
        }

      default:
        return state
    }
  }

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      {children}
    </StateProvider>
  )
}

export default AppStore
