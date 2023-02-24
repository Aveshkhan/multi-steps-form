import React from 'react'
import { NavLink } from 'react-router-dom'

const PersonalInfo = () => {
    return (
        <div>
            <div className="container center vh-100">
                <div className="stepsContent row p-3">
                    <div className="col-4 px-0">
                    <div className="stepLeftContent">
                        <ul>
                            <li className='row'>
                                <div className="col-3"></div>
                                <div className="col-9">
                                    <div className="stepsNumber">STEP 1</div>
                                    <div className="stepsName">YOUR INFO</div>
                                </div>
                            </li>
                            <li className='row'>
                                <div className="col-3"></div>
                                <div className="col-9">
                                    <div className="stepsNumber">STEP 2</div>
                                    <div className="stepsName">YOUR INFO</div>
                                </div>
                            </li>
                            <li className='row'>
                                <div className="col-3"></div>
                                <div className="col-9">
                                    <div className="stepsNumber">STEP 3</div>
                                    <div className="stepsName">YOUR INFO</div>
                                </div>
                            </li>
                            <li className='row'>
                                <div className="col-3"></div>
                                <div className="col-9">
                                    <div className="stepsNumber">STEP 4</div>
                                    <div className="stepsName">YOUR INFO</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-8 stepsRightContent">
                        <h2>Personal info</h2>
                        <p>Please provide your name, email address, and phone number</p>

                        <div className="stepsRightInnerContent">
                            <div className="mb-3">
                                <label for="formGroupExampleInput" className="form-label">Name</label>
                                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" />
                            </div>
                            <div className="mb-3">
                                <label for="formGroupExampleInput2" className="form-label">Email Address</label>
                                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder" />
                            </div>
                            <div className="mb-3">
                                <label for="formGroupExampleInput2" className="form-label">Phone Number</label>
                                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder" />
                            </div>
                        </div>


                        <div className="stepsRightBottomContent">
                            <NavLink className="btn btn-primary" to="/selectyourplan">Primary</NavLink>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalInfo