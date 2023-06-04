import classes from './Footer.module.css';
import appDownload from '../assets/app-download-backdrop.jpg';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

function Footer (){
    return(
    <section className={classes.section}>
        <div className='d-flex justify-content-center align-items-center'>
            <header className={classes.header}>
                <img src={appDownload} alt='app-download'/>
                <section className={classes['header-section']}>
                    <div className={classes.content}>
                        <h1>Download For Free<br/>Start Saving Today</h1>
                        <Link                                                                                                       
                        onClick={() => scroll.scrollToTop()}
                        className={classes.btn}
                        >
                        Download for free
                        </Link>
                    </div>
                    <div className={classes.screenshot}></div>
                </section>
            </header>
        </div>
        <div className={classes.content}>
            <div className='row'>
                <div className='col-md-2 col-12'>
                    <ul>
                        <li className={classes.title}>Products</li>
                        <li><Link onClick={() => scroll.scrollToTop()}>Savings</Link></li>
                        <li><Link onClick={() => scroll.scrollToTop()}>Dilla</Link></li>
                        <li><Link onClick={() => scroll.scrollToTop()}>Financial Coach</Link></li>
                        <li><Link onClick={() => scroll.scrollToTop()}>Halal</Link></li>
                        <li><Link onClick={() => scroll.scrollToTop()}>Budgeting <span className={classes.span}> </span><i className={classes['coming-soon']}>Coming Soon</i></Link></li>
                        <li><Link onClick={() => scroll.scrollToTop()}>Investment <span className={classes.span}> </span><i className={classes['coming-soon']}>Coming Soon</i></Link></li>
                        <li><Link onClick={() => scroll.scrollToTop()}>Insurance <span className={classes.span}> </span><i className={classes['coming-soon']}>Coming Soon</i></Link></li>
                    </ul>
                </div>
                <div className='col-md-2 col-12'>
                <ul>
                        <li className={classes.title}>Company</li>
                        <li><Link onClick={() => scroll.scrollToTop()}>About</Link></li>
                        <li><Link onClick={() => scroll.scrollToTop()}>Careers</Link></li>
                        <li><Link onClick={() => scroll.scrollToTop()}>FAQ</Link></li>
                        <li><Link onClick={() => scroll.scrollToTop()}>Press</Link></li>
                    </ul>
                </div>
                <div className='col-md-3 col-12'>
                    <ul>
                        <li className={classes.title}>Transparency</li>
                        <li><Link onClick={() => scroll.scrollToTop()}>Terms & Conditions</Link></li>
                        <li><Link onClick={() => scroll.scrollToTop()}>Information security policy</Link></li>
                        <li><Link onClick={() => scroll.scrollToTop()}>Privacy Policy</Link></li>
                        <li><Link onClick={() => scroll.scrollToTop()}>Interest Tool</Link></li>
                    </ul>
                </div>
                <div className='col-md-2 col-12'>
                    <ul>
                        <li className={classes.title}>Developer</li>
                    
                        <li><Link onClick={() => scroll.scrollToTop()}>Connect API <span className={classes.span}> </span><i className={classes['coming-soon']}>Coming Soon</i></Link></li>
                    </ul>
                </div>
                <div className='col-md-3 col-12'>
                    <ul>
                        <li className={classes.title}>Address</li>
                        <li>33B Ogundana Street, Allen, Ikeja</li>
                        <li className={classes.title}>Contact</li>
                        <li>support@ardilla.africa</li>
                        <li>(234)801 0000 1234</li>
                    </ul>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <ul>
                        <li className={classes.divider}></li>
                        <li className={classes['end-of-content']}>
                            <span className={classes['brand-content']}>
                                <p>&copy; 2023 Ardilla, All Rights Reserved</p>
                                <span>
                                <Link onClick={() => scroll.scrollToTop()}><i className='fa-instagram fa-brands'></i></Link>
                                <Link onClick={() => scroll.scrollToTop()}><i className='fa-facebook-f fa-brands'></i></Link>
                                <Link onClick={() => scroll.scrollToTop()}><i className='fa-linkedin fa-brands'></i></Link>
                                <Link onClick={() => scroll.scrollToTop()}><i className='fa-twitter fa-brands'></i></Link>
                                </span>
                            </span>
                            <p className={classes['license-agreement']}>Ardilla operates under the cooperative license of Ardilla Multipurpose Cooperative Society, LSC 18245, We provide Savings and Fixed deposit services to our users</p>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </div>
        
    </section>);
}

export default Footer;