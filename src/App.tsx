import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Calendar from "./pages/Calendar";
import Customization from "./pages/Customization";
import Customize from "./pages/Customize";
import FAQ from "./pages/FAQ";
import Payment from "./pages/Payment";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background font-sans antialiased">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/customization" element={<Customization />} />
          <Route path="/customize" element={<Customize />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;