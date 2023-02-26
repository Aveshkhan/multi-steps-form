import React from 'react'
import { NavLink } from 'react-router-dom'
import arcadeIcon from '../assets/images/icon-arcade.svg'

const SelectYourPlan = () => {
  return (
    <div>
      <div className="container center min-vh-100">
        <div className="stepsContent row shadow-lg p-3">
          <div className="col-4 px-0">
            <div className="stepLeftContent">
              <ul>
                <li className='row'>
                  <div className="col-3">
                    <div className="stepsNumberIcon">1</div>
                  </div>
                  <div className="col-8">
                    <div className="stepsNumber">STEP 1</div>
                    <div className="stepsName">YOUR INFO</div>
                  </div>
                </li>
                <li className='row'>
                  <div className="col-3">
                    <div className="stepsNumberIcon active">2</div>
                  </div>
                  <div className="col-8">
                    <div className="stepsNumber">STEP 2</div>
                    <div className="stepsName">SELECT PLAN</div>
                  </div>
                </li>
                <li className='row'>
                  <div className="col-3">
                    <div className="stepsNumberIcon">3</div>
                  </div>
                  <div className="col-8">
                    <div className="stepsNumber">STEP 3</div>
                    <div className="stepsName">ADD-ONS</div>
                  </div>
                </li>
                <li className='row'>
                  <div className="col-3">
                    <div className="stepsNumberIcon">4</div>
                  </div>
                  <div className="col-8">
                    <div className="stepsNumber">STEP 4</div>
                    <div className="stepsName">SUMMARY</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-8 stepsRightContent">
            <div className="stepRightTopContent mb-4">
              <h2 className='stepsHeadingName'>Personal info</h2>
              <p className='stepsSubHeading'>Please provide your name, email address, and phone number</p>
            </div>
            <div className="stepsRightInnerContent row">
              <div className="col-4">
                <input type="radio" class="btn-check" name='options' id="btn-check-outlined" autocomplete="off" />
                <label class="btn cardSelection" for="btn-check-outlined">
                  <img src={arcadeIcon} alt="" />
                  <p>Single toggle</p>
                </label>
              </div>
              <div className="col-4">
                <input type="radio" class="btn-check" name='options' id="btn-check-outlined2" autocomplete="off" />
                <label class="btn cardSelection" for="btn-check-outlined2">Single toggle</label>
              </div>
              <div className="col-4">
                <input type="radio" class="btn-check" name='options' id="btn-check-outlined3" autocomplete="off" />
                <label class="btn cardSelection" for="btn-check-outlined3">Single toggle</label>
              </div>
            </div>



            <div className="stepsRightBottomContent">
              <NavLink className="btn border-0 text-secondary" to="/">Go Back</NavLink>
              <NavLink className="btn btn-primary" to="/selectyourplan">Next Step</NavLink>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default SelectYourPlan