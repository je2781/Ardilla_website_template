import classes from './Hero.module.css';
import {Link} from 'react-router-dom';
import left from '../assets/hero_image_left.png';
import right from '../assets/hero_image_right.png';
import verified from '../assets/verified.png';

function Hero(){
    return(
        <div className={classes.section}>
            <header className={classes.header}>
                <h1>Your Access To                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      More</h1>
                <p>Ardilla helps you save and invest <i className='bi bi-shield-fill-check'></i>in achieving your financial goals, we have the most flexible and seamless way<br/>to grow your funds.</p>
                <Link                                                                                                       
                    to="/auth?mode=signup"
                    className={classes.btn}
                >
                    Get Started
                </Link>
            </header>
            <section className={`${classes['product-tour']} ${classes.section}`}>
                <img src={left} className={classes.left} alt='ardilla'/>
                <span className={classes.infometrics}><img src={verified} alt='verified' className={classes.verified}/> Save with Ardilla</span>
                <img src={right} className={classes.right} alt='ardilla'/>
            </section>
        </div>
    );
}

export default Hero;