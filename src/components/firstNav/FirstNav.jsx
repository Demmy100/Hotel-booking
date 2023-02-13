import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {FaFacebookF, FaInstagram, FaPinterest, FaTwitter} from 'react-icons/fa'
import { useState } from 'react'
import './firstNav.css'

/* const container = [
  {
    id: 1,
    header: "eko gardens",
    img: {faAngleDown},
    title1: "Eko garden superior",
    title2: "Eko garden classic",
  },  
  {
    id: 2,
    header: "eko hotel",
    img: {faAngleDown},
    title1: "Eko classic superior",
    title2: "Eko atlantic superior",
    title3: "classic suite",
    title4: "diplomatic suite",
    title5: "presidential suite",
  },  
  {
    id: 3,
    header: "eko suites",
    img: {faAngleDown},
    title1: "deluxe room",
    title2: "studio suite",
    title3: "executive suite",
  },  
  {
    id: 4,
    header: "eko signature",
    img: {faAngleDown},
    title1: "club suite",
    title2: "premium suite",
    title3: "signature suite",
    title4: "signature presidential suite",
  }, 
  {
    id:5,
    header: "eko towel ii",
  }, 
]; */
const FirstNav = () => {
    const [hide, setHide] = useState(false)
    const [close, setClose] = useState(false)
    const [exit, setExit] = useState(false)
    const [show, setShow] = useState(false)
    const handleClick1 = () => {
            setHide(!hide);
        
    }
    const handleClick2 = () => {
            setClose(!close)
        
    }
    const handleClick3 = () => {
            setExit(!exit)
        
    }
    const handleClick4 = () => {
            setShow(!show)
        
    }
  return (
    <div className='fNav'>
        <div className="fNavItems">
             <div className="fNavItem">
                <div className="fNavItemContainer">
                <h2>eko gardens</h2>
                <FontAwesomeIcon icon={faAngleDown} className="fNavIcon" onClick={handleClick1}/>
                </div>
                {hide &&
                    <ul className="fNavDropDown">
                    <li className="fNavList">Eko garden superior</li>
                    <li className="fNavList">Eko garden classic</li>
                </ul>
                }
            </div>
            <div className="fNavItem">
                <div className="fNavItemContainer">
                <h2>eko hotel</h2>
                <FontAwesomeIcon icon={faAngleDown} className="fNavIcon" onClick={handleClick2}/>
                </div>
                {close && 
                    <ul className="fNavDropDown">
                    <li className="fNavList">Eko classic superior</li>
                    <li className="fNavList">Eko atlantic superior</li>
                    <li className="fNavList">classic suite</li>
                    <li className="fNavList">diplomatic suite</li>
                    <li className="fNavList">presidential suite</li>
                </ul>
                }
            </div>
            <div className="fNavItem">
                <div className="fNavItemContainer">
                <h2>eko suites</h2>
                <FontAwesomeIcon icon={faAngleDown} className="fNavIcon" onClick={handleClick3}/>
                </div>
                {exit &&
                    <ul className="fNavDropDown">
                    <li className="fNavList">deluxe room</li>
                    <li className="fNavList">studio suite</li>
                    <li className="fNavList">executive suite</li>
                </ul>
                }
            </div>
            <div className="fNavItem">
                <div className="fNavItemContainer">
                <h2>eko signature</h2>
                <FontAwesomeIcon icon={faAngleDown}className="fNavIcon" onClick={handleClick4}/>
                </div>
                {show &&
                    <ul className="fNavDropDown">
                    <li className="fNavList">club suite</li>
                    <li className="fNavList">premium suite</li>
                    <li className="fNavList">signature suite</li>
                    <li className="fNavList">signature presidential suite</li>
                </ul>
                }
            </div>
            <div className="fNavItem">
                <div className="fNavItemContainer">
                <h2>eko towel ii</h2>
                </div>
            </div>
        </div>
        <div className="fNavButton">
            <button>the company</button>
            <button>special offers</button>
            <div className="fNavIcons">
        <FaTwitter fontSize="14px" cursor="pointer" className='fNavI'/>
        <FaFacebookF fontSize="14px" cursor="pointer" className='fNavI'/>
        <FaInstagram fontSize="14px" cursor="pointer" className='fNavI'/>
        <FaPinterest fontSize="14px" cursor="pointer" className='fNavI'/>
        </div>
        </div>
    </div>
  )
}

export default FirstNav
