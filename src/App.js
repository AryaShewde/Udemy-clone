import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"
import { Home, Courses, SingleCourse, Cart } from "./pages"
import Navbar from "./components/Navbar.js"
import Sidebar from "./components/Sidebar.js"

function App() {
  return (
    <>
      <div>
        <Router>
          <Navbar />
          <Sidebar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/courses/:id" element={<SingleCourse />} />
            <Route path="/category/:category" element={<Courses />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
