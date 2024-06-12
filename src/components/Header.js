import logo from '../images/logo_desktop.png';
import '../styles/Header.css';

function Header() {
    return (
        <div className='kasa-header'>
            <img src={logo} alt='Logo Kasa' className='kasa-logo' />
            <nav>
                
            </nav>
        </div>
    )
}

export default Header