'use client';

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import "./custom-form-style.css";
import Link from "next/link";

export default function CustomForm() {
  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    city: Yup.string().required("Required"),
    postalCode: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
    phone: Yup.string().required("Required"),
    password: Yup.string()
      .required("Required")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Include at least one Uppercase, Lowercase, Number and a special character"
      ),
  });

  // Define the form input type based on the schema
  type FormValues = Yup.InferType<typeof validationSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
  });


  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    alert('Form submitted successfully!');
  };

  return (
    <form className="form"  onSubmit={handleSubmit(onSubmit)}>
      <div className={`input-container  ${errors.firstName?.message ? 'error':''}`}>
        <input id="firstName" type="text" {...register('firstName')} />
        <label htmlFor="firstName">Fist Name</label>
        <small style={{ color: 'red' }}>{errors.firstName?.message}</small>
      </div>
      <div className={`input-container  ${errors.lastName?.message ? 'error':''}`}>
        <input id="lastName" type="text" {...register('lastName')} />
        <label htmlFor="lastName">Last Name</label>
        <small style={{ color: 'red' }}>{errors.lastName?.message}</small>
      </div>
      <div className={`input-container  ${errors.city?.message ? 'error':''}`}>
        <input id="city" type="text" {...register('city')} />
        <label htmlFor="city">City</label>
        <small style={{ color: 'red' }}>{errors.city?.message}</small>
      </div>
      <div className={`input-container  ${errors.postalCode?.message ? 'error':''}`}>
        <input id="postalCode" type="text" {...register('postalCode')} />
        <label htmlFor="postalCode">Postal Code</label>
        <small style={{ color: 'red' }}>{errors.postalCode?.message}</small>
      </div>
      <div className={`input-container full-width ${errors.address?.message ? 'error':''}`}>
        <input id="address" type="text" {...register('address')} />
        <label htmlFor="address">Address</label>
        <small style={{ color: 'red' }}>{errors.address?.message}</small>
      </div>
      <div className={`input-container  ${errors.email?.message ? 'error':''}`}>
        <input id="email" type="email" {...register('email')} />
        <label htmlFor="email">Email</label>
        <small style={{ color: 'red' }}>{errors.email?.message}</small>
      </div>
      <div className={`input-container  ${errors.phone?.message ? 'error':''}`}>
        <input id="phone" type="text" {...register('phone')} />
        <label htmlFor="phone">Phone</label>
        <small style={{ color: 'red' }}>{errors.phone?.message}</small>
      </div>
      <div className={`input-container  ${errors.password?.message ? 'error':''}`}>
        <input id="password" type="password" {...register('password')} />
        <label htmlFor="password">Password</label>
        <small style={{ color: 'red' }}>{errors.password?.message}</small>
      </div>

      <div className='description-container'>
        <span>Use this email to log in to your <Link className='link' href="#">resumedone.io</Link> account and receive notifications.</span>
      </div>
        
      
      <div className='button-container'>
        <button className='save-button' type='submit'>Save</button>
      </div>
    </form>
  );
}
