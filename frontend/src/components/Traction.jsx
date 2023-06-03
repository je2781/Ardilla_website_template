import classes from './Traction.module.css';

function Traction(){
    return(<section className={classes.section}>
    <h1>Traction</h1>
    <p>Our products and investment grossed 1.1 billion in 2022</p>
    <div className={classes.row}>
        <div className={classes.infometrics1}>
            <h1>Investment In <span>2022</span></h1>
            <p>₦ 100M</p>
        </div>
        <div className={classes.infometrics2}>
            <h1>Risk <span>Management</span></h1>
            <p>0% Risk</p>
        </div>
        <div className={classes.infometrics3}>
            <h1>Investment <span>paid back</span></h1>
            <p>₦ 100M</p>
        </div>
    </div>
    
    </section>);
}

export default Traction;