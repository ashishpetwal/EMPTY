import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/signup' element={<Signup/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
