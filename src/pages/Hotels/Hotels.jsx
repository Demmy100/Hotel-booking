import React from 'react'
import FirstNav from '../../components/firstNav/FirstNav'
import Footer from '../../components/footer/Footer'
import MainNav from '../../components/mainNav/MainNav'
import ekoHotel2 from '../../images/hotel-eko-hotel2.jpg'
import ekoSuites from '../../images/eko-suites.jpg'
import ekoSignature2 from '../../images/hotel-eko-signature2.jpg'
import ekoGardens from '../../images/eko-gardens.jpg'
import './hotels.css'
import { useNavigate } from 'react-router-dom'
const hotelsInfo = [
  {
    id: 1,
    title: "Eko Hotel",
    desc: "Eko Hotel rooms and suites are decorated and designed for your comfort and relaxation. All the rooms have large balconies and beautiful views of either the city or the Atlantic Ocean; our friendly and professional staff are always a phone call away to assist you with anything you may need.",
    button: "VIEW DETAILS",
    img: ekoHotel2,
  },
  {
    id: 2,
    title: "Eko Suites",
    desc: "Eko Suites is tucked in the most discreet part of the property with 88 large suites. The property offers a peaceful, quiet and relaxing ambience. All the suites have King size beds, a safety deposit box, a hairdryer, a mini bar with a working desk and most suites have a kitchenette.",
    button: "VIEW DETAILS",
    img: ekoSuites,
  },
  {
    id: 3,
    title: "Eko Signature",
    desc: "Caring comes easily to those of us who are privileged to cater to you at Eko Signature. The vibrant colours of the furnishing indulges you. Our suites embody elegance that expresses the art of simple luxury; one whose soft warm embrace can’t wait to relax you. With a bold contemporary style, the rooms are tastefully designed with the professional executive in mind.",
    button: "VIEW DETAILS",
    img: ekoSignature2,
  },
  {
    id: 4,
    title: "Eko Gardens",
    desc: "At Eko Gardens, the rooms are well appointed and designed to provide comfort and convenience. Besides the usual amenities such as central air conditioning, satellite TV, fast internet connection, a fridge and bathroom amenities of the highest quality, the guests can also have fast internet access in all the public areas through our WiFI (Wireless) network.",
    button: "VIEW DETAILS",
    img: ekoGardens,
  },
];

const Hotels = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/hotels:id")
  }
  return (
    <div>
      <FirstNav/>
      <MainNav/>
      <div className="hotelsContainer">
      <div className="hotelsWrapper">
      <h1>Our Hotels</h1>
      <span>Home <small>/ Our Hotels</small></span> 
      </div>
      <div className="hotelsInfoWrapper">
        {hotelsInfo.map((info) => (
          <div className="hotelsInfo" key={info.id}>
            <div className="hotelsInfoImgWrapper">
              <img src={info.img} alt="" className="hotelsImg" />
            </div>
            <div className="hotelsInfoTexts">
              <h2>{info.title}</h2>
              <p>{info.desc}</p>
              <button onClick={handleClick}>{info.button}</button>
            </div>
          </div>
        ))}
      </div>
      </div>
      
      <Footer/>
    </div>
  )
}

export default Hotels
