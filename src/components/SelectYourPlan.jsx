import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import { NavLink } from 'react-router-dom'
import arcadeIcon from '../assets/images/icon-arcade.svg'
import advanceIcon from '../assets/images/icon-advanced.svg'
import proIcon from '../assets/images/icon-pro.svg'

const SelectYourPlan = () => {

  const navigate = useNavigate();

  const [planDuration, setPlanDuration] = useState(JSON.parse(localStorage.getItem('planDuration')) || false)
  

  const changePlanDuration = () => {
    setPlanDuration((current) => !current)
    localStorage.setItem('planDuration', JSON.stringify(!planDuration))
    console.log(planDuration)

  }

  const submitSelectYourPlan = (values) => {
    console.log(values)
    localStorage.setItem('subscription', JSON.stringify(values))
    navigate('/pickAddOns')
  }

  const selectYourPlanSchema = Yup.object().shape({
    plan: Yup.string().required("")
  })


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
            <Formik initialValues={{ plan: "" }} validationSchema={selectYourPlanSchema} onSubmit={submitSelectYourPlan}>
              {({ values }) => (
                <Form className='d-flex flex-column justify-content-between h-100'>
                  <div className="stepRightTopContent mb-4">
                    <h2 className='stepsHeadingName'>Select your plan</h2>
                    <p className='stepsSubHeading'>You have the option of monthly or yearly billing.</p>
                  </div>
                  <div className="stepsRightInnerContent">
                    <div className="row mb-5">
                      <div className="col-4">
                        <Field type="radio" className="btn-check" name='plan' value="1" id="btn-check-outlined" autoComplete="off" />
                        <label className="btn cardSelection" htmlFor="btn-check-outlined">
                          <img className='cardSelectionImg' src={arcadeIcon} alt="arcadeIcon" />
                          <p className='cardSelectionHeader mb-0'>Arcade</p>
                          <p className='cardSelectionPrice mb-0'>${planDuration === true ? "90/yr" : "9/mo"}</p>
                          <p className='cardSelectionYearlyDiscount mb-0'>{planDuration === true && "2 months free"}</p>
                        </label>
                      </div>
                      <div className="col-4">
                        <Field type="radio" className="btn-check" name='plan' value="2" id="btn-check-outlined2" autoComplete="off" />
                        <label className="btn cardSelection" htmlFor="btn-check-outlined2">
                          <img className='cardSelectionImg' src={advanceIcon} alt="advanceIcon" />
                          <p className='cardSelectionHeader mb-0'>Advanced</p>
                          <p className='cardSelectionPrice mb-0'>${planDuration === true ? "120/yr" : "12/mo"}</p>
                          <p className='cardSelectionYearlyDiscount mb-0'>{planDuration === true && "2 months free"}</p>
                        </label>
                      </div>
                      <div className="col-4">
                        <Field type="radio" className="btn-check" name='plan' value="3" id="btn-check-outlined3" autoComplete="off" />
                        <label className="btn cardSelection" htmlFor="btn-check-outlined3">
                          <img className='cardSelectionImg' src={proIcon} alt="proIcon" />
                          <p className='cardSelectionHeader mb-0'>Pro</p>
                          <p className='cardSelectionPrice mb-0'>${planDuration === true ? "150/yr" : "15/mo"}</p>
                          <p className='cardSelectionYearlyDiscount mb-0'>{planDuration === true && "2 months free"}</p>
                        </label>
                      </div>
                    </div>
                    <div className="monthyYearlyToggle">
                      <p className="toggleText mb-0">Monthly</p>
                      <div className="form-check form-switch">
                        <input className="form-check-input customToggle" onClick={changePlanDuration} defaultChecked={planDuration === true} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                      </div>
                      <p className="toggleText mb-0">Yearly</p>
                    </div>

                  </div>

                  <div className="stepsRightBottomContent mt-5">
                    <NavLink className="btn border-0 text-black-50 fw-bold" to="/">Go Back</NavLink>
                    <button className="btn btn-primary" type='submit' >Next Step</button>
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

export default SelectYourPlan