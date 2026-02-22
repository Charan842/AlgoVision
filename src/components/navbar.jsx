import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        AlgoVision
      </div>

      <ul className="navbar-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Algorithms</a></li>
        <li><a href="#">Visualizer</a></li>
        <li><a href="#">Login</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;