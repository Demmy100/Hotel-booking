import React from 'react'
import './hotel.css'
import ekoHotel from '../../images/eko-hotel.jpg'
import ekoGarden from '../../images/eko-gardens.jpg'
import ekoSuites from '../../images/eko-suites.jpg'
import ekoSignature from '../../images/eko-signature.jpg'

const hotelRoom = [
    {
        id: 1,
        title: "eko gardens",
        desc: "At Eko Gardens, the rooms are well appointed and designed to provide comfort and convenience.",
        btn: "view more",
        image: ekoGarden,
    },
    {
        id: 2,
        title: "eko hotel",
        desc: "Eko Hotel rooms and suites are decorated and designed for your comfort and relaxation.",
        btn: "view more",
        image: ekoHotel,
    },
    {
        id: 3,
        title: "eko suites",
        desc: "Eko Suites is tucked in the most discreet part of the property with 88 large suites. The property offers a peaceful, quiet and relaxing ambience.",
        btn: "view more",
        image: ekoSuites,
    },
    {
        id: 4,
        title: "eko signature",
        desc: "Caring comes easily to those of us who are privileged to cater to you at Eko Signature. The vibrant colours of the furnishing indulges you",
        btn: "view more",
        image: ekoSignature,
    },
];


const Hotel = () => {
  return (
    <div className='hotel'>
      <h1>OUR <span>HOTELS</span></h1>
     {/*  <div className="hotelLine">
        <div className="hLine1" />
        <div className="hLine2" />
        <div className="hLine3" />
      </div> */}
      <div className="hotelCarousel">
        {hotelRoom.map((room) => (
            <div className="hotelWrapper" key={room.id}>
               <div className="hotelImgWrapper">
               <img src={room.image} alt="" className="hotelImg" />
               </div>
                <div className="hotelTexts">
                    <h2>{room.title}</h2>
                    <div className="hotelText">
                    <p>{room.desc}</p>
                    <span>{room.btn}</span>
                    </div>
                </div>
            </div>
        ))}
      </div>
      <button className="hotelButton">view all hotels</button>
    </div>
  )
}

export default Hotel
