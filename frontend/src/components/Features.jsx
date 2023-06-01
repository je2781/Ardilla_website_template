import { Link } from 'react-router-dom';
import classes from './Features.module.css';

function Features(){
    return(<section className={classes.section} id='section-5'>
        <h1>Access More With Your Money</h1>
        <p>Earn, learn, parley, and grow financially. With Ardilla, you have more opportunities than ever at your fingertips. Why not<br/>take advantage today?</p>
        <div className={classes.action}>
            <Link className={classes.btn}>Invest with ardilla (Coming Soon)</Link>
        </div>
        <div className={`${classes.features} row`}>
            <div className='col-12 col-md-6'>
                <div className={classes.feature1}>
                    <span className={classes.icon1}><i className='fa-solid fa-sack-dollar'></i></span>
                    <h2>DIB</h2>
                    <p>Nothing beats an emergency quite like an<br/>emergency fund. With Ardilla you can get<br/>started building that emergency fund.</p>
                    <h3>Learn More</h3>
                </div>
                <div className={classes.break}></div>
                <div className={classes.feature2}>
                    <span className={classes.icon2}><i className='fa-solid fa-vault'></i></span>
                    <h2>Vault</h2>
                    <p>Lock away excess funds you don't know what to do<br/>with. We can help can help safeguard it till you are<br/>ready. It definitely beats spending it and wondering<br/>where all that money went to.</p>
                    <h3>Learn More</h3>
                </div>
            </div>
            <div className='col-12 col-md-6'>
                <div className={classes.feature3}>
                    <span className={classes.icon3}><i className='fa-solid fa-lock'></i></span>
                    <h2>Dreams</h2>
                    <p>Helping you make your dreams a reality is<br/>important to us. We have helped so many<br/>others. We can help you as well.</p>
                    <h3>Learn More</h3>
                </div>
                <div className={classes.break}></div>
                <div className={classes.feature4}>
                    <span className={classes.icon4}><i className='fa-solid fa-shield'></i></span>
                    <h2>Grit</h2>
                    <p>Become a VIP when you save more money<br/>with us. Enjoy better benefits</p>
                    <h3>Learn More</h3>
                </div>
            </div>
        </div>
    </section>);
}

export default Features;