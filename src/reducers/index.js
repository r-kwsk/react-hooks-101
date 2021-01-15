import { combineReducers } from 'redux';

import events from './events';
import operationLogs from './operationLogs';
import eventsInProgress from './eventsInProgress';

export default combineReducers({ 
    events,
    operationLogs,
    eventsInProgress

})