import React from 'react'
import { NavLink } from 'react-router-dom'

const PickAddOns = () => {
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
                    <div className="stepsNumberIcon">2</div>
                  </div>
                  <div className="col-8">
                    <div className="stepsNumber">STEP 2</div>
                    <div className="stepsName">SELECT PLAN</div>
                  </div>
                </li>
                <li className='row'>
                  <div className="col-3">
                    <div className="stepsNumberIcon active">3</div>
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
          <div className="col-8 addOns stepsRightContent">
            <div className="stepRightTopContent mb-4">
              <h2 className='stepsHeadingName'>Pick add-ons</h2>
              <p className='stepsSubHeading'>Add-ons help enhance your gaming experience.</p>
            </div>
            <div className="stepsRightInnerContent">

              <div className="form-check addsOnsCards">
                <input className={"form-check-input ms-0"  ? "active" : "" } type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" for="flexCheckDefault">
                  <div className="addOnsCardContent">
                    <p className="addOnsCardsHeading mb-0">Online service</p>
                    <p className="addOnsCardsSubHeading mb-0">Access to multiplayer games</p>
                  </div>
                  <div className="addOnsCardPrice">
                    <p className='mb-0'>+$10/yr</p>
                  </div>
                </label>
              </div>


            </div>



            <div className="stepsRightBottomContent">
              <NavLink className="btn border-0 text-black-50 fw-bold" to="/selectyourplan">Go Back</NavLink>
              <NavLink className="btn btn-primary" to="/pickAddOns">Next Step</NavLink>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default PickAddOns