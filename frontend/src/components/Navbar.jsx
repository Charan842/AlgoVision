import "../styles/navbar.css";
function Navbar(){
    return(
        <nav>
            <div className="navbar">
                <div className="logo">
                    AV
                </div>
                <div className="nav-links">
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/Algorithms">Algorithms</a></li>
                        <li><a href="/Progress">Progress</a></li>
                        <li><a href="/Profile">Profile</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;