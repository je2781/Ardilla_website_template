import Hero from '../Hero';
import ProductOverview from '../ProductOverview';
import InterestCalculator from '../InterestCalc';
import Invest from '../Invest';
import Features from '../Features';
import Traction from '../Traction';
import Footer from '../Footer';
import Testimonials from '../Testimonials';
import Reviews from '../Reviews';

function Home(){
    return(<>
        <Hero/>
        <ProductOverview/>
        <InterestCalculator/>
        <Invest/>
        <Features/>
        <Testimonials/>
        <Reviews/>
        <Traction/>
        <Footer/>
        </>);
}

export default Home;