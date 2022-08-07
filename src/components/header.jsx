import React, { useState } from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import Calculator from "./Calculator";


export const Header = (props) => {

  const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <nav
            className="navbar is-primary"
            role="navigation"
            aria-label="main navigation"
        >
          <div className="container">
            <Calculator />
          </div>
        </nav>
    );
  };

  const navigate = useNavigate();

  const navigateToCalculator = () => {
    navigate('/Calculator');
  };

  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  <img src="http://www.taoseel.net/img/130logo.png" alt="" class="img-fluid"></img>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a onClick={navigateToCalculator}
                  className='btn btn-custom btn-lg page-scroll'
                >
                  حساب سعر الشحنة
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
