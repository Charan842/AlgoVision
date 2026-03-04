import "../styles/footer.css";

export const Footer = () => {
  return (
    <div className='footer-box'>
        <div className="about">
            <h3>Algo Vision</h3>
            <p>Interactive algorithm visualizations for learners.</p>
        </div>
        <div className="contact">
            <ul>
                        <li><a href="#">GitHub</a></li>
                        <li><a href="#">Email</a></li>
                        <li><a href="#">Linkedin</a></li>
                        <li><a href='#'>Phone</a></li>
            </ul>
        </div>
        <div className="copyright">
            <p>© 2026 AlgoVision | Built by DSC and HP</p>
        </div>

    </div>
  )
}
