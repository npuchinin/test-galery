import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import App from "./App";
import { Provider } from 'react-redux';
import { initializeStore } from './store';

const { store } = initializeStore();

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);

