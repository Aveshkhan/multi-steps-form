import React, { useEffect, useState } from 'react'

import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const FinishingUp = () => {

    const navigate = useNavigate();

    const [planDuration, setPlanDuration] = useState(JSON.parse(localStorage.getItem('planDuration')) || false)
    const [subscription, setSubscription] = useState(JSON.parse(localStorage.getItem('subscription')) || "")
    const [addOn, setaddOn] = useState(JSON.parse(localStorage.getItem('pickAddsOn')) || [])
    const [onlineServiceCheck, setOnlineServiceCheck] = useState(addOn[0].onlineService || false)
    const [largerStorageCheck, setLargerStorageCheck] = useState(addOn[1].largerStorage || false)
    const [customizableProfileCheck, setCustomizableProfileCheck] = useState(addOn[2].customizableProfile || false)
    const [onlineServiceAmount, setOnlineServiceAmount] = useState(0)
    const [largerStorageAmount, setLargerStorageAmount] = useState(0)
    const [customizableProfileAmount, setCustomizableProfileAmount] = useState(0)
    const [subscriptionAmount, setSubscriptionAmount] = useState(JSON.parse(localStorage.getItem('subscriptionAmount')) || "")
    const [totalAmount, setTotalAmount] = useState(0)
    const [subscriptionName, setSubscriptionName] = useState(localStorage.getItem('subscriptionName') || "")

    
    const setTotalAmountFunction = () => {
        setTotalAmount(subscriptionAmount + onlineServiceAmount + largerStorageAmount + customizableProfileAmount)
    }

    useEffect(() => {
        console.log(planDuration, parseInt(subscription.plan, 10), onlineServiceCheck, largerStorageCheck, customizableProfileCheck)
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
        setTimeout(() => {
            setTotalAmountFunction()
        }, 500) 
        
    })

    const thankyouSubmit = () => {
        navigate('/thankYou')
        localStorage.clear()
    }

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
                                        <h5 className='fs-6 fw-bold txtDark'>{subscriptionName} {planDuration === true ? "(Yearly)" : "(Monthly)"}</h5>
                                        <p className='text-decoration-underline'><NavLink to="/selectyourplan">Change</NavLink></p>
                                    </div>
                                    <div className="summaryContentRight">
                                        <h5 className="fs-6 fw-bold txtDark">${subscriptionAmount}{planDuration === true ? "/yr" : "/mo"}</h5>
                                    </div>
                                </div>
                                {onlineServiceCheck === true ? <div className="summaryContentRow mt-3">
                                    <div className="summaryContentLeft">
                                        <p className='mb-0'>Online service</p>
                                    </div>
                                    <div className="summaryContentRight">
                                        <h5 className="fs-7">+${onlineServiceAmount}{planDuration === true ? "/yr" : "/mo"}</h5>
                                    </div>
                                </div> : ""}
                                {largerStorageCheck === true ? <div className="summaryContentRow mt-3">
                                    <div className="summaryContentLeft">
                                        <p className='mb-0'>Larger storage</p>
                                    </div>
                                    <div className="summaryContentRight">
                                        <h5 className="fs-7 mb-0">+${largerStorageAmount}{planDuration === true ? "/yr" : "/mo"}</h5>
                                    </div>
                                </div> : ""}
                                {customizableProfileCheck === true ? <div className="summaryContentRow mt-3">
                                    <div className="summaryContentLeft">
                                        <p className='mb-0'>Customizable profile</p>
                                    </div>
                                    <div className="summaryContentRight">
                                        <h5 className="fs-7 mb-0">+${customizableProfileAmount}{planDuration === true ? "/yr" : "/mo"}</h5>
                                    </div>
                                </div> : ""}

                            </div>
                            <div className="summaryContentRow mt-3 px-4">
                                <div className="summaryContentLeft">
                                    <p className='mb-0'>Total (per year)</p>
                                </div>
                                <div className="summaryContentRight">
                                    <h5 className="fw-bold txtPurple mb-0">${totalAmount}{planDuration === true ? "/yr" : "/mo"}</h5>
                                </div>
                            </div>
                        </div>


                        <div className="stepsRightBottomContent">
                            <NavLink className="btn border-0 text-black-50 fw-bold" to="/pickAddOns">Go Back</NavLink>
                            <button className="btn btn-primary" onClick={thankyouSubmit}>Confirm</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default FinishingUp