import { BrowserRouter as Router, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="Admin-Panel">
        <Link to="/dashboard">
          <button>Dashboard</button>
        </Link>
        <Link to="/rooms">
          <button>Rooms</button>
        </Link>
        <Link to="/users">
          <button>Users</button>
        </Link>
        <Link to="/sessions">
          <button>Sessions</button>
        </Link>
        <Link to="/live-sessions">
          <button>Live Sessions</button>
        </Link>
        <Link to="/tickets">
          <button>Tickets</button>
        </Link>
        <Link to="/settings">
          <button>Settings</button>
        </Link>
      </div>
    </Router>
  );
}

export default App;
