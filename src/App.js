import './stylesheets/App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Portfolio from './components/Portfolio/Portfolio.js';
import Admin from './components/Admin/Admin.js';
// import { useReducer } from 'react';

// function authFunction(state, action) {
//   switch (action.type) {
//     case 'login':
//       break;
//     case 'logout':
//       break;
//     default:
//       break;
//   }
// }

function App () {
  // const [user, dispatchAuth] = useReducer(authFunction, null);

    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Portfolio />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    );
}

export default App;
