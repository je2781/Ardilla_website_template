import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import classes from './ProductOverview.module.css';
 

const ProductOverview = () => {
    const settings = {
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3870,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        fade: true
    }

    return(
        <section className={classes.section}>
            <h1>Products</h1>
            <Slider className="main-slider" {...settings}>
                <div className="slide">
                    <div className={classes['section-content']}>
                        <div>
                            <ul className={classes.intro}>
                                <li><p className={classes['first-p']}>Save</p></li>
                                <li><p className={classes['second-p']}>Save at your own pace!</p></li>
                                <li><p className={classes['third-p']}>Save your money daily, weekly, or monthly. No pressure. We work at your pace.</p></li>
                            </ul>
                            <ul className={classes.benefits}>
                                <li>Create unlimited savings plan.</li>
                                <li>Withdraw anytime.</li>
                                <li>Save with friends with SAN ID.</li>
                                <li>Be better at saving.</li>
                                <li>Accountability profile.</li>
                                <li>Activity and report.</li>
                            </ul>
                        </div>
                        <div className={classes['screen-shot']}>

                        </div>
                    </div>
                </div>
                <div className="slide">
                    <div className={classes['section-content']}>
                        <div>
                            <ul className={classes.intro}>
                                <li><p className={classes['first-p']}>Learn</p></li>
                                <li><p className={classes['second-p']}>Financial freedom begins with You and Ardilla</p></li>
                                <li><p className={classes['third-p']}>Ardilla offers wealth building tips from great financial minds to help you get to<br/>where you need to be</p></li>
                            </ul>
                            <ul className={classes.benefits}>
                                <li>Learn to invest in 2hrs.</li>
                                <li>Get a portolio manager.</li>
                                <li>Stay on top of your finances.</li>
                                <li>Learn with family and friends.</li>
                                <li>Earn points and rewards</li>
                                <li>Referral benefits.</li>
                            </ul>
                        </div>
                        <div className={classes['screen-shot']}>

                        </div>
                    </div>
                </div>
                <div className="slide">
                    <div className={classes['section-content']}>
                        <div>
                            <ul className={classes.intro}>
                                <li><p className={classes['first-p']}>Invest</p></li>
                                <li><p className={classes['second-p']}>Multiply your finances</p></li>
                                <li><p className={classes['third-p']}>Investment opportunities that get you closer to financial freedom.</p></li>
                            </ul>
                            <ul className={classes.benefits}>
                                <li>Portfolio management.</li>
                                <li>Track your returns.</li>
                                <li>Risk Assessment.</li>
                                <li>Vetted investment Opportunities.</li>
                                <li>Invest within your risk appetite.</li>
                                <li>Invest in Naira and Dollars.</li>
                            </ul>
                        </div>
                        <div className={classes['screen-shot']}>

                        </div>
                    </div>
                </div>
                <div className="slide">
                    <div className={classes['section-content']}>
                        <div>
                            <ul className={classes.intro}>
                                <li><p className={classes['first-p']}>Budget</p></li>
                                <li><p className={classes['second-p']}>Plan your money</p></li>
                                <li><p className={classes['third-p']}>Every good budget starts with a good plan for your money.</p></li>
                            </ul>
                            <ul className={classes.benefits}>
                                <li>Save as you spend.</li>
                                <li>Track your expenses.</li>
                                <li>Organize your finances.</li>
                                <li>Sync and share budgets.</li>
                                <li>Financial guide.</li>
                                <li>Better decision-making.</li>
                            </ul>
                        </div>
                        <div className={classes['screen-shot']}>

                        </div>
                    </div>
                </div>
                <div className="slide">
                    <div className={classes['section-content']}>
                        <div>
                            <ul className={classes.intro}>
                                <li><p className={classes['first-p']}>Insurance</p></li>
                                <li><p className={classes['second-p']}>Protect your interest</p></li>
                                <li><p className={classes['third-p']}>Stay protected, live freely.</p></li>
                            </ul>
                            <ul className={classes.benefits}>
                                <li>Vehicle Insurance.</li>
                                <li>Home Insurance.</li>
                                <li>Mutual Insurance.</li>
                                <li>Life Insurance.</li>
                                <li>Health Insurance.</li>
                                <li>Travel Insurance.</li>
                            </ul>
                        </div>
                        <div className={classes['screen-shot']}>

                        </div>
                    </div>
                </div>
            </Slider>
            <div className={classes['progress-bar-empty']}>
                <div className={classes['progress-bar-filled']}></div>
            </div>
        </section>
    );
}

export default ProductOverview;