import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h3>AlgoVision</h3>
          <p>Visualize Data Structures & Algorithms step-by-step.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Algorithms</a></li>
            <li><a href="#">Visualizer</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: support@algovision.com</p>
          <p>© 2026 AlgoVision</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;