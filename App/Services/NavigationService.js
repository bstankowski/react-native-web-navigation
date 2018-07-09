// @flow

import { Platform } from 'react-native'
import { NavigationActions, StackActions } from 'react-navigation'

let _navigator

const setTopLevelNavigator = (navigatorRef: any) => {
  _navigator = navigatorRef
}

const getNavigator = () =>
  new Promise(resolve => {
    if (_navigator) {
      resolve(_navigator)
      return
    }

    const interval = setInterval(() => {
      if (_navigator) {
        resolve(_navigator)
        clearInterval(interval)
      }
    }, 50)
  })

const dispatch = (...args: any): Promise<void> =>
  getNavigator().then(navigator => navigator.dispatch(...args))

const navigate = (routeName: string, params: Object) => {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  )
}

const push = (routeName: string, params: Object) => {
  _navigator.dispatch(
    StackActions.push({
      routeName,
      params
    })
  )
}

export const uriPrefix =
  Platform.OS === 'web' ? window.location.origin + '/' : 'navigationdemo://'

export default {
  setTopLevelNavigator,
  navigate,
  push,
  dispatch
}
