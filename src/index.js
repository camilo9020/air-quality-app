import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './components/App';
import store from './store'
import { saveState } from './localStorage'

const app = document.getElementById('root')

store.subscribe(() => {
  saveState(store.getState());
})

ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, app);