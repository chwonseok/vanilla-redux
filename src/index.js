import reactDom from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import { store } from './Store';

reactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
