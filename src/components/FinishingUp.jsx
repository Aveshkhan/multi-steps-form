import React from 'react'
import { NavLink } from 'react-router-dom'

const FinishingUp = () => {
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
                    <div className="col-8 finishingUp stepsRightContent">
                        <div className="stepRightTopContent mb-4">
                            <h2 className='stepsHeadingName'>Finishing Up</h2>
                            <p className='stepsSubHeading'>Double-check everything looks OK before confirming.</p>
                        </div>
                        <div className="stepsRightInnerContent">
                            <div className="summaryContent">
                                <div className="summaryContentRow border-bottom">
                                    <div className="summaryContentLeft">
                                        <h5 className='fs-6 fw-bold txtDark'>Arcade (Yearly)</h5>
                                        <p className='text-decoration-underline'>Change</p>
                                    </div>
                                    <div className="summaryContentRight">
                                        <h5 className="fs-6 fw-bold txtDark">$90/yr</h5>
                                    </div>
                                </div>
                                <div className="summaryContentRow mt-3">
                                    <div className="summaryContentLeft">
                                        <p>Online service</p>
                                    </div>
                                    <div className="summaryContentRight">
                                        <h5 className="fs-7">+$10/yr</h5>
                                    </div>
                                </div>
                                <div className="summaryContentRow">
                                    <div className="summaryContentLeft">
                                        <p className='mb-0'>Larger storage</p>
                                    </div>
                                    <div className="summaryContentRight">
                                        <h5 className="fs-7 mb-0">+$20/yr</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="summaryContentRow mt-3 px-4">
                                    <div className="summaryContentLeft">
                                        <p className='mb-0'>Total (per year)</p>
                                    </div>
                                    <div className="summaryContentRight">
                                        <h5 className="fw-bold txtPurple mb-0">$120/yr</h5>
                                    </div>
                                </div>
                        </div>


                        <div className="stepsRightBottomContent">
                            <NavLink className="btn border-0 text-black-50 fw-bold" to="/pickAddOns">Go Back</NavLink>
                            <NavLink className="btn btn-primary" to="/thankYou">Confirm</NavLink>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default FinishingUp