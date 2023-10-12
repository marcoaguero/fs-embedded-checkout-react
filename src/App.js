import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./containers/Home";
import Details from "./containers/Details";
import PurchaseSuccess from "./containers/PurchaseSuccess";
import OneClickTest from "./containers/OneClickTest";
import Login from "./containers/LoginPage";
import { AuthProvider } from "./store/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="App d-flex flex-column min-vh-100">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:productId" element={<Details />} />
            <Route path="/purchase_success" element={<PurchaseSuccess />} />
            <Route path="/one_click_test" element={<OneClickTest />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
