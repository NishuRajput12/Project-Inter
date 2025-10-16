import './Navbar.css'
export default function Navbar() {

    return (
        <>
            <header>
                <nav className='navbar-section'>
                    <a href='#Home' className='nav-logo'>
                        <h2>Nishu Rajput</h2>
                    </a>
                    <ul className='Nav-list'>
                        <li className="nav-item"><a href="#About">About</a></li>
                        <li className="nav-item"><a href="#Skills">Skills</a></li>
                        <li className="nav-item"><a href="#Projects">Projects</a></li>
                        <li className="nav-item"><a href="#contact">Contact</a></li>

                    </ul>
                </nav>
               
            </header>
        </>
    )
}