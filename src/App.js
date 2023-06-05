import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Home } from './pages/home';
import './App.css';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
      {/* <ToastContainer autoClose={1500}/> */}
      <ToastContainer autoClose={1500} />
    </Router>
  );
}

export default App;
