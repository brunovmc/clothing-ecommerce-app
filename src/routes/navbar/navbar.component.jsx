import { Fragment } from 'react';
import { Outlet, Link } from  'react-router-dom';

const NavBar = () => {
  return (
    <Fragment>
      <div className='navbar'>
        <Link className='logo-container' to='/'>
            <h1>Brand</h1>
        </Link>
        <div className='nav-links-container'>
            <Link className='nav-link' to='/shop'>
                SHOP
            </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default NavBar;