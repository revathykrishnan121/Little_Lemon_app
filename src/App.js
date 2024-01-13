import './App.css';
import About from './Components/About';
import BookingPage from './Components/BookingPage';
import ConfirmedBooking from './Components/ConfirmedBooking';
import Header from './Components/Header';
import Home from './Components/Home';
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="container">
    <Header></Header>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/reserve" element={<BookingPage></BookingPage>}></Route>
      <Route path="/confirmed" element={<ConfirmedBooking></ConfirmedBooking>}></Route>
    </Routes>
    </div>
  );
}

export default App;
