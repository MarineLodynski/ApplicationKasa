import logo from '../../images/logo_desktop.png';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='kasa-header'>
            <img src={logo} alt='Logo Kasa' className='kasa-logo' />
            <nav className='kasa-nav'>
            <li><Link to="/Home">Accueil</Link></li>
            <li><Link to="/About">A Propos</Link></li>
            </nav>
        </div>
    )
}

export default Header