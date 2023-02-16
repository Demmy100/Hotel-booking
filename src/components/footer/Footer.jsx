import React from 'react'
import {FaFacebookF, FaInstagram, FaPinterest, FaTwitter} from 'react-icons/fa'
import {BsTelephone} from 'react-icons/bs'
import {MdOutlineMailOutline} from 'react-icons/md'
import {VscBook} from 'react-icons/vsc'
import {TbSend} from 'react-icons/tb'
import footerLogo from '../../images/logo-footer.png'
import './footer.css'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footerContainer">
        <ul className="footerItem">
            <li className='footerList'>ABOUT</li>
            <li className='footerList'>GALLERY</li>
            <li className='footerList'>OUR EVENTS</li>
            <li className='footerList'>OUR HOTELS</li>
            <li className='footerList'>DINING</li>
            <li className='footerList'>OUR VISION & MISSION</li>
            <li className='footerList'>CONTACT US</li>
            <li className='footerList'>TERMS & CONDITIONS</li>
        </ul>
        <div className="footerItem">
            <div className="footerLogowrapper">
                <img src={footerLogo} alt="" className="footerLogo" />
                </div>
                <div className="footerMenu">
                    <div className="footerMenu1">
                        <VscBook/>
                        <span>Plot 1415 Adetokunbo Ademola Street, PMB 12724, Victoria Island, Lagos Nigeria</span>
                    </div>
                    <div className="footerMenu2">
                       <BsTelephone />
                        <span>+234 1 2772700-25 , +234 1 460610 (ext.6125, 6203, 6079, 6297, 6215, 6124)</span>
                    </div>
                    <div className="footerMenu3">
                        <BsTelephone />
                        <span>Fax: +234 1 2704071</span>
                    </div>
                    <div className="footerMenu4">
                        <MdOutlineMailOutline/>
                        <span>sales@ekohotels.com, reservation@ekohotels.com, banquet@ekohotels.com</span>
                    </div>
                </div>
        </div>
        <div className="footerLetter">
            <h3>NEWSLETTER</h3>
            <p>Subscribe to our email newsletter to<br/> receive updates and news.</p>
            <div className="footerEmail">
                <input type="email" name="email" id="email" />
                <span className='footerEmailIcon'><TbSend fontSize="18px"/></span>
            </div>
            <div className="footerSocials">
            <FaTwitter fontSize="14px" cursor="pointer" className='footerIcon'/>
        <FaFacebookF fontSize="14px" cursor="pointer" className='footerIcon'/>
        <FaInstagram fontSize="14px" cursor="pointer" className='footerIcon'/>
        <FaPinterest fontSize="14px" cursor="pointer" className='footerIcon'/>
            </div>
        </div>
      </div>
      <div className="footerCopy">
        <button className="footerBtn">the company</button>
        <p>Copyright © 2019 Eko Hotels & Suites</p>
      </div>
    </div>
  )
}

export default Footer
