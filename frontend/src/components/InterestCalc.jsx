import classes from './InterestCalc.module.css';
import { Link } from 'react-router-dom';
import graph from '../assets/savings_graph.jpg';

function InterestCalculator() {
    return(
        <section className={classes.section}>
            <div className={classes.content}>
                <h1 className={classes['first-heading']}>We're keen On<br/><span className={classes['second-heading']}>Transparency</span></h1>
                <p className={classes.paragraph}>Calculate your interests every time you save on our platform.</p>
                <div className={classes.action}>
                    <Link className={classes.btn}>Get Started</Link>
                </div>
            </div>
            <div className={classes.calculator}>
                <div>
                    <h1>Calculate Your Interests</h1>
                    <form>
                        <label className={classes.label} for='period'>How often are you saving?</label>
                        <select id='period' className={classes.select}>
                            <option value='weekly'>Weekly</option>
                            <option value='yearly'>Yearly</option>
                            <option value='monthly'>Monthly</option>
                        </select>
                        <label className={classes.label} for='amount'>How much are you saving?</label>
                        <input type='text' id="amount" value='2,000'/>
                        <div className={classes.underline}></div>
                        <label className={classes.label} for='months'>How long are you saving for? (in months)</label>
                        <input type='text' id="months" value='3'/>
                        <div className={classes.underline}></div>
                    </form>
                </div>
                <div className={classes.getStarted}>
                    <div className={classes.legends}>
                        <h3>Total Balance</h3>
                        <span>6,600</span>
                        <p>Saving <b>2,000</b> monthly, for 3 months will result in a balance of <b>6,600</b></p>
                        <h3>Interest</h3>
                        <span>600 (2%)</span>
                        <h3>Total Savings</h3>
                        <span>6,000 (2%)</span>
                    </div>
                    <img alt='savings graph' src={graph}/>
                </div>
            </div>
        </section>
    );
}

export default InterestCalculator;