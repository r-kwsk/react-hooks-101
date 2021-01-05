import React, { useEffect, useReducer } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import EventForm from './EventForm';
import Events from './Events'
import OperationLogs from './OperationLogs';
import AppContext from '../contexts/AppContext';
import reducer from '../reducers/';//indexは省略可

const APP_KEY = 'appWithRedux';


const App = () => {
  const appState = localStorage.getItem(APP_KEY)
  const initialState = appState ? JSON.parse(appState) : {
    events: [],
    operationLogs: []
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    localStorage.setItem(APP_KEY, JSON.stringify(state))
  }, [state])

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Switch>
          {/* container-fluidってなんだっけ？？ */}
          {/* <div className="container-fluid">
            <Route exact path="/">
              <EventForm />
              <Events />
              <OperationLogs />
            </Route>
          </div>   */}
          <Route exact path="/">
            <EventForm />
            <Events />
          </Route>
          <Route exact path="/events">
            <EventForm />
            <Events />
          </Route>
          <Route exact path="/events/logs" component={OperationLogs} />
        </Switch>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
