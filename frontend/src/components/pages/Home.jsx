import Hero from '../Hero';
import ProductOverview from '../ProductOverview';
import InterestCalculator from '../InterestCalc';
import Invest from '../Invest';
import Features from '../Features';
import Traction from '../Traction';

function Home(){
    return(<>
        <Hero/>
        <ProductOverview/>
        <InterestCalculator/>
        <Invest/>
        <Features/>
        <Traction/>
        </>);
}

export default Home;