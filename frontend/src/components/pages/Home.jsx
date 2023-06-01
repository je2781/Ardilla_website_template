import Hero from '../Hero';
import ProductOverview from '../ProductOverview';
import InterestCalculator from '../InterestCalc';
import Invest from '../Invest';
import Features from '../Features';

function Home(){
    return(<>
        <Hero/>
        <ProductOverview/>
        <InterestCalculator/>
        <Invest/>
        <Features/>
        </>);
}

export default Home;