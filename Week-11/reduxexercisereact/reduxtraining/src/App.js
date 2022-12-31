import './App.css';
import Room from './components/Room';
import store from './redux/store';
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={store}>
    <Room />
    </Provider>
  );
}

export default App;
