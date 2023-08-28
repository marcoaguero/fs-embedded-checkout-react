import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./containers/Home";
import Details from "./containers/Details";
import PurchaseSuccess from "./containers/PurchaseSuccess";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:productId" element={<Details />} />
          <Route path="/purchase_success" element={<PurchaseSuccess />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
