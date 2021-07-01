import React from "react";
import { Formik, Form } from "formik";
import { InputField } from "./Fields";
import * as Yup from "yup";

const FormFields = (props) => {
    return (
        <Formik
            initialValues={{
                name: props.initialValues ? props.initialValues.Title : "",
                surname: props.initialValues ? props.initialValues.Title : "",
                city: props.initialValues ? props.initialValues.Title : "",
                university: props.initialValues ? props.initialValues.Title : "",
                course: props.initialValues ? props.initialValues.Title : "",
            }}
            validationSchema={Yup.object().shape({
                name: Yup.string().required("Name is required"),
                surname: Yup.string().required("Surname is required"),
                city: Yup.string().required("City is required"),
                university: Yup.string().required("University is required"),
                course: Yup.string().required("Course is required"),
            })}
            onSubmit={(values) => {
                const payload = {
                    ...values,
                };
                props.doSubmit(payload);
            }}
        >
            <Form id="form">
                <InputField
                    label="Enter your name"
                    name="name"
                    type="text"
                    placeholder="Your answer"
                />
                <InputField
                    label="Enter your surname"
                    name="surname"
                    type="text"
                    placeholder="Your answer"
                />
                <InputField
                    label="Enter your city"
                    name="city"
                    type="text"
                    placeholder="Your answer"
                />
                <InputField
                    label="Enter your university"
                    name="university"
                    type="text"
                    placeholder="Your answer"
                />
                <InputField
                    label="Enter course"
                    name="course"
                    type="text"
                    placeholder="Your answer"
                />
            </Form>
        </Formik>
    );
};

export default FormFields;
