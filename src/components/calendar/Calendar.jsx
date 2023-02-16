import React from 'react'
import './calendar.css'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import {DateRange} from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom'
const Calendar = () => {
    const [openDate, setOpenDate] = useState(false)
    const [openSecondDate, setOpenSecondDate] = useState(false)
    const navigate = useNavigate()
    const [date, setDate] = useState([{
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    }])

    const handleNavigate = () => {
        navigate("/hotels");
    }
  return (
    <div className='cContainer'>
        <div className="cWrapper">
            <div className="cItems cItems1">
                <span>arrival date</span>
                <input type="text" placeholder={format(date[0].startDate, "MM/dd/yyyy")} onClick={() => setOpenDate(!openDate)}/>
                {openDate && 
                    <DateRange editableDateInputs={true} moveRangeOnFirstSelection={false} ranges={date} minDate={new Date()} onChange={item => setDate([item.selection])} className="date1"/>
                }
            </div>
            <div className="cItems cItems2">
                <span >departure date</span>
                <input type="text" placeholder={format(date[0].endDate, "MM/dd/yyyy")} onClick={() => setOpenSecondDate(!openSecondDate)}/>
                {openSecondDate && 
                    <DateRange editableDateInputs={true} moveRangeOnFirstSelection={false} ranges={date} minDate={new Date()}  onChange={item => setDate([item.selection])} className="date2"/>
                }
            </div>
            <div className="cItems cItemItem">
                <span>adults</span>
                <select className="cItem">
                    <option className="cList">choose adults</option>
                    <option className="cList">1 adults</option>
                    <option className="cList">2 adults</option>
                    <option className="cList">3 adults</option>
                </select>
               {/* <div className="cItem">
               <span>{!adult && "choose adults"}</span>
                <FontAwesomeIcon icon={faAngleDown} color="white" fontSize="14px" onClick={() => setOpen(!open)}/>
               </div>
              {open &&
                 <ul className="cDropDown">
                 <li className="cList" onClick={(e) => setAdult(e.target.value)}>1 adults</li>
                 <li className="cList">2 adults</li>
                 <li className="cList">3 adults</li>
                </ul>
              } */}
            </div>
            <div className="cItems cItemItem">
                <span>children</span>
                <select className="cItem">
                    <option className="cList">0 child</option>
                    <option className="cList">1 child</option>
                    <option className="cList">2 children</option>
                    <option className="cList">3 children</option>
                </select>
              {/*  <div className="cItem">
               <span>0 child</span>
                <FontAwesomeIcon icon={faAngleDown} color="white" fontSize="14px" onClick={() => setClose(!close)}/>
               </div>
               {close && 
                <ul className="cDropDown">
                <li className="cList">1 child</li>
                <li className="cList">2 children</li>
                <li className="cList">3 children</li>
               </ul>
               } */}
            </div>
        </div>
      <div className="cButton">
        <button onClick={handleNavigate}>check availability</button>
      </div>
    </div>
  )
}

export default Calendar
