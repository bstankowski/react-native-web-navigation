// @flow
import React from 'react'
import qs from 'qs'
import { isEmpty } from 'lodash'
import AppNavigator from './AppNavigator'
import NavigationService from '../Services/NavigationService'

type Props = {
  onNavigationStateChange: Function,
  setNavigatorRef: Function,
  uriPrefix: string
}

const publicPath = '/'
const publicPathRegex = new RegExp(`^${publicPath}`)

const getPathAndParamsFromLocation = location => {
  const path = location.pathname.replace(publicPathRegex, '')
  const params = qs.parse(location.search)
  return { path, params }
}

const getLocationFromPathAndParams = ({ path, params }) => {
  // Uncomment if you want all params exposed in the address bar
  // const suffix = !isEmpty(params) ? `?${qs.stringify(params)}` : ''
  return publicPath + path // + suffix
}

class Routing extends React.PureComponent<Props> {
  componentDidMount() {
    window.onpopstate = e => {
      e.preventDefault()

      const pathAndParams = getPathAndParamsFromLocation(window.location)
      const action = AppNavigator.router.getActionForPathAndParams(
        pathAndParams.path,
        pathAndParams.params
      )

      if (action) {
        NavigationService.dispatch(action)
      }
    }
  }

  onNavigationStateChange = (
    prevState: any,
    currentState: any,
    action: Object
  ) => {
    this.props.onNavigationStateChange(prevState, currentState, action)

    const pathAndParams = AppNavigator.router.getPathAndParamsForState(
      currentState
    )

    const currentLocation = getLocationFromPathAndParams(
      getPathAndParamsFromLocation(window.location)
    )

    const location = getLocationFromPathAndParams(pathAndParams)

    if (currentLocation !== location) {
      window.history.pushState(null, null, location)
    }
  }

  render() {
    return (
      <AppNavigator
        onNavigationStateChange={this.onNavigationStateChange}
        ref={this.props.setNavigatorRef}
        uriPrefix={this.props.uriPrefix}
      />
    )
  }
}

export default Routing
