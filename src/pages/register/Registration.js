import React from 'react'
import './registration.css'
import innerImage from '../../images/AutointelliImage.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons'
import { faArrowRight, faLock, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons'
import { Navigate, useNavigate } from 'react-router-dom'
const Registration = () => {
  const navigate = useNavigate('')
  const handleClick = (e) => {
    e.preventDefault();
    navigate('/dash')
  }
  return (
    <div className='wrapper'>
      <div className="inner">
        <div className="image-holder">
          <img src={innerImage} alt="AutoIntelli image" />
        </div>
        <form>
          <h3>Registration Form</h3>
          <div className="form-group">
            <input type="text" placeholder='First Name' className='form-control' />
            <input type="text" placeholder='Last Name' className='form-control' />
          </div>
          <div class="form-wrapper">
						<input type="text" placeholder="Username" class="form-control"/>
            <FontAwesomeIcon icon={faUser} className='icon'/>
					</div>
          <div class="form-wrapper">
						<input type="text" placeholder="Email Address" class="form-control"/>
            <FontAwesomeIcon icon={faEnvelope} className='icon'/>
					</div>
          <div class="form-wrapper">
            <input type="text" placeholder="Phone No" class="form-control"/>
            <FontAwesomeIcon icon={faMobileScreenButton} className='icon' />
					</div>
					<div class="form-wrapper">
						<input type="password" placeholder="Password" class="form-control"/>
						<FontAwesomeIcon icon={faLock} className='icon'/>
					</div>
					<div class="form-wrapper">
						<input type="password" placeholder="Confirm Password" class="form-control"/>
						<FontAwesomeIcon icon={faLock} className='icon'/>
					</div>
					<button onClick={handleClick}>Register
            <FontAwesomeIcon icon={faArrowRight} className='icon'/>
					</button>
        </form>
      </div>
    </div>
  )
}

export default Registration