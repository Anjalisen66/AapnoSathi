import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Accomodation from "./pages/accomodation/accomodation";
import TouristPlaces from "./pages/tourist_places/tourist_places";
import FoodPlaces from "./pages/food_places/food_places";
import Transportation from "./pages/transportation/transportation";

function Home() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Welcome to Home Page</h2>
      <p>Select a category:</p>
      <nav style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
        <Link to="/accomodation">🏠 Accomodation</Link>
        <Link to="/places">📸 Tourist Places</Link>
        <Link to="/food">🍴 Food Places</Link>
        <Link to="/buses">🚌 Transportation</Link>
      </nav>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accomodation" element={<Accomodation />} />
        <Route path="/places" element={<TouristPlaces />} />
        <Route path="/food" element={<FoodPlaces />} />
        <Route path="/buses" element={<Transportation />} />
      </Routes>
    </Router>
  );
}

export default App;
