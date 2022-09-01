import React, { useState } from 'react';
import { Modal } from './Modal';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { Error, Container, Button } from './styled'

const validationForm = Yup.object().shape({
  name: Yup.string()
  .min(2, 'Your name is too Short!')
  .required('Please, enter your name!'),

  email: Yup.string()
  .email('The email format is invalid!')
  .required('Please, enter your email!'),

  password: Yup.string()
  .min(6, 'six characters minimun!')
  .required('Please, enter your password!')
})

export const FormContact = () => {

  const [modal, setModal] = useState(false);
  const [data, setData] = useState('');

  const handleModal = () => {
    setModal(!modal);
  }

  return (
    <div>
        <Formik
          initialValues={{
            name: "", 
            email: "", 
            password:"",
            message:""
          }}
          validationSchema={ validationForm }
          onSubmit={
            values => {
              setData(JSON.stringify(values, null, 2));
              handleModal();
            }
          }
          >
          <Form>
            <Container>
              <h3>Login Form</h3>
              <label htmlFor='name'>Name
              <Field
                id='name'
                name='name' 
                type='text'
                placeholder='Enter your name'
              /></label>
              <ErrorMessage name='name'>{msg => (
                <Error>{msg}</Error>
              )}</ErrorMessage>
              <label htmlFor='email'>Email
              <Field 
                id='email' 
                name='email' 
                placeholder='Enter your email'
              /></label>
              <ErrorMessage name='email'>{msg => (
                <Error>{msg}</Error>
              )}</ErrorMessage>
              <label htmlFor='password'>Password
              <Field
                id='password'
                name='password'
                type='password'
                placeholder='Enter your password'
              /></label>
              <ErrorMessage name='password'>{msg => (
                <Error>{msg}</Error>
              )}</ErrorMessage>
              <label htmlFor='message'>Comments
              <Field
                as='textarea'
                id='message'
                name='message' 
              /></label>
              <Button type='submit'>Submit</Button>
              {modal && <Modal closeModal={handleModal} data={data}/>}
            </Container>
          </Form>
        </Formik>
    </div>
  )
}
