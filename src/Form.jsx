import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';


export default function Form () {
const handleSubmit = event => {
  event.preventDefault();
  
};


  return (
    <div>
      <Formik 
      initialValues = {{
          name: '',
    email: '',
    gender: '',
    role: '',
    terms: ''}}
    
    validate={values=>{

      const errors = {};


      if(!values.name){
        errors.name = 'Name is Required'
      }


      if(!values.email){
        errors.email = 'Email is Required'
      }

      if(!values.gender){
        errors.gender = 'Gender is Required'
      }

       if(!values.terms){
        errors.terms = 'Accept terms and Conditions'
      }

      return errors;
    }}
    
    onSubmit={ values =>{
      console.log(values);
      console.log('Form Submitted')
    }}
    >
    {({ values}) =>{
      return (
        <div>
        <Form >
          <label>Name: </label>
          <Field type="text" name="name"/>
          <ErrorMessage name="name" component="div" className="error"/>

           <br/>
           <br/>

           <label>Email: </label>
          <Field type="email" name="email"/>
          <ErrorMessage name="email" component="div" className="error"/>

           <br/>
           <br/>

          <label>Gender: </label>
          <label><Field type="radio" name="gender" value="male"/>
          Male</label>

          <label>
          <Field type="radio" name="gender" value="female"/>
          Female</label>
 <label>
          <Field type="radio" name="gender" value="other"/>
         Other</label>
          <ErrorMessage name="gender" component="div" className="error"/>

            <br/>
            <br/>

            <label>Role: </label>
            <Field name="role" as="select">
            <option value="react"> React Developer</option>
            <option value="node"> Node Developer</option>
            <option value="mern"> MERN Developer</option>
            </Field>

            <br/>
            <br/>

            <Field type="checkbox" name="terms" />
            <label>Terms and Conditions</label>
            <ErrorMessage name="terms" component="div" className="error" />

            <br/>
            <br/>

             <button type="submit">Submit</button>


        </Form>
          {/* <form onSubmit={handleSubmit}>
        <div>
          <label>Candidate Name: </label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={values.name}
          />
          <br />
          <span className="error">
            {errors.name ? errors.name : <></>}
          </span>
        </div>
        <br />
        <div>
          <label>Candidate Email: </label>
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={values.email}
          />
          <br />
          <span className="error">
            {errors.email ? errors.email : <></>}
          </span>
        </div>
        <br />
        <div>
          <label>Gender: </label>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={handleChange}
            checked={values.gender === 'male'}
          />

          <label>Male</label>

          <input
            type="radio"
            name="gender"
            value="female"
            onChange={handleChange}
            checked={values.gender === 'female'}
          />
          <label>Female</label>

          <input
            type="radio"
            name="gender"
            value="other"
            onChange={handleChange}
            checked={values.gender === 'other'}
          />

          <label>Other</label>
          <br />
          <span className="error">
            {errors.gender ? errors.gender : <></>}
          </span>
        </div>
        <br />
        <div>
          <label>Role: </label>
          <select
            onChange={handleChange}
            name="role"
            value={values.role}
          >
            <option value="react"> React Developer</option>
            <option value="node"> Node Developer</option>
            <option value="mern"> MERN Developer</option>
          </select>
        </div>

        <br />
        <div>
          <input
            onChange={handleChange}
            name="terms"
            type="checkbox"
            checked={values.terms}
          />
          <label>Accept terms and Conditions</label>
          <br />
          <span className="error">
            {errors.terms ? errors.terms : <></>}
          </span>
        </div>
        <br />
        <input type="submit" value="submit" />
      </form> */}
      </div>
      )
    }}
      </Formik>
    </div>
  )

}