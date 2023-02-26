import React from 'react'
import { NavLink } from 'react-router-dom'

const PersonalInfo = () => {
    return (
        <div>
            <div className="container center min-vh-100">
                <div className="stepsContent row shadow-lg p-3">
                    <div className="col-4 px-0">
                        <div className="stepLeftContent">
                            <ul>
                                <li className='row'>
                                    <div className="col-3">
                                        <div className="stepsNumberIcon active">1</div>
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
                    <div className="col-8 personalInfo stepsRightContent">
                        <div className="stepRightTopContent mb-4">
                            <h2 className='stepsHeadingName'>Personal info</h2>
                            <p className='stepsSubHeading'>Please provide your name, email address, and phone number</p>
                        </div>
                        <div className="stepsRightInnerContent">
                            <div className="mb-3">
                                <label for="formGroupExampleInput" className="form-label">Name</label>
                                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="e.g. Avesh Khan" />
                            </div>
                            <div className="mb-3">
                                <label for="formGroupExampleInput2" className="form-label">Email Address</label>
                                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="e.g. aveshkhan@lorem.com" />
                            </div>
                            <div className="mb-3">
                                <label for="formGroupExampleInput2" className="form-label">Phone Number</label>
                                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="e.g. +1 234 567 890" />
                            </div>
                        </div>


                        <div className="stepsRightBottomContent">
                            <NavLink className="btn btn-primary" to="/selectyourplan">Next Step</NavLink>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalInfo