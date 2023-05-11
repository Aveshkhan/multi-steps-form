import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

const PickAddOns = () => {

  const navigate = useNavigate();
  const [planDuration, setPlanDuration] = useState(JSON.parse(localStorage.getItem('planDuration')) || false)
  const [subscription, setSubscription] = useState(JSON.parse(localStorage.getItem('subscription')) || "")
  const [subscriptionAmount, setSubscriptionAmount] = useState(0)


  const initialValues = {
    pickAddOns: ['onlineService', 'largerStorage', 'customizableProfileCheck']
  }

  const [onlineServiceCheck, setOnlineServiceCheck] = useState(false)
  const [largerStorageCheck, setLargerStorageCheck] = useState(false)
  const [customizableProfileCheck, setCustomizableProfileCheck] = useState(false)
  const [subscriptionName, setSubscriptionName] = useState("")
  const [onlineServiceAmount, setOnlineServiceAmount] = useState(0)
  const [largerStorageAmount, setLargerStorageAmount] = useState(0)
  const [customizableProfileAmount, setCustomizableProfileAmount] = useState(0)


  const submit = (values) => {
    // console.log(values)
    let addOnAmount = [
      { onlineAmount: onlineServiceAmount },
      { largerAmount: largerStorageAmount },
      { customizableAmount: customizableProfileAmount }
    ]
    let selectedAddOns = [
      { onlineService: onlineServiceCheck },
      { largerStorage: largerStorageCheck },
      { customizableProfile: customizableProfileCheck }
    ]


    // addOnAmount = onlineServiceAmount + largerStorageAmount + customizableProfileAmount

    console.log(onlineServiceAmount, largerStorageAmount, customizableProfileAmount)
    localStorage.setItem('pickAddsOn', JSON.stringify(selectedAddOns))
    localStorage.setItem('subscriptionName', (subscriptionName))
    localStorage.setItem('subscriptionAmount', (subscriptionAmount))
    localStorage.setItem('addOnAmounts', JSON.stringify(addOnAmount))
    console.log(selectedAddOns, subscriptionAmount, addOnAmount)
    navigate('/finishingUp')
  }

  const onlineServiceChange = () => {
    setOnlineServiceCheck(!onlineServiceCheck)
    if (onlineServiceCheck === true) {
      if (planDuration === true) {
        setOnlineServiceAmount(10)
        console.log(onlineServiceAmount)
      } else {
        setOnlineServiceAmount(1)
        console.log(onlineServiceAmount)
      }
    }
  }

  const largerStorageChange = () => {
    setLargerStorageCheck(!largerStorageCheck)
    if (largerStorageCheck === true) {
      if (planDuration === true) {
        setLargerStorageAmount(20)
      } else {
        setLargerStorageAmount(2)
      }
    }
  }

  const customizableProfileChange = () => {
    setCustomizableProfileCheck(!customizableProfileCheck)
    if (customizableProfileCheck === true) {
      if (planDuration === true) {
        setCustomizableProfileAmount(20)
      } else {
        setCustomizableProfileAmount(2)
      }
    }
  }

  useEffect(() => {
    if (parseInt(subscription.plan, 10) === 1) {
      setSubscriptionName("Arcade")
      if (planDuration === true) {
        setSubscriptionAmount(90)
      } else {
        setSubscriptionAmount(9)
      }
    } else if (parseInt(subscription.plan, 10) === 2) {
      setSubscriptionName("Advanced")
      if (planDuration === true) {
        setSubscriptionAmount(120)
      } else {
        setSubscriptionAmount(12)
      }
    } else if (parseInt(subscription.plan, 10) === 3) {
      setSubscriptionName("Pro")
      if (planDuration === true) {
        setSubscriptionAmount(150)
      } else {
        setSubscriptionAmount(15)
      }
    }

    if(onlineServiceCheck === true){
      if(planDuration === true){
          setOnlineServiceAmount(10)
      } else {
          setOnlineServiceAmount(1)
      }
  }
  if(largerStorageCheck === true){
      if(planDuration === true){
          setLargerStorageAmount(20)
      } else {
          setLargerStorageAmount(2)
      }
  }
  if (customizableProfileCheck === true){
      if(planDuration === true){
          setCustomizableProfileAmount(20)
      } else {
          setCustomizableProfileAmount(2)
      }
  } 
  })


  return (
    <div>
      <div className="container-md center min-vh-100">
        <div className="stepsContent row shadow-lg p-md-3 p-sm-0">
          <div className="col-md-4 col-sm-12 px-0">
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
          <div className="col-md-8 col-sm-12 addOns stepsRightContent">
            <Formik initialValues={initialValues} onSubmit={submit}>
              {({ errors }) => (
                <Form className='d-flex flex-column justify-content-between h-100'>
                <div className='stepMiddleContentMobile'>
                  <div className="stepRightTopContent mb-4">
                    <h2 className='stepsHeadingName'>Pick add-ons</h2>
                    <p className='stepsSubHeading'>Add-ons help enhance your gaming experience.</p>
                  </div>
                  <div className="stepsRightInnerContent">

                    <div className={`form-check addsOnsCards ${onlineServiceCheck === true ? "active" : ""}`} >
                      <Field className="form-check-input ms-0" type="checkbox" onChange={onlineServiceChange} id="onlineServiceCheck" checked={onlineServiceCheck === true} name="onlineServiceCheck" />
                      <label className="form-check-label" htmlFor="onlineServiceCheck">
                        <div className="addOnsCardContent">
                          <p className="addOnsCardsHeading mb-0">Online service</p>
                          <p className="addOnsCardsSubHeading mb-0">Access to multiplayer games</p>
                        </div>
                        <div className="addOnsCardPrice">
                          <p className='mb-0'>+${planDuration === true ? "10/yr" : "1/mo"}</p>
                        </div>
                      </label>
                    </div>
                    <div className={`form-check addsOnsCards ${largerStorageCheck === true ? "active" : ""}`} >
                      <Field className="form-check-input ms-0" type="checkbox" onChange={largerStorageChange} id="largerStorageCheck" checked={largerStorageCheck === true} name="largerStorageCheck" />
                      <label className="form-check-label" htmlFor="largerStorageCheck">
                        <div className="addOnsCardContent">
                          <p className="addOnsCardsHeading mb-0">Larger storage</p>
                          <p className="addOnsCardsSubHeading mb-0">Extra 1TB of cloud save</p>
                        </div>
                        <div className="addOnsCardPrice">
                          <p className='mb-0'>+${planDuration === true ? "20/yr" : "2/mo"}</p>
                        </div>
                      </label>
                    </div>
                    <div className={`form-check addsOnsCards ${customizableProfileCheck === true ? "active" : ""}`} >
                      <Field className="form-check-input ms-0" type="checkbox" onChange={customizableProfileChange} id="customizableProfileCheck" checked={customizableProfileCheck === true} name="customizableProfileCheck" />
                      <label className="form-check-label" htmlFor="customizableProfileCheck">
                        <div className="addOnsCardContent">
                          <p className="addOnsCardsHeading mb-0">Customizable profile</p>
                          <p className="addOnsCardsSubHeading mb-0">Custom theme on your profile</p>
                        </div>
                        <div className="addOnsCardPrice">
                          <p className='mb-0'>+${planDuration === true ? "20/yr" : "2/mo"}</p>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                  <div className="stepsRightBottomContent">
                    <NavLink className="btn border-0 text-black-50 fw-bold" to="/selectyourplan">Go Back</NavLink>
                    <button type='submit' className="btn btn-primary" >Next Step</button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PickAddOns
