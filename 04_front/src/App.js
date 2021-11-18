import "./reset.css"
import { BrowserRouter as Router } from 'react-router-dom'

import history from './Services/history'
import RoutesDefault from './Routes'

function App() {
  return (
    <Router history={history}>
      <RoutesDefault />
    </Router>
  );
}

export default App;
