import React from 'react'
import SimpleNavigation from 'common/components/core/simple-navigation'
import {IntlProvider} from 'react-intl'

import {Routes, navigationDirective} from './routes'
import Spanish from '../languages/es-MX.json'
import English from '../languages/en-US.json'

const local = 'es-MX' //navigator.language;

let lang = English
if (local === 'es-MX') {
  lang = Spanish
}

const App = () => (
  <IntlProvider locale={local} messages={lang}>
    <div className="app">
      <div className="app-navigation-container">
        <SimpleNavigation navigations={navigationDirective} />
      </div>
      <div className="app-workspace">
        <Routes />
      </div>
    </div>
  </IntlProvider>
)

export default App
