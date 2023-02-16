import React from "react";
import FirstNav from "../../components/firstNav/FirstNav";
import Footer from "../../components/footer/Footer";
import MainNav from "../../components/mainNav/MainNav";
import "./list.css";
import { Link } from "react-router-dom";
import lLogo from "../../images/list logo.webp";
import ekoClassic from "../../images/eh-classic-room.jpg";
import ekoAtlantic from "../../images/eh-atlantic-room.jpg";
const listInfos = [
  {
    id: 1,
    title: "Classic Superior Room",
    desc: "Standard Rooms with marble floors and a great view of the City with smoking or non – smoking rooms available.",
    desc1: "ROOM: 19.47",
    desc2: "BEDROOM: 4.73",
    desc3: "BALCONY: 4.31",
    desc4: "42” LCD FLAT SCREEN TVS",
    button: "BOOK NOW",
    img: ekoClassic,
  },
  {
    id: 2,
    title: "Atlantic Supeior Room",
    desc: "Standard rooms with marble floors and a great view of the Atlantic with smoking or non – smoking rooms available.",
    desc1: "BEDROOM: 19.47",
    desc2: "BALCONY: 4.62",
    desc3: "BATHROOM: 4.73",
    desc4: "42” LCD FLAT SCREEN TVS",
    button: "BOOK NOW",
    img: ekoAtlantic,
  },
];
const List = () => {
  return (
    <div>
      <FirstNav />
      <MainNav />
      <div className="listContainer">
        <div className="listWrapper">
          <h1>EKO HOTEL</h1>
          <Link to="/" className="link">
            <span>Home</span>
          </Link>
          <Link to="/hotels" className="link">
            <span>
              <small>/</small> Our Hotels
            </span>
          </Link>
          <span>
            <small>/</small> Eko Hotel
          </span>
        </div>
        <div className="listInfoWrapper">
          <div className="listInfoLogo">
            <img src={lLogo} alt="" className="listLogo" />
            <p>
              Eko Hotel rooms and its suites are decorated designed for your
              comfort and relaxation. All the rooms have large balconies and
              beautiful views of either the city or the Atlantic Ocean; our
              friendly and professional staff are always a phone call away to
              assist you with anything you may need. Eko Hotel is the main
              building on our property and it houses most of the attractive
              features which Eko Hotels & Suites has become known for. These
              include 447 rooms, a spectacular swimming pool, the Sky Restaurant
              & Lounge, Crossroads Tex-Mex Restaurant, Red Chinese Restaurant &
              Lounge, the Kuramo sports cafe, the Calabash Bar, Lagoon Breeze
              Restaurant and a thai restaurant coming soon; a world-class gym;
              steam rooms; a massage parlour; a medical clinic, the Art21
              Gallery, a bookstore; several lounges; a business centre and
              state-of-the-art conferencing and banqueting facilities.
            </p>
            <div className="listHotel">
              <h3>Overview: 447 Rooms</h3>
              <ul className="lList">
                <li className="lDropDown">201 Classic Superior Rooms</li>
                <li className="lDropDown">221 Atlantic Superior Rooms</li>
                <li className="lDropDown">20 Classic Suites</li>
                <li className="lDropDown">4 Diplomatic Suites</li>
                <li className="lDropDown">1 Presidential Suite</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="listDetails">
          <div className="listDetailsTextsWrapper">
            {listInfos.map((listInfo) => (
              <div className="listDetailsTextsContainer" key={listInfo.id}>
                <div className="listDetailsImgWrapper">
                  <img src={listInfo.img} alt="" className="listDetailsImg" />
                </div>
                <div className="listDetailsTexts">
                  <h2>{listInfo.title}</h2>
                  <p>{listInfo.desc}</p>
                  <div className="listDetailsText">
                  <div className="listDetailsText1">
                    <span>
                      {listInfo.desc1} M<sup>2</sup>
                    </span>
                    <span>
                      {listInfo.desc2} M<sup>2</sup>
                    </span>
                  </div>
                  <div className="listDetailsText1">
                    <span>
                      {listInfo.desc3} M<sup>2</sup>
                    </span>
                    <span>{listInfo.desc4}</span>
                  </div>
                  </div>
                  <button>{listInfo.button}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default List;
