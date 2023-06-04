import classes from './Reviews.module.css';
import screenshot from '../assets/review_screenshot.png';

function Reviews(){
    return (<section className={classes.section}>
        <div className={classes.outlets}>
            <div className={classes.outlet1}></div>
            <div className={classes.outlet2}></div>
            <div className={classes.outlet3}></div>
            <div className={classes.outlet4}></div>
        </div>
        <div className={classes.screenshot}>
            <h1>Also Available on the Web</h1>
            <p>Increase your bread and butter on the app or on the web. The Ardilla app<br/>services are also available on the web</p>
            <img src={screenshot} alt=''/>
        </div>
    </section>);
}

export default Reviews;