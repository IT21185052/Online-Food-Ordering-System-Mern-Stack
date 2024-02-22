import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import AddPayment from './Components/AddPayment';
import PaymentDetails from './Components/PaymentDetails';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/add" exact element={<AddPayment />} />
        </Routes>
        <Routes>
          <Route path='/' exact Component={PaymentDetails} />
        </Routes>
        <Footer />
      </div>

    </Router>
   
  );
}

export default App;
