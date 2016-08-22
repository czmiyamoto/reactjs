import React from 'react';
import { Provider } from 'react-redux';
// eslint-disable-next-line import/no-unresolved,import/no-extraneous-dependencies
//import FoxIntlProvider from 'fox-ui-components/intl/FoxIntlProvider';

export default function createProvider(store, component) {
  return (
    <Provider store={store}>
      <FoxIntlProvider>
        {component}
      </FoxIntlProvider>
    </Provider>
  );
}
