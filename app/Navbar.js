import 'bootstrap/dist/css/bootstrap.css';

import styles from '/public/styles/navbar.module.css';


export default function Navbar() {
    return( <>
            <nav className="navbar navbar-expand-lg fixed-top" id={styles.navbar}>
            <div className="container-fluid">
                <h5 className= "ps-5" id={styles.myName}>Amarjot Sangha</h5>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                   
                <ul className="navbar-nav ms-auto me-4 mb-5 mb-lg-0" >
                    <li key="About" className="nav-item">
                    <a className="nav-link" href="#About" id={styles.navbarLink}> <b>About</b></a>
                    </li>
                    <li key="Projects" className="nav-item">
                    <a className="nav-link" href="#Projects" id={styles.navbarLink}><b>Projects</b></a>
                    </li>
                    <li key="Contact" className="nav-item">
                    <a className="nav-link" href="#Contact" id={styles.navbarLink}><b>Contact</b></a>
                    </li>
                </ul>
                {/* <span class="navbar-text">
                    Navbar text with an inline element
                </span> */}
                </div>
            </div>
            </nav>
    </>)

}