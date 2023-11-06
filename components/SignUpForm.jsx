import { EyeIcon, EyeSlashIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { PhoneIcon } from '@heroicons/react/24/solid'
import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup'

const initialValues = {
    name : "", 
    email : "",
    password : "",
    passwordConfirmation : "",
}  

const validationSchema = Yup.object({
    name : Yup.string().required('Please enter your name').min(6),
    email : Yup.string().email('Your email format is invalid').required('Please enter your email'),
    password : Yup.string().required('Please enter your password').min(8),
    passwordConfirmation: Yup.string().required().oneOf([Yup.ref('password'), null], 'Passwords must match')
})

const setCookie = (id) => {
    if (!document.cookie){
        document.cookie(`username=${id};path="/";expires=${new Date().getTime() + 2 * 24 * 60 * 60}`)
    }
}

export default function SignUpForm({displayHandler}) {
  const formik = useFormik({
    initialValues,  
    onSubmit : async (values) => {
        const res = await axios.post('http://localhost:5000/users' , {...values , isAdmin : false , createdAt : new Date().toISOString()})
        if (res) {
            displayHandler(false)
            setCookie(res.data.id)
            console.log(res)
        }
    },
    validationSchema,
    validateOnMount : true,
  })  
    
  return (
    <>
        <div onClick={() => displayHandler(false)} className="z-10 fixed top-0 h-screen w-full bg-black opacity-60"></div>
        <form onSubmit={formik.handleSubmit} className="z-20 fixed left-[50%] top-[5%] text-neutral-800 transform translate-x-[-50%] bg-white p-4 rounded-lg flex flex-col gap-y-2 w-[30rem]">
            <div className="flex justify-between">
                <b className="text-lg">Create your account</b>
                <XMarkIcon onClick={() => displayHandler(false)} strokeWidth={2} className="w-[1.5rem] cursor-pointer"/>
            </div>
            <span className="w-full h-[1px] bg-zinc-300"></span>
            <NameInput formik={formik} value={formik.values.name}/>
            <EmailInput formik={formik} value={formik.values.email}/>
            <PassInput formik={formik} value={formik.values.password}/>
            <SecPassInput formik={formik} value={formik.values.passwordConfirmation}/>
            <button disabled={!formik.isValid} type='submit' className={`text-white font-bold p-2 rounded-md mt-2 ${!formik.isValid ? 'bg-neutral-300' : 'bg-neutral-900'}`}>create account</button>
            <button className='w-fit'>Have an account ?</button>
            <span className="w-full h-[1px] bg-zinc-300"></span>
            <p>Other options : </p>
            <button className="flex p-2 rounded-md bg-zinc-100 justify-between shadow-customeOne hover:bg-zinc-200">
                <p>Sign up with phone number</p>
                <PhoneIcon className="w-[1.5rem]"/>
            </button>
        </form>
    </>
  )
}

const NameInput = ({formik , value}) => {
    return (
        <>
            <label className="text-lg mt-2" htmlFor="">Enter full name</label>
            <input onBlur={formik.handleBlur} value={value} onChange={formik.handleChange} className="p-2 shadow-customeOne rounded-md bg-zinc-100 outline-neutral-800" type="text" name='name' placeholder="ex : Arsalan ghoochani"/>
            {formik.errors.name && formik.touched.name && <p className='text-red-500'>{formik.errors.name}</p>}
        </>
    )
}

const EmailInput = ({formik , value}) => {
    return (
        <>
            <label className="text-lg mt-2" htmlFor="">Enter your email</label>
            <input onBlur={formik.handleBlur} value={value} className="p-2 shadow-customeOne rounded-md bg-zinc-100 outline-neutral-800" type="email" name='email' onChange={formik.handleChange} placeholder="ex : email@gmail.com"/>
            {formik.errors.email && formik.touched.email && <p className='text-red-500'>{formik.errors.email}</p>}
        </>
    )
}

const PassInput = ({formik , value}) => {

    const [showPass , setShowPass] = useState(false)

    return (
        <>
            <label className="text-lg mt-2" htmlFor="">Enter your password</label>
            <div className='w-full relative cursor-pointer'>
                <input onBlur={formik.handleBlur} value={value} className="w-full p-2 shadow-customeOne rounded-md bg-zinc-100 outline-neutral-800" name='password' onChange={formik.handleChange} type={`${showPass ? 'text' : 'password'}`} placeholder=""/>
                <span onClick={() => setShowPass(!showPass)} className='absolute right-2 top-[6px]'>
                    {showPass ? <EyeIcon className='w-[1.6rem]'/> : <EyeSlashIcon className='w-[1.6rem]'/>}
                </span>
            </div>
            {formik.errors.password && formik.touched.password && <p className='text-red-500'>{formik.errors.password}</p>}
        </>
    )
}

const SecPassInput = ({formik , value}) => {

    const [showPass , setShowPass] = useState(false)

    return (
        <>
            <label className="text-lg mt-2" htmlFor="">Repeat your password</label>
            <div className='w-full relative cursor-pointer'>
                <input onBlur={formik.handleBlur} value={value} className="w-full p-2 shadow-customeOne rounded-md bg-zinc-100 outline-neutral-800" name='passwordConfirmation' onChange={formik.handleChange} type={`${showPass ? 'text' : 'password'}`} placeholder=""/>
                <span onClick={() => setShowPass(!showPass)} className='absolute right-2 top-[6px]'>
                    {showPass ? <EyeIcon className='w-[1.6rem]'/> : <EyeSlashIcon className='w-[1.6rem]'/>}
                </span>
            </div>
            {formik.errors.passwordConfirmation && formik.touched.passwordConfirmation && <p className='text-red-500'>{formik.errors.passwordConfirmation}</p>}
        </>
    )
}