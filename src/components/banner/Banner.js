import logo from '../../images/banner_home.png';
import './Banner.css';

function BannerHome () {
    return (
        <div className='banner-banner'>
            <img src={logo} alt='Chez vous, partout et ailleurs' className='home-banner' />
        </div>
    )
}

export default BannerHome;