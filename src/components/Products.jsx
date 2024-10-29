import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Formik } from 'formik';
import { Form } from 'formik';
import CustomInput from './CustomInput';
import CustomTextArea from './CustomTextArea';

export function Products() {
    const [products, setProducts] = useState([]);

    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            image: null
        },
        onSubmit: values => {
            setProducts(oldProducts => [...oldProducts, values]);
            console.log('products', products);
        }
    });

    const handleImageChange = (event) => {
        const file = event.currentTarget.files[0];
        formik.setFieldValue("image", file);
    };

    return (
        <>
            <Formik {...formik}>
                <Form onSubmit={formik.handleSubmit}>
                    <h1>Add product form: </h1>
                    <CustomInput label="Name" name="name" type="text"  onChange={formik.handleChange} value={formik.values.name} />
                    <br />
                    <br />
                    <CustomTextArea label="Description" name="description" type="text"  onChange={formik.handleChange} value={formik.values.description} />
                    <br />
                    <label htmlFor="image">Image:</label>
                    <br />
                    <input
                        type="file"
                        id="image"
                        name="image"
                        accept="image/png, image/jpeg"
                        onChange={handleImageChange}
                    />
                    <br />
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
            {products.map((product, index) => (
                <div key={index}>
                    <p>
                        <b>Name: </b> {product.name}
                        <br />
                        <b>Description: </b> {product.description}
                        <br />
                        
                        {product.image && (
                            <img
                                src={URL.createObjectURL(product.image)}
                                alt="Product"
                                width="200"
                            />
                        )}
                    </p>
                </div>
            ))}
        </>
    );
}

export default Products;