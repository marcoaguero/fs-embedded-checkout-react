import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./containers/Home";
import Details from "./containers/Details";
import PurchaseSuccess from "./containers/PurchaseSuccess";
import Login from "./containers/LoginPage";
import { AuthProvider } from "./store/AuthContext";
import { FastSpringProvider } from "./store/FastSpringContext";
import Layout from "./containers/Layout";

function App() {
  return (
    <AuthProvider>
      <div className="App d-flex flex-column min-vh-100">
        <BrowserRouter>
          <FastSpringProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:productId" element={<Details />} />
              <Route path="/purchase_success" element={<PurchaseSuccess />} />
              <Route path="/login" element={<Login />} />
              <Route path="/checkout" element={<Layout />} />
            </Routes>
            <Footer />
          </FastSpringProvider>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
