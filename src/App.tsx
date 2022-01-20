import { Reset } from 'styled-reset';
import Routes from './routes';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
  return (
    <>
    <Provider store={store}>
      <Reset/>
      <Routes/>
    </Provider>
    </>
  );
}

export default App;
