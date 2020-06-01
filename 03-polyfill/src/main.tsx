// core-js@3 does not polyfill Object.assign in some situation
// so we have to import manually
// https://github.com/zloirock/core-js/issues/639
import 'core-js/features/object/assign'

import React from 'react'
import ReactDom from 'react-dom'

import {Root} from './root/'

console.log('process.env.envFileName: ', process.env.envFileName)
console.log('process.env.DOT_ENV_TEST: ', process.env.DOT_ENV_TEST)
console.log('process.env.foo: ', process.env.foo)
console.log('process.env.NODE_ENV: ', process.env.NODE_ENV)
console.log(
  'process.env.ENABLE_REDUX_LOGGER: ',
  process.env.ENABLE_REDUX_LOGGER,
)

const appContainer = document.getElementById('app-container')
ReactDom.render(<Root />, appContainer)
