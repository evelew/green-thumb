import React from 'react'
import ReactDOM from 'react-dom'

import history from 'common/browser-history'
import routes from './routes'

const render = async location => {
  const element = await routes.resolve(location)
  ReactDOM.render(<>{element}</>, document.getElementById('root'))
}

const createRoutes = () => {
  render(history.location)
  history.listen(render)
}

export default createRoutes
