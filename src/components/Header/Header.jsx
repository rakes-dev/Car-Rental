import React , {useEffect, useState, useRef} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link, NavLink } from "react-router-dom";
import Swal from 'sweetalert2';
import '../../styles/header.css';
import { useAuth } from '../services/AuthContext';

const navLinks = [
  {
    path: '/login',
  },
  {
    path:'/home',
    display: 'Home',
  },
  {
    path:'/about',
    display: 'About',
  },
  {
    path:'/cars',
    display: 'Cars',
  },
  {
    path:'/blogs',
    display: 'Blog',
  },
  {
    path:'/contact',
    display: 'Contact',
  },
];

const Header = () => {

  const {username, authToken, handleLogout} = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(!!authToken);


  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
  });
  
  const popup = () => {
    swalWithBootstrapButtons.fire({
      title: "Are you sure want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        handleLogout();
        swalWithBootstrapButtons.fire({
          title: "You have been Successfully logged Out!",
          text: "",
          icon: "success"
        });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "",
          icon: "error",
          timer: 1500
        });
      }
    });
  };




  useEffect(() => {
    setIsLoggedIn(!!authToken);
  }, [authToken]);


  const menuRef = useRef(null)
  const toggleMenu = ()=> menuRef.current.classList.toggle("menu__active")

  return (
    <header className="header">

      {/* ========header top====== */}
      <div className="header__top">
        <Container>
          <Row>
            <Col lg='6' md='6' sm='6'>
              <div className="header__top__left">
                <span>Need Help?</span>
                <span className="header__top__help">
                  <i className="ri-phone-fill"></i> +91 7980 350 133
                </span>
              </div>
            </Col>

            <Col lg='6' md='6' sm='6'>
      <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
        {!isLoggedIn ? (
          <Link to='/login' className="d-flex align-items-center gap-1">
            <i className="ri-user-line"></i>
            <i className="ri-login-circle-line"></i> Login
          </Link>
        ) : (
          <>
            <Link to='#' className="d-flex align-items-center gap-1">
              <i className="ri-user-line"></i> {username}
            </Link>
            <button onClick={popup} className="d-flex1 align-items-center gap-1">
              <i className="ri-logout-circle-line"></i> Logout
            </button>
          </>
        )}
      </div>
    </Col>
          </Row>
        </Container>
      </div>

      {/* =====header middle===== */}
      <div className="header__middle">
        <Container>
          <Row>
            <Col lg='4' md='3' sm='4'>
              <div className="logo">
                <h1>
                  <Link to='/home' className="d-flex align-items-center gap-2">
                    <i className="ri-car-line"></i>
                    <span>Rent Car <br /> Service</span>
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg='3' md='3' sm='4'>
              <div className="header__location d-flex align-items-center gap-2">
                <span><i className="ri-earth-line"></i></span>
                <div className="header__location-content">
                  <h4>India</h4>
                  <h6>West Bengal, Kolkata</h6>
                </div>
              </div>
            </Col>

            <Col lg='3' md='3' sm='4'>
              <div className="header__location d-flex align-items-center gap-2">
                <span><i className="ri-time-line"></i></span>
                <div className="header__location-content">
                  <h4>Sunday to Friday</h4>
                  <h6>10am - 7pm</h6>
                </div>
              </div>
            </Col>

            <Col lg='2' md='3' sm='0' className="d-flex align-items-center justify-content-end">
              <button className="header__btn btn">
                <Link to='/contact'>
                  <i className="ri-phone-line"></i> Request a call
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ===== main navigation */}

        <div className="main__navbar">
          <Container>
            <div className="navigation__wrapper d-flex align-items-center justify-content-between">
              <span className="mobile__menu">
              <i className="ri-menu-line" onClick={toggleMenu}></i>
              </span>

              <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                <div className="menu">
                  {navLinks.map((item, index) => (
                      <NavLink 
                      to={item.path}
                      className={(navClass)=> 
                        navClass.isActive? "nav__active nav__item" : 
                        "nav__item"
                  }
                      key={index}
                    >
                        {item.display}
                      </NavLink>
                    ))}
                </div>
              </div>

              <div className="nav__right">
                <div className="search__box">
                  <input type="text" placeholder='Search'/>
                  <span>
                    <i className="ri-search-line"></i>
                  </span>
                </div>
              </div>
            </div>
          </Container>
        </div>

    </header>
  );
};

export default Header;