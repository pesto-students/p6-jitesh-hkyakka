import './App.css';
import StepCounter from './components/stepCounter';
import { Provider } from 'react-redux';
import store from './redux/store';
function App() {
  return (
    <Provider store={store}>
      <StepCounter />
    </Provider>
  );
}

export default App;
