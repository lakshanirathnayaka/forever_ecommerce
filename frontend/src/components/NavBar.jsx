import React, { useState, useRef, useEffect } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import DropDown from './DropDown';
import '../style/NavBar.css';

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const dropdownRef = useRef(null);
  const sidebarRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      
      // Close sidebar if clicking outside of it
      if (sidebarRef.current && !sidebarRef.current.contains(event.target) && 
          event.target.className !== 'menu-icon' && 
          !event.target.closest('.menu-icon')) {
        setSidebarVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <>
      {/* Desktop Navbar - Top */}
      <div className='navbar-desktop'>
        <Link to='/'>
        <img src={assets.logo} className='w-36' alt="Company Logo" />
        </Link>
        
        
        <ul className='navbar-desktop-menu'>
          <li className='flex flex-col items-center gap-1'>
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `navbar-link ${isActive ? 'active' : ''}`
              }
            >
              <p className='navbar-text'>Home</p>
              
            </NavLink>
          </li>
          
          <li className='navbar-item'>
            <NavLink 
              to="/collection" 
              className={({ isActive }) => 
                `navbar-link ${isActive ? 'active' : ''}`
              }
            >
              <p className='navbar-text'>Collection</p>
             
            </NavLink>
          </li>
          
          <li className='navbar-item'>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `navbar-link ${isActive ? 'active' : ''}`
              }
            >
              <p className='navbar-text'>About</p>
             
            </NavLink>
          </li>
          
          <li className='navbar-item'>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `navbar-link ${isActive ? 'active' : ''}`
              }
            >
              <p className='navbar-text'>Contact</p>
              
            </NavLink>
          </li>
        </ul>
        
        <div className='navbar-search-container'>
          <img src={assets.search_icon} className='navbar-search-icon' alt="Search"/>
          
          <div className='profile-image-container' ref={dropdownRef}>
            <img 
              className='profile-image' 
              src={assets.profile_icon} 
              alt="Profile"
              onClick={toggleDropdown}
            />
            <DropDown isOpen={dropdownOpen} />
          </div>
          
          <Link to='/cart' className='cart-container'>
            <img src={assets.cart_icon} className='cart-icon' alt='Cart'/>
            <p className='cart-count'>0</p>
          </Link>
        </div>
      </div>

      {/* Mobile Top Header - Minimal */}
      <div className='mobile-top-header'>
        <img src={assets.logo} className='mobile-logo' alt="Company Logo" />
        <div className='mobile-top-actions'>
          <img src={assets.search_icon} className='mobile-search-icon' alt="Search"/>
          <div className='profile-image-container' ref={dropdownRef}>
            <img 
              className='profile-image mobile-profile' 
              src={assets.profile_icon} 
              alt="Profile"
              onClick={toggleDropdown}
            />
            <DropDown isOpen={dropdownOpen} />
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className='mobile-bottom-nav'>
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `mobile-nav-item ${isActive ? 'active' : ''}`
          }
        >
          <div className='mobile-nav-icon'>🏠</div>
          <span className='mobile-nav-text'>Home</span>
        </NavLink>
        
        <NavLink 
          to="/collection" 
          className={({ isActive }) => 
            `mobile-nav-item ${isActive ? 'active' : ''}`
          }
        >
          <div className='mobile-nav-icon'>📱</div>
          <span className='mobile-nav-text'>Shop</span>
        </NavLink>
        
        <Link to='/cart' className='mobile-nav-item cart-nav-item'>
          <div className='mobile-nav-icon cart-icon-wrapper'>
            <img src={assets.cart_icon} className='mobile-cart-icon' alt='Cart'/>
            <span className='mobile-cart-count'>0</span>
          </div>
          <span className='mobile-nav-text'>Cart</span>
        </Link>
        
        <NavLink 
          to="/about" 
          className={({ isActive }) => 
            `mobile-nav-item ${isActive ? 'active' : ''}`
          }
        >
          <div className='mobile-nav-icon'>ℹ️</div>
          <span className='mobile-nav-text'>About</span>
        </NavLink>
        
        <NavLink 
          to="/contact" 
          className={({ isActive }) => 
            `mobile-nav-item ${isActive ? 'active' : ''}`
          }
        >
          <div className='mobile-nav-icon'>📞</div>
          <span className='mobile-nav-text'>Contact</span>
        </NavLink>
      </div>

      {/* Sidebar for additional options */}
      <div 
        ref={sidebarRef}
        className={`sidebar ${sidebarVisible ? 'visible' : ''}`}
      >
        <div className='sidebar-content'>
          <div className='sidebar-header'>
            <h3 className='sidebar-title'>Menu</h3>
            <div className='flex items-center gap-4 cursor-pointer' onClick={toggleSidebar}>
              <img className='h-5 rotate-180' src={assets.dropdown_icon} alt='Close'/>
            </div>
          </div>
          
          <NavLink className='sidebar-link' to='/contact' onClick={toggleSidebar}>
            📞 Contact
          </NavLink>
          
          <NavLink className='sidebar-link' to='/login' onClick={toggleSidebar}>
            👤 Login
          </NavLink>
          
          <NavLink className='sidebar-link' to='/orders' onClick={toggleSidebar}>
            📦 My Orders
          </NavLink>
          
          <NavLink className='sidebar-link' to='/placeOrder' onClick={toggleSidebar}>
            💳 Checkout
          </NavLink>
          
          <div className='sidebar-divider'></div>
          
          <div className='sidebar-section'>
            <h4 className='sidebar-section-title'>Quick Actions</h4>
            <button className='sidebar-action-btn' onClick={() => {/* Add search functionality */}}>
              🔍 Search Products
            </button>
            <button className='sidebar-action-btn' onClick={() => {/* Add wishlist functionality */}}>
              ❤️ Wishlist
            </button>
            <button className='sidebar-action-btn' onClick={() => {/* Add help functionality */}}>
              ❓ Help & Support
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;