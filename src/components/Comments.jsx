//Comments.js
import React from 'react'
import { useFormik } from 'formik'
import { useState } from 'react'

export function Comments() {
    const [comments, setComments] = useState([])

    const formik = useFormik({
        initialValues: {
            name: '',
            comment: ''
        },
        onSubmit: values => {
            setComments(oldComments => [...oldComments, values]);
            console.log('comments', comments)
        }
    })

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <h1>Add comment form: </h1>
                <label htmlFor='name'>Name:</label>
                <br />
                <input type='text' id='name' name='name' onChange={formik.handleChange} value={formik.values.name} />
                <br />
                <br />
                <label htmlFor='comment'>Comment:</label>
                <br />
                <textarea type='text' id='comment' name='comment' onChange={formik.handleChange} value={formik.values.comment}></textarea>
                <br />
                <button>Submit</button>
            </form>

            {
                comments.map(comment =>
                    <p key={comment.name + comment.comment}>
                        <b>Name: </b> {comment.name} <b>Comment: </b> {comment.comment}
                    </p>
                )
            }
        </>
    )
}

export default Comments