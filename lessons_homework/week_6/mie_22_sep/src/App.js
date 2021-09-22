import AddCites from './components/AddCites.jsx';
import ListCites from './components/ListCites';
import {Store} from './store/store.js';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={Store}>
      <div className="container text-center">
        <header><h1>EPS Sura</h1></header>
        <div className="row mt-3">
          <div className="col-md-6">
            <AddCites />
          </div> 
          <div className="col-md-6">
            <ListCites/>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
