import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


const PersonalInfo = () => {

    const navigate = useNavigate();
    const phoneRegExp = /^[6-9]\d{9}$/

    const submit = (values) => {
        console.log(values)
        navigate('/selectyourplan')
    }

    const personalInfoFormSchema = Yup.object().shape({
        name: Yup.string().required("Name is required"),
        email: Yup.string().email("Invalid email address format").required("Email is required"),
        phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required("Phone number is required")

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
                        <Formik initialValues={{ name: "", email: "", phoneNumber: "" }} validationSchema={personalInfoFormSchema} onSubmit={submit}>
                            {({touched, errors}) => (
                                <Form className='d-flex flex-column justify-content-between h-100'>
                                    <div className="stepRightTopContent mb-4">
                                        <h2 className='stepsHeadingName'>Personal info</h2>
                                        <p className='stepsSubHeading'>Please provide your name, email address, and phone number</p>
                                    </div>
                                    <div className="stepsRightInnerContent">

                                        <div className="mb-3">
                                            <label htmlFor="name" className="form-label">Name</label>
                                            <Field type="text" name='name' className={`form-control ${touched.name && errors.name ? "is-invalid" : ""}`} id="name" placeholder="e.g. Avesh Khan" />
                                            <ErrorMessage component="div" name="name" className='invalid-feedback' />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">Email Address</label>
                                            <Field type="text" name='email' className={`form-control ${touched.email && errors.email ? "is-invalid" : ""}`} id="email" placeholder="e.g. aveshkhan@lorem.com" />
                                            <ErrorMessage component="div" name="email" className='invalid-feedback' />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                                            <Field type="number" name='phoneNumber' className={`form-control ${touched.phoneNumber && errors.phoneNumber ? "is-invalid" : ""}`} id="phoneNumber" placeholder="e.g. +1 234 567 890" />
                                            <ErrorMessage component="div" name="phoneNumber" className='invalid-feedback' />
                                        </div>

                                    </div>

                                    <div className="stepsRightBottomContent mt-5">
                                        <button type='submit' className="btn btn-primary">Next Step</button>
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

export default PersonalInfo