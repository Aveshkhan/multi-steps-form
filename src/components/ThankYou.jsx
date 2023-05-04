import React from 'react'
import checkIcon from '../assets/images/icon-thank-you.svg'

const ThankYou = () => {
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
                                        <div className="stepsNumberIcon">3</div>
                                    </div>
                                    <div className="col-8">
                                        <div className="stepsNumber">STEP 3</div>
                                        <div className="stepsName">ADD-ONS</div>
                                    </div>
                                </li>
                                <li className='row'>
                                    <div className="col-3">
                                        <div className="stepsNumberIcon active">4</div>
                                    </div>
                                    <div className="col-8">
                                        <div className="stepsNumber">STEP 4</div>
                                        <div className="stepsName">SUMMARY</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-8 thankYou stepsRightContent">
                        
                        <img src={checkIcon} alt="" />                
                        <h2 className='stepsHeadingName txtDark'>Thank you!</h2>
                        <p className='text-body-tertiary fw-semibold px-4'>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>

                    </div>
                </div>
            </div>
    </div>
  )
}

export default ThankYou