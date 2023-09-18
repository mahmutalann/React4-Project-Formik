import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from "yup";
import { FormField, Button, Label } from "semantic-ui-react";
import CodingIoTextInput from '../utilities/customFormControls/CodingIoTextInput';

export default function ProductAdd() {
    const initialValues = { productName: "", unitPrice: 10 }

    const schema = Yup.object({
        productName: Yup.string().required("Product Name Required"),
        unitPrice: Yup.number().required("Product Price Required"),

    })
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => { //This operation provides catching the submit.
                console.log(values)
            }}
        >
            <Form className="ui form">
                <CodingIoTextInput name="productName" placeholder="Product Name" />
                <CodingIoTextInput name="unitPrice" placeholder="Product Price" />

                {/* <FormField>
                    <Field name="productName" placeholder="Product Name"></Field>
                    <ErrorMessage name="productName" render={error =>
                        <Label pointing basic color="red" content={error}></Label>
                    }></ErrorMessage>
                </FormField> 
                <FormField>
                    <Field name="unitPrice" placeholder="Product Price"></Field>
                    <ErrorMessage name="unitPrice" render={error =>
                        <Label pointing basic color="red" content={error}></Label>
                    }></ErrorMessage>
                </FormField>  */}

                <Button color="green" type="submit"></Button>
            </Form>
        </Formik>
    )
}
