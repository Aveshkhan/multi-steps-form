import React from 'react'
import { NavLink } from 'react-router-dom'
import arcadeIcon from '../assets/images/icon-arcade.svg'
import advanceIcon from '../assets/images/icon-advanced.svg'
import proIcon from '../assets/images/icon-pro.svg'

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
          <div className="col-8 selectPlan stepsRightContent">
            <div className="stepRightTopContent mb-4">
              <h2 className='stepsHeadingName'>Select your plan</h2>
              <p className='stepsSubHeading'>You have the option of monthly or yearly billing.</p>
            </div>
            <div className="stepsRightInnerContent">
              <div className="row mb-5">
                <div className="col-4">
                  <input type="radio" className="btn-check" name='options' id="btn-check-outlined" autocomplete="off" />
                  <label className="btn cardSelection" for="btn-check-outlined">
                    <img className='cardSelectionImg' src={arcadeIcon} alt="arcadeIcon" />
                    <p className='cardSelectionHeader mb-0'>Arcade</p>
                    <p className='cardSelectionPrice mb-0'>$90/yr</p>
                    <p className='cardSelectionYearlyDiscount mb-0'>2 months free</p>
                  </label>
                </div>
                <div className="col-4">
                  <input type="radio" className="btn-check" name='options' id="btn-check-outlined2" autocomplete="off" />
                  <label className="btn cardSelection" for="btn-check-outlined2">
                    <img className='cardSelectionImg' src={advanceIcon} alt="advanceIcon" />
                    <p className='cardSelectionHeader mb-0'>Advanced</p>
                    <p className='cardSelectionPrice mb-0'>$120/yr</p>
                    <p className='cardSelectionYearlyDiscount mb-0'>2 months free</p>
                  </label>
                </div>
                <div className="col-4">
                  <input type="radio" className="btn-check" name='options' id="btn-check-outlined3" autocomplete="off" />
                  <label className="btn cardSelection" for="btn-check-outlined3">
                    <img className='cardSelectionImg' src={proIcon} alt="proIcon" />
                    <p className='cardSelectionHeader mb-0'>Pro</p>
                    <p className='cardSelectionPrice mb-0'>$150/yr</p>
                    <p className='cardSelectionYearlyDiscount mb-0'>2 months free</p>
                  </label>
                </div>
              </div>
              <div className="monthyYearlyToggle">
                <p className="toggleText mb-0">Monthly</p>
                <div class="form-check form-switch">
                  <input className="form-check-input customToggle" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                </div>
                <p className="toggleText mb-0">Yearly</p>
              </div>

            </div>



            <div className="stepsRightBottomContent">
              <NavLink className="btn border-0 text-black-50 fw-bold" to="/">Go Back</NavLink>
              <NavLink className="btn btn-primary" to="/pickAddOns">Next Step</NavLink>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default SelectYourPlan