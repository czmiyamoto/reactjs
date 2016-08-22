import { render } from 'react-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
// eslint-disable-next-line import/no-unresolved,import/no-extraneous-dependencies
//import foxIntl from 'fox-ui-components/intl';

import configureStore from './store/configureStore';
import createProvider from './store/createProvider';
import router from './containers/router';

import messages from './intl/messages';

//foxIntl.addLocaleMessages(messages);

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
console.log('app.jsx');
render(
  createProvider(store, router(history)),
  document.getElementById('app')
);
