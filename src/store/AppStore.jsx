import React from 'react'

import { StateProvider } from './'
import { set, get } from './cache'

const appStoreName = 'GREEN_THUMB_STORE'

const AppStore = ({ children }) => {
  const initialState = Object.assign(
    {
      sunlight: null,
      water: null,
      pet: null
    },
    get(appStoreName)
  )

  const setCache = data => {
    set(appStoreName, data)
  }

  const reducer = (state, action) => {
    let data = null

    switch (action.type) {
      case 'setSunlight':
        data = {
          ...state,
          sunlight: action.value
        }
        setCache(data)

        return data

      case 'setWater':
        data = {
          ...state,
          water: action.value
        }
        setCache(data)

        return data

      case 'setPet':
        data = {
          ...state,
          pet: action.value
        }
        setCache(data)
        return data

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
export { appStoreName }
