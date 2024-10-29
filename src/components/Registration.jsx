import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Formik } from 'formik';
import { Form } from 'formik';
import CustomInput from './CustomInput';

export function Registration() {

    const formik = useFormik({
        initialValues: {
            firstName: '',
            secondName: '',
            email: '',
            password: '',
            age: ''
        },
        onSubmit: values => {

        },
        validate: values => {
            let errors = {}

            //FirstName
            if (!values.firstName) {
                errors.firstName = 'Required'
            } else if (values.firstName.length < 3) {
                errors.firstName = 'The length must be at least 3 symbols'
            }

            //SecondName
            if (!values.secondName) {
                errors.secondName = 'Required'
            } else if (!/^[A-Za-zА-Яа-я]{0,10}\s[0-9]{8}$/i.test(values.secondName)) {
                errors.secondName = 'The last name should contain no more than (10 + your student ID number) characters';
            }

            //Email
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            //Age
            if (!values.age) {
                errors.age = 'Required and must be number value';
            } else if (values.age < 16 || values.age > 33) {
                errors.age = 'Age must be in range 16-33';
            }

            //[A-Z].*[^a-zA-Z]|[^a-zA-Z].*[A-Z]
            //Password 
            if (!values.password) {
                errors.password = 'Required';
            } else if (!/^[A-Z].*[^a-zA-Z]|[^a-zA-Z].*[A-Z]$/i.test(values.password)) {
                errors.password = 'The password must contain at least 1 capital letter and 1 character other than a letter';
            }

            console.log(errors)

            return errors
        },
    });

    return (
        <>
            <Formik {...formik}>
                <Form onSubmit={formik.handleSubmit}>
                    <h1>Reg form: </h1>
                    <CustomInput label="First name:" name="firstName" type="text" onChange={formik.handleChange} value={formik.values.firstName} />
                    {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
                    <CustomInput label="Second name:" name="secondName" type="text" onChange={formik.handleChange} value={formik.values.secondName} />
                    {formik.errors.secondName ? <div>{formik.errors.secondName}</div> : null}
                    <CustomInput label="Email:" name="email" type="text" onChange={formik.handleChange} value={formik.values.email} />
                    {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                    <CustomInput label="Age:" name="age" type="number" onChange={formik.handleChange} value={formik.values.age} />
                    {formik.errors.age ? <div>{formik.errors.age}</div> : null}
                    <CustomInput label="Password:" name="password" type="password" onChange={formik.handleChange} value={formik.values.password} />
                    {formik.errors.password ? <div>{formik.errors.password}</div> : null}
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </>
    );
}

export default Registration;