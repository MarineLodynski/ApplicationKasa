import logo from '../../images/logo_white.png';
import './Footer.css';


function Footer() {
    return (
        <footer className='kasa-footer'>
            <img src={logo} alt='Logo Kasa' className='footer-logo' />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    
    )
}

export default Footer;