import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from './pages/redux/store';
import Router from "./pages/routes/router";
import {NotificationContainer} from 'react-notifications';
import 'react-notifications/lib/notifications.css';




function App() {
  return (
    <>
   <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <NotificationContainer />
    </Provider>
    </>
  );
}

export default App;
