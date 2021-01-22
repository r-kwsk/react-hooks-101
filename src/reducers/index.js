import { combineReducers } from 'redux';

import events from './events';
import operationLogs from './operationLogs';
import eventsInProgress from './eventsInProgress';
import eventsDone from './eventsDone';

export default combineReducers({ 
    events,
    operationLogs,
    eventsInProgress,
    eventsDone,

})