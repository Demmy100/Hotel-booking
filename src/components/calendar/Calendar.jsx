import React from 'react'
import './calendar.css'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import {DateRange} from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
const Calendar = () => {
    const [open, setOpen] = useState(false)
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([{
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    }])
  return (
    <div className='cContainer'>
        <div className="cWrapper">
            <div className="cItems">
                <span onClick={() => setOpenDate(!openDate)}>arrival date</span>
                <input type="text" placeholder={format(date[0].startDate, "MM/dd/yyyy")}/>
                {openDate && 
                    <DateRange editableDateInputs={true} moveRangeOnFirstSelection={false} ranges={date} minDate={new Date()} onChange={item => setDate([item.selection])} className="date"/>
                }
            </div>
            <div className="cItems">
                <span onClick={() => setOpenDate(!openDate)}>departure date</span>
                <input type="text" placeholder={format(date[0].endDate, "MM/dd/yyyy")}/>
                {openDate && 
                    <DateRange editableDateInputs={true} moveRangeOnFirstSelection={false} ranges={date} minDate={new Date()}  onChange={item => setDate([item.selection])} className="date"/>
                }
            </div>
            <div className="cItems cItemItem">
                <span>adults</span>
               <div className="cItem">
               <span>choose adults</span>
                <FontAwesomeIcon icon={faAngleDown} color="white" fontSize="14px"/>
               </div>
              {open && 
                 <ul className="cDropDown">
                 <li className="cList">1 adults</li>
                 <li className="cList">2 adults</li>
                 <li className="cList">3 adults</li>
                </ul>
              }
            </div>
            <div className="cItems cItemItem">
                <span>children</span>
               <div className="cItem">
               <span>0 child</span>
                <FontAwesomeIcon icon={faAngleDown} color="white" fontSize="14px"/>
               </div>
               {open && 
                <ul className="cDropDown">
                <li className="cList">1 child</li>
                <li className="cList">2 children</li>
                <li className="cList">3 children</li>
               </ul>
               }
            </div>
        </div>
      <div className="cButton">
        <button>check availability</button>
      </div>
    </div>
  )
}

export default Calendar
