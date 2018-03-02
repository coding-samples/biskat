import React from 'react'
import { ConnectedRouter } from 'react-router-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store, { history } from '../../store'

import AppLayout from '../../views/layouts/App/AppLayout'
import IndexView from '../../views/Catalog/IndexView'
import ShowView from '../../views/Catalog/ShowView'

const Root = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Redirect from="/" exact to="/businesses/catalog"/>
        <AppLayout>
          <Switch>
            <Route path="/businesses/details/:id" component={ShowView}/>
            <Route path="/businesses/catalog" component={IndexView}/>
            <Redirect from="/" to="/businesses/catalog"/>
          </Switch>
        </AppLayout>
      </Switch>
    </ConnectedRouter>
  </Provider>
)

export default Root