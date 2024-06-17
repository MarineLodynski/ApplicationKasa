import Header from '../components/headerpage/Header';
import BannerHome from '../components/banner/Banner';
import Cards from '../components/cards/Cards';
import Footer from '../components/footerpage/Footer';

function Home () {
    return (
        <div>
            <Header />
            <BannerHome />
            <Cards />
            <Footer />
        </div>
    )
}

export default Home;