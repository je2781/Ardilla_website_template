import {NavLink, Link, useRouteLoaderData} from 'react-router-dom'
import {useState} from 'react';
import logo from '../assets/squirrel.jpg';
import globeIcon from '../assets/earth-globe.png';
import classes from './MainNavigation.module.css';

function MainNavigation() {
const [sideBarIsOpen, setSideBarIsOpen] = useState(false);

function handleClose(){  
  setSideBarIsOpen(prevState => !prevState);

}

function handleOpen(){ 
  setSideBarIsOpen(prevState => !prevState);

}

const token = useRouteLoaderData('root');

  return (
    <div className={classes.bg}>
    <header className={classes.header}>
      <Link to='/' className={classes.logo}><img src={logo} className={classes['logo-image']} alt='logo'/>Ardilla</Link>
      <div className={classes['toggle-icon']} onClick={handleOpen}><i className='fa fa-bars'></i></div>
      <nav className={classes['main-nav']}>
        <ul className={classes['main-list']}>
          <li>
            <NavLink to='/products' className={({isActive}) => isActive ? classes.active : undefined }>Products<span className={classes.span}> </span><i className='fa-solid fa-caret-down'></i></NavLink>
          </li>
          <li>
            <NavLink to='/business' className={({isActive}) => isActive ? classes.active : undefined}>Business<span className={classes.span}> </span><i className={classes.beta}>Beta</i></NavLink>
          </li>
          <li>
            <NavLink to='/company' className={({isActive}) => isActive ? classes.active : undefined}>Company<span className={classes.span}> </span><i className='fa-solid fa-caret-down'></i></NavLink>
          </li>
          <li>
            <NavLink to='/learn' className={({isActive}) => isActive ? classes.active : undefined}>Learn</NavLink>
          </li> 
        </ul>
       {!token && <ul className={classes['secondary-list']}>
          <li>
            <NavLink
              to="/auth?mode=login"
              className={({ isActive }) =>
              isActive ? classes.active : undefined
              }
              end
            >
              Log In
            </NavLink>
          </li> 
          <li>
            <NavLink
              to="/auth?mode=signup"
              className={({ isActive }) =>
              isActive ? `${classes.btn} ${classes.active}` : classes.btn
              }
              end
            >
              Create Account
            </NavLink>
          </li>
          <li>
          <Link><img src={globeIcon} className={classes['globe-icon']} alt='globe-icon'/><span className={classes.span}> </span><i className='fa-solid fa-caret-down'></i></Link>
          </li>
        </ul>}
      </nav>
      {sideBarIsOpen && <nav className={sideBarIsOpen ? 'mobile-nav open' : 'mobile-nav'}>
        <div onClick={handleClose} className='cancel'><i className='fa fa-times'></i></div>
        <ul>
          <li>
            <NavLink to='/products' onClick={handleClose} className={({isActive}) => isActive ? classes.active : undefined }>Products<span className={classes.span}> </span><i className='fa-solid fa-caret-down'></i></NavLink>
          </li>
          <li>
            <NavLink to='/business' onClick={handleClose} className={({isActive}) => isActive ? classes.active : undefined}>Business<span className={classes.span}> </span><i className={classes.beta}>Beta</i></NavLink>
          </li>
          <li>
            <NavLink to='/company'onClick={handleClose}  className={({isActive}) => isActive ? classes.active : undefined}>Company<span className={classes.span}> </span><i className='fa-solid fa-caret-down'></i></NavLink>
          </li>
          <li>
            <NavLink to='/learn' onClick={handleClose} className={({isActive}) => isActive ? classes.active : undefined}>Learn</NavLink>
          </li> 
        </ul>
        <ul>
          <li>
            <NavLink
              to="/auth?mode=login"
              onClick={handleClose}
              className={({ isActive }) =>
              isActive ? classes.active : undefined
              }
              end
            >
              Log In
            </NavLink>
          </li> 
          <li>
            <NavLink
              to="/auth?mode=signup"
              onClick={handleClose}
              className={({ isActive }) =>
              isActive ? `btn ${classes.active}` : 'btn'
              }
            >
              Create Account
            </NavLink>
          </li>
          <li>
          <Link onClick={handleClose}><img src={globeIcon} className={classes['globe-icon']} alt='globe-icon'/><span className={classes.span}> </span><i className='fa-solid fa-caret-down'></i></Link>
          </li>
        </ul>
      </nav>}
    </header>
    </div>
  );
}

export default MainNavigation;
