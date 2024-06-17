import logo from '../../images/about_banner.png';
import './BannerA.css';

function BannerAbout () {
    return (
        <div className='banner-banner'>
            <img src={logo} alt='Montagnes et lacs' className='home-banner' />
        </div>
    )
}

export default BannerAbout;