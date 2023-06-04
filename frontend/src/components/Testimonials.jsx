import classes from './Testimonials.module.css';

function Testimonials(){
    return(<section className={classes.section}>
        <h1>Don't Take Our <span>Word</span> For It</h1>
        <p>Listen to testimonials of Ardilla users building wealth</p>
        <div className={classes.testimonials}>
            <div className={classes.testimonial1}></div>
            <div className={classes.testimonial2}></div>
            <div className={classes.testimonial3}></div>
        </div>
    </section>);
}

export default Testimonials;