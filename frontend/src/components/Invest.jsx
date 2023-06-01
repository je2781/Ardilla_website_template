import { Link } from 'react-router-dom';
import trendline1 from '../assets/trendline1.png'
import trendline2 from '../assets/trendline2.png'
import classes from './Invest.module.css';

function Invest(){
    return(<section className={classes.section}>
        <div className={classes.content}>
            <h1><span className={classes['first-heading']}>Unlimited <span className={classes['second-heading']}>Investment</span></span><br/><span className={classes['second-heading']}>Opportunities</span></h1>
            <p className={classes.paragraph}>Plan towards your future by investing with ardilla, Grow your money<br/>confidently and securely with the available investment opportunities</p>
            <div className={classes.action}>
                <Link className={classes.btn}>Invest with ardilla (Coming Soon)</Link>
            </div>
        </div>
        <div className={classes.trendlines}>
        <img alt='trend line' src={trendline1} className={classes.t1}/>
        <img alt='trend line' src={trendline2} className={classes.t2}/>

        </div>
    </section>);
}

export default Invest;