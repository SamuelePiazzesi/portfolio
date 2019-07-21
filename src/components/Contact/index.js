import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

const contactValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Enter a valid email :(')
    .required('The email is required :)'),
  text: Yup.string()
  .required('You should probably write something :)')
});

const Contact = () => {
  return (
    <div id='contact'>
      <h1>Contact</h1>
      <Formik
      initialValues={{ email: '', text: '' }}
      validationSchema={contactValidationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
      >
      {({ isSubmitting }) => (
        <Form>
          <div className="field">
            <label className="label is-pulled-left">Email</label>
            <div className="control has-icons-left has-icons-right">
              <Field type="email" name="email" className="input" placeholder="Your email here..."/>
              <ErrorMessage name="email" component="span" />
            </div>
          </div>
          <div className="field">
            <label className="label is-pulled-left">Message</label>
            <div className="control has-icons-left has-icons-right">
              <Field type="textarea" name="text" component="textarea" className="textarea" placeholder="Tell me something..."/>
              <ErrorMessage name="text" component="span" />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button type="submit" disabled={isSubmitting} className="button is-link is-large is-fullwidth">Submit</button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
    </div>
  )
}

export default Contact