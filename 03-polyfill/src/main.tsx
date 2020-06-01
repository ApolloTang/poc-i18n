if (typeof Object.assign !== 'function') {
  // Must be writable: true, enumerable: false, configurable: true
  Object.defineProperty(Object, 'assign', {
    value: function assign(target, varArgs) {
      // .length of function is 2
      'use strict'
      if (target === null || target === undefined) {
        throw new TypeError('Cannot convert undefined or null to object')
      }

      var to = Object(target)

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index]

        if (nextSource !== null && nextSource !== undefined) {
          for (var nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey]
            }
          }
        }
      }
      return to
    },
    writable: true,
    configurable: true,
  })
}

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
