import React from 'react'
import UniversalRouter from 'universal-router'

import AppStore from 'store/AppStore'

import Home from 'pages/home'
import SunlightQuestion from 'pages/questions/sunlight'
import WaterQuestion from 'pages/questions/water'
import PetQuestion from 'pages/questions/pet'
import Results from 'pages/results'
import Purchase from 'pages/purchase'
import PurchaseThankYou from 'pages/purchase-thank-you'

const routes = {
  path: '/',
  async action({ next }) {
    const children = await next()
    return <AppStore>{children}</AppStore>
  },
  children: [
    {
      path: '',
      async action() {
        return <Home />
      }
    },
    {
      path: '/questions/sunlight',
      async action() {
        return (
          <SunlightQuestion />
        )
      }
    },
    {
      path: '/questions/water',
      async action() {
        return (
          <WaterQuestion />
        )
      }
    },
    {
      path: '/questions/pet',
      async action() {
        return (
          <PetQuestion />
        )
      }
    },
    {
      path: '/results',
      async action() {
        return (
          <Results />
        )
      }
    },
    {
      path: '/purchase',
      async action() {
        return (
          <Purchase />
        )
      }
    },
    {
      path: '/purchase/thank-you',
      async action() {
        return (
          <PurchaseThankYou />
        )
      }
    }
  ]
}

export const basename = ''

const router = new UniversalRouter(routes, {
  baseUrl: basename
})

export default router
