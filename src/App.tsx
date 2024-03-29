import { Provider } from 'mobx-react'
import React from 'react'
import Loadable from 'react-loadable'
import { Route, Router, Switch } from 'react-router'
import { createGlobalStyle } from 'styled-components'

import './antd.css'
import './index.css'

import store from './stores'
import history from './utils/history'

import Loading from './components/Loading'
import NotFound from './pages/NotFound'

const Login = Loadable({
  loader: () => import('./pages/Login'),
  loading: Loading
})

const Info = Loadable({
  loader: () => import('./pages/forms/Info'),
  loading: Loading
})

const Contact = Loadable({
  loader: () => import('./pages/forms/Contact'),
  loading: Loading
})

const General = Loadable({
  loader: () => import('./pages/forms/GeneralQuestion'),
  loading: Loading
})

const Major = Loadable({
  loader: () => import('./pages/forms/MajorQuestion'),
  loading: Loading
})

const Summary = Loadable({
  loader: () => import('./pages/Summary'),
  loading: Loading
})

const Completed = Loadable({
  loader: () => import('./pages/Completed'),
  loading: Loading
})

const GlobalStyle = createGlobalStyle`
  /* * {
    font-family: 'Maledpan', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 'bold';
  } */

  body {
    font-family: 'Maledpan', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 'bold';
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), linear-gradient(69.01deg, #C73884 7.27%, #E13C6F 51.46%, #9B308E 95.22%);
    background-size: cover;
    background-attachment: fixed;
  }

  .ant-calendar-picker-input, .ant-calendar-picker {
    width: 100%;
  }
  h4.ant-typography {
    font-family: 'Sarabun';
    line-height: 1.9;
  }

  .ant-form-item {
    margin-bottom: 32px;
  }

  .ant-form-item-label {
    font-size: 20px;
    font-family: 'Sarabun';
  }

  .ant-form-item-children > textarea {
    font-family: 'Sarabun';
    line-height: 1.8;
    font-size: 16px;
  }

  .ant-form-item-control {
    font-family: 'Sarabun';
  }
`

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <GlobalStyle />
        <Switch>
          <Route exact={true} path="/" component={Login} />
          <Route exact={true} path="/step/info" component={Info} />
          <Route exact={true} path="/step/contact" component={Contact} />
          <Route exact={true} path="/step/general" component={General} />
          <Route exact={true} path="/step/major" component={Major} />
          <Route exact={true} path="/step/summary" component={Summary} />
          <Route exact={true} path="/completed" component={Completed} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
