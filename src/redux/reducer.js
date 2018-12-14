import multireducer from 'multireducer';
import { routerReducer } from 'react-router-redux';
import { localizeReducer } from 'react-localize-redux';
import auth from './modules/auth';
import notifs from './modules/notifs';
import counter from './modules/counter';
import info from './modules/info';

export default function createReducers(asyncReducers) {
  return {
    localize: localizeReducer,
    router: routerReducer,
    online: (v = true) => v,
    notifs,
    auth,
    counter: multireducer({
      counter1: counter,
      counter2: counter,
      counter3: counter
    }),
    info,
    ...asyncReducers
  };
}
