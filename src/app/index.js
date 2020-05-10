import React from 'react'
import ReactDOM from 'react-dom'
import WebFont from 'webfontloader'
import { Provider } from 'react-redux'

import { generateStore } from 'app/redux'
import Router from 'app/components/Router'
import { setupAmplify } from 'app/helpers/amplify'
import GlobalStyles from 'app/helpers/globalStyles'

setupAmplify()

WebFont.load({
  google: {
    families: [
      'Open Sans: 300,400,500,600,700,800',
      'Roboto: 300,400,500,600,700,800',
      'Montserrat: 300,400,500'
    ]
  }
})

const App = () => {
  const store = generateStore()

  return (
    <Provider store={store}>
      <GlobalStyles />
      <Router />
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
