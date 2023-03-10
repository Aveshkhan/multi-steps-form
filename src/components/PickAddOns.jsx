import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const PickAddOns = () => {
  const [onlineServiceCheck, setOnlineServiceCheck] = useState(false)
  const [largerStorageCheck, setLargerStorageCheck] = useState(false)
  const [customizableProfileCheck, setCustomizableProfileCheck] = useState(false)


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

              <div className={`form-check addsOnsCards ${onlineServiceCheck === true ? "active" : ""}`} >
                <input className="form-check-input ms-0" type="checkbox" onChange={(e) => {setOnlineServiceCheck(!onlineServiceCheck)}} id="onlineServiceCheck" />
                <label className="form-check-label" for="onlineServiceCheck">
                  <div className="addOnsCardContent">
                    <p className="addOnsCardsHeading mb-0">Online service</p>
                    <p className="addOnsCardsSubHeading mb-0">Access to multiplayer games</p>
                  </div>
                  <div className="addOnsCardPrice">
                    <p className='mb-0'>+$10/yr</p>
                  </div>
                </label>
              </div>
              <div className={`form-check addsOnsCards ${largerStorageCheck === true ? "active" : ""}`} >
                <input className="form-check-input ms-0" type="checkbox" onChange={(e) => {setLargerStorageCheck(!largerStorageCheck)}} id="largerStorageCheck" />
                <label className="form-check-label" for="largerStorageCheck">
                  <div className="addOnsCardContent">
                    <p className="addOnsCardsHeading mb-0">Larger storage</p>
                    <p className="addOnsCardsSubHeading mb-0">Extra 1TB of cloud save</p>
                  </div>
                  <div className="addOnsCardPrice">
                    <p className='mb-0'>+$20/yr</p>
                  </div>
                </label>
              </div>
              <div className={`form-check addsOnsCards ${customizableProfileCheck === true ? "active" : ""}`} >
                <input className="form-check-input ms-0" type="checkbox" onChange={(e) => {setCustomizableProfileCheck(!customizableProfileCheck)}} id="customizableProfileCheck" />
                <label className="form-check-label" for="customizableProfileCheck">
                  <div className="addOnsCardContent">
                    <p className="addOnsCardsHeading mb-0">Customizable profile</p>
                    <p className="addOnsCardsSubHeading mb-0">Custom theme on your profile</p>
                  </div>
                  <div className="addOnsCardPrice">
                    <p className='mb-0'>+$20/yr</p>
                  </div>
                </label>
              </div>


            </div>



            <div className="stepsRightBottomContent">
              <NavLink className="btn border-0 text-black-50 fw-bold" to="/selectyourplan">Go Back</NavLink>
              <NavLink className="btn btn-primary" to="/finishingUp">Next Step</NavLink>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default PickAddOns
