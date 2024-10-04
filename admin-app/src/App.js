import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard.js";
import "./homePage.css";
import Logo from "./images/2BYTES_logo-LoRes (2).png";

// Import icons from react-icons library
import {
  FaTachometerAlt,
  FaDoorOpen,
  FaUsers,
  FaClipboardList,
  FaTicketAlt,
  FaCog,
} from "react-icons/fa";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <div className="sidebar">
          {/* Logo */}
          <div className="logo-container">
            <img src={Logo} alt="Logo" className="logo" />
          </div>

          {/* Sidebar Links */}
          <Link to="/dashboard">
            <button>
              <FaTachometerAlt /> Dashboard
            </button>
          </Link>
          <Link to="/rooms">
            <button>
              <FaDoorOpen /> Rooms
            </button>
          </Link>
          <Link to="/users">
            <button>
              <FaUsers /> Users
            </button>
          </Link>
          <Link to="/sessions">
            <button>
              <FaClipboardList /> Sessions
            </button>
          </Link>
          <Link to="/tickets">
            <button>
              <FaTicketAlt /> Tickets
            </button>
          </Link>
          <Link to="/settings">
            <button>
              <FaCog /> Settings
            </button>
          </Link>
        </div>

        {/* Main Content */}
        <div className="content">
          <Routes>
            {/* Set Dashboard as the home page */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            {/* Add other routes here for other pages */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
