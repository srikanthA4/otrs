import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import NavBarPanel from '../../NavBarPanel';
import './search.css';

const SearchWithDatePicker = ({ selectedDate, onChange }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);

  const toggleDatePicker = () => {
    setShowDatePicker(prevState => !prevState);
  };

  return (
    <div className="datePickerContainer">
      <FontAwesomeIcon
        icon={faCalendar}
        className="calendarIcon"
        onClick={toggleDatePicker}
      />
      <DatePicker
        selected={selectedDate}
        onChange={onChange}
        open={showDatePicker}
        onClickOutside={() => setShowDatePicker(false)}
      />
    </div>
  );
};

const Search = () => {
  const [startDate1, setStartDate1] = useState(new Date());
  const [startDate2, setStartDate2] = useState(new Date());

  return (
    <main>
      <NavBarPanel/>
      <div className='sk'> 
        <fieldset> 
          <h2>Profile</h2>
          <div>
            <div>
              <label htmlFor="Profile">Search template</label>
              <input type="text" list="templates" id="Profile" />
              <datalist id="templates" required className='optio' >
                <option>Last-search</option>
              </datalist>
            </div> 
          </div>
        </fieldset>
        <div className="row">
          <button name="SelectTemplate" type="submit" value="Select">Select</button> 
          <button name="EraseTemplate" type="submit" value="Delete">Delete</button>
          <button name="searchTemplate" type="submit" value="search">Search</button>
        </div>
        <fieldset> 
          <h2>Ticket#</h2>
          <label htmlFor="Ticket#">Ticket#</label><input type="text"/>
          <p className="pp" >e.g. 10*5155 or 105658*</p>
          
          <div><label htmlFor="Ticket#">CustomerId</label><input type="text" list="template"  id= "Ticket#"/> <datalist id="template">
                <option>Autointelli-1</option>
              </datalist></div>
        </fieldset>

        <fieldset>
          <h2>Fulltext Search in Tickets (e. g. "John*n" or "Will*")</h2>
          <div><label htmlFor="Fulltext Search in Tickets ">Attachment Name</label><input type="text"/></div>
          <div><label htmlFor="Fulltext Search in Tickets ">Body</label><input type="text" /></div>
          <div><label htmlFor="Fulltext Search in Tickets ">CC</label><input type="text" /></div>
          <div><label htmlFor="Fulltext Search in Tickets ">From</label><input type="text" /></div>
          <div><label htmlFor="Fulltext Search in Tickets ">Subject</label><input type="text" /></div>
          <div><label htmlFor="Fulltext Search in Tickets ">To</label><input type="text" ></input></div>
        </fieldset>

        <fieldset className='Columns'>
          
          <div className="Column">
            <h2><label>priority:</label></h2>
            <select name="" id="templat" required className='options'>
                
              <option >1 Very Low</option>
                <option >2 Low</option>
                <option >3 Normal</option>
                <option >4 High</option>
                <option >5 Very High</option>
            </select></div>
          <div className='Column'>
            <h2><label>State:</label></h2>
          {/* <input type="text"  list="templa"></input> */}
          <select id="templa" required className='options'>
                <option value="">closed successfull</option>
                <option value="">closed unsuccessfull</option>
                <option value="">In progress</option>
                <option value="">merged</option>
                <option value="">New</option>
                <option value="">On Hold</option>
                <option value="">open</option>
                <option value="">pending</option>
                <option value="">Pending auto close+</option>
                <option value="">pending auto close-</option>
                <option value="">pending reminder</option>
                <option value="">Removed</option>
                <option value="">Reslove</option>
                <option value="">Test State</option>
                <option value="">Windows</option>
               
              </select></div>
        </fieldset>

        <fieldset className='Timesearch'>
          <h2>Time Restrictions</h2>
          
          <div className='filter-container'>
            <input type="radio" id="radio1" name="radioGroup" value="option1"/>
            <label htmlFor="radio1">All</label>
          </div>
          <div className="filter-container">
            <input type="radio" id="radio1" name="radioGroup" value="option1"/>
            <label htmlFor="date">Only tickets created </label> 
            <div className="dropdown-container">
              <select id="number-dropdown">
                <option value="more">More than ...ago</option>
                <option value="less">Within the last ...</option>
              </select>
              <select id="number-dropdown">
              {[...Array(59).keys()].map(number => (
        <option key={number + 1} value={number + 1}>{number + 1}</option>
      ))}
              </select>
              <select id="number-dropdown">
                <option value="Minutes">minute(s)</option>
                <option value="Hours">hour(s)</option>
                <option value="days">day(s)</option>
                <option value="weeks">week(s)</option>
                <option value="Months">month(s)</option>
                <option value="years">year(s)</option>
              </select>
            
            </div>
          </div>
          <div className="filter-container">
            <input type="radio" id="radio1" name="radioGroup" value="option1"/>
            <label htmlFor="dateFrom">Only tickets created between</label>
            <SearchWithDatePicker selectedDate={startDate1} onChange={date => setStartDate1(date)} /> <labe1>and</labe1>
            <SearchWithDatePicker selectedDate={startDate2} onChange={date => setStartDate2(date)} />
          </div>
        </fieldset>

        <fieldset>
          <h2>Save Search as  Template?</h2>
          <div><label htmlFor="Saveprofile">Save as a Template?</label><input type="checkbox"/></div>
          <div><label htmlFor="Saveprofile"> Template Name</label><input type="text" list="templates" id="Profile" />
              <datalist id="templates">
                <option>Last-search</option>
              </datalist></div>
        </fieldset>

        <fieldset>
          <div id="BottomActionRow" className="ActionRow">
            <button id="Submit" type="submit" value="Search">Search</button>
            <span>Output to</span>
            <div className="InputField_Container" tabIndex="-8">
                
              <select className="Modernize" id="ResultForm" name="ResultForm">
                <option value="CSV"> CSV</option>
                <option value="Excel">Excel</option>
                <option value="Normal" >  Normal</option>
                <option value="Print">Print</option>  
                  
              </select>
            </div>
          </div>
        </fieldset>
        
      <div id="Footer" >
      <a href="https://www.autointelli.com/" target="_blank">
       <img src="https://github.com/srikanth251998/go/blob/6797343617a64dc6929c6f5002e51fab848b1bfa/auto-intelli-logo.png?raw=true" style={{ maxWidth: '210px', maxHeight: '100px' ,textAlign:"center"}} alt="Autointelli" title="Autointelli"/></a>
       <div class="Clear">
       <a href="https://www.autointelli.com/" target="_blank" title="Autointelli"  style={{marginbottom :'0px' }}>
        2024 All rights reserved Autointelli</a> 
      </div>
      </div>
      </div>
    </main>
  
  );
}

export default Search;


