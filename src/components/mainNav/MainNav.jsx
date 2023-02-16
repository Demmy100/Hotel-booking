import React from 'react'
import EkoHotel from '../../images/logo-header.jpg'
import './mainNav.css'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
const MainNav = () => {
  const [isActive, setIsActive] = useState(false)
  const [open, setOpen] = useState(false)
  const [show, setShow] = useState(false)
  const [exit, setExit] = useState(false)
  const [mainMobile, setMainMobile] = useState(false)

  const handleOpen1 = () => {
    setIsActive(!isActive)
  }
  const handleOpen2 = () => {
    setOpen(!open)
  }
  const handleOpen3 = () => {
    setShow(!show)
  }
  const handleOpen4 = () => {
    setExit(!exit)
  }
  const handleMain = () => {
    setMainMobile(!mainMobile)
  }
  return (
    <div className='mainNav'>
      <div className="mainNavContainer">
        <div className="mainNavItems">
          <div className="mainNavItem">
            <div className="mainNavItem1">
            <div className="mainNavWrapper">
            <h2>home</h2>
             <FontAwesomeIcon icon={faAngleDown} className="mainNavIcon" onClick={handleOpen1}/>
            </div>
           {isActive && 
             <ul className="mainNavDropdown">
             <li className="mainNavList">about us</li>
             <li className="mainNavList">contact us</li>
           </ul>
           }
            </div>
            <div className="mainNavItem2">
            <div className="mainNavWrapper">
            <h2>dining</h2>
            </div>
            </div>
            <div className="mainNavItem3">
           <div className="mainNavWrapper">
           <h2>meetings & banqueting</h2>
             <FontAwesomeIcon icon={faAngleDown} className="mainNavIcon" onClick={handleOpen2}/>
           </div>
           {open && 
             <ul className="mainNavDropdown">
             <li className="mainNavList">grand ball room</li>
             <li className="mainNavList">eko convention centre</li>
             <li className="mainNavList">fantasia</li>
             <li className="mainNavList">meeting rooms</li>
           </ul>
           }
            </div>
          </div>
          <div className="mainNavLogo">
            <img src={EkoHotel} alt="" className="mainNavImg" />
          </div>
          <div className="mainNavItemB">
            <div className="mainNavItem1">
            <div className="mainNavWrapper">
            <h2>recreational services</h2>
             <FontAwesomeIcon icon={faAngleDown} className="mainNavIcon" onClick={handleOpen3}/>
            </div>
            {show && 
              <ul className="mainNavDropdown">
              <li className="mainNavList">swimming pool</li>
              <li className="mainNavList">gym</li>
              <li className="mainNavList">tennis courts</li>
              <li className="mainNavList">spa</li>
              <li className="mainNavList">basketball court</li>
              <li className="mainNavList">volleyball court</li>
              <li className="mainNavList">salon and nail studio</li>
            </ul>
            }
            </div>
            <div className="mainNavItem2">
           <div className="mainNavWrapper">
           <h2>events</h2>
             <FontAwesomeIcon icon={faAngleDown} className="mainNavIcon" onClick={handleOpen4}/>
           </div>
           {exit && 
             <ul className="mainNavDropdown">
             <li className="mainNavList">tropical christmas wonderland</li>
             <li className="mainNavList">hippity hoppity easter</li>
             <li className="mainNavList">haute table</li>
             <li className="mainNavList">initimate celebrations</li>
           </ul>
           }
            </div>
            <div className="mainNavItem3">
            <div className="mainNavWrapper">
            <h2>gallery</h2>
            </div>
            </div>
          </div>
          {/* <div className="mainNavItem">
            <h2>home</h2>
            <ul className="mainNavDropdown">
              <li className="mainNavList">about us</li>
              <li className="mainNavList">contact us</li>
            </ul>
          </div>
          <div className="mainNavItem">
            <h2>dining</h2>
          </div>
          <div className="mainNavItem">
            <h2>meetings & banqueting</h2>
            <ul className="mainNavDropdown">
              <li className="mainNavList">grand ball room</li>
              <li className="mainNavList">eko convention centre</li>
              <li className="mainNavList">fantasia</li>
              <li className="mainNavList">meeting rooms</li>
            </ul>
          </div> */}
        </div>
      </div>
      {/*mobile */}
      <div className="mainNavMobile">
        <div className="mainNavMobileLogo">
          <img src={EkoHotel} alt="" className="mainNavImg" />
        </div>
        <div className="mainNavMobileMenu">
          <AiOutlineMenu fontSize="25px" cursor="pointer" onClick={handleMain}/>
          {mainMobile && 
            <ul className="mainNavMobileItem">
            <li className="mainNavMobileList">HOME</li>
            <li className="mainNavMobileList">DINING</li>
            <li className="mainNavMobileList">MEETINGS & EVENTS</li>
            <li className="mainNavMobileList">RECREATIONAL SERVICES</li>
            <li className="mainNavMobileList">BLOG</li>
            <li className="mainNavMobileList">GALLERY</li>
            <li className="mainNavMobileList">ABOUT US</li>
            <li className="mainNavMobileList">CONTACT US</li>
          </ul>
          }
        </div>
      </div>
    </div>
  )
}

export default MainNav
