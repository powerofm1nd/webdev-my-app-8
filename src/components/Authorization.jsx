import React, { useState } from 'react';
import { useFormik } from 'formik';

export function Authorization() {
    const [isAuth, setIsAuth] = useState(false);
    const validLogin = 'admin'
    const validPassword = '123123'

    const formik = useFormik({
        initialValues: {
            login: '',
            password: ''
        },
        onSubmit: values => {
            if (values.login === validLogin && values.password === validPassword)
            {
                setIsAuth(true)
            }
            else
            {
                setIsAuth(false)
            }
        },
        validate: values => {
            let errors = {}
            if (!values.login)
            {
                errors.login = 'Required'
            }

            if (!values.password)
            {
                errors.password = 'Required'
            }

            console.log(errors)

            return errors
        },
    });

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <h1>Authorization form: </h1>
                <label htmlFor="login">Login:</label>
                <br />
                <input type="text" id="login" name="login" onChange={formik.handleChange} value={formik.values.login} />
                { formik.errors.login ? <div>{formik.errors.login}</div> : null }
                <br />
                <br />
                <label htmlFor="password">Password:</label>
                <br />
                <input type="password" id="password" name="password" onChange={formik.handleChange} value={formik.values.password} />
                { formik.errors.password ? <div>{formik.errors.password}</div> : null }
                <br />
                <button type="submit">Submit</button>

                {
                    isAuth ? <h3>Welcome, {formik.values.login}</h3> : <h3>Wrong credentials!</h3> 
                }
            </form>


        </>
    );
}

export default Authorization;