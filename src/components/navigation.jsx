import React from 'react';
import {useNavigate} from "react-router-dom";

export const Navigation = (props) => {


  const navigate = useNavigate();

  const navigateToCalculator = () => {
    navigate('/Calculator');
  };

  const navigateToHomePage = () => {
    navigate('/');
  };

  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>الوجهات</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            TPS Express
          </a>{'التوصيل للبريد السريع'}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            
          <li>
              <a onClick={navigateToHomePage}  className='page-scroll'>
                التواصل
              </a>
            </li>
            <li>
              <a onClick={navigateToHomePage}  className='page-scroll'>
                نحن
              </a>
            </li>
            <li>
              <a onClick={navigateToCalculator} className='page-scroll'>
                حساب  تكلفة  الشحنة
              </a>
            </li>

            <li>
              <a onClick={navigateToHomePage} className='page-scroll'>
                الصفحة الرئيسية
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
