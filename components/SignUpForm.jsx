import { EyeIcon, EyeSlashIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { PhoneIcon } from '@heroicons/react/24/solid'
import axios from 'axios'
import { useFormik } from 'formik'
import { useState } from 'react'
import * as Yup from 'yup'
import { useUser } from './UserRoleProvider'
import { toast } from 'react-toastify'
import { toastConfings } from './toastConfigs'

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
    passwordConfirmation: Yup.string().required('Please repeat your password').oneOf([Yup.ref('password'), null], 'Passwords must match')
})

const setCookie = (id) => {
    if (!document.cookie()){
        document.cookie(`username=${id};path="/";expires=${new Date().getTime() + 2 * 24 * 60 * 60}`)
    }
}

export default function SignUpForm({displayHandler}) {
 
  const setUser = useUser().setUser  
    
  const formik = useFormik({
    initialValues,  
    onSubmit : async (values) => {
        const res = await axios.post('http://localhost:5000/users' , {...values , role : "USER" , favorites : [] , createdAt : new Date().toISOString()})
        if (res) {
            displayHandler(false)
            setUser(res.data)
            toast.success("Account created successfully" , toastConfings)
        }
    },
    validationSchema,
    validateOnMount : true,
  })  
    
  return (
    <>
        <div onClick={() => displayHandler(false)} className="z-10 fixed top-0 h-screen w-full bg-black opacity-60"></div>
        <form style={{width : '30rem'}} onSubmit={formik.handleSubmit} className="z-20 fixed left-1/2 sm:top-1/2 text-neutral-800 transform -translate-x-1/2 sm:-translate-y-1/2 bg-white p-4 rounded-lg flex flex-col gap-y-2 max-sm:w-full max-sm:bottom-0 max-sm:text-sm">
            <div className="flex justify-between">
                <b className="text-lg max-sm:text-base">Create your account</b>
                <XMarkIcon onClick={() => displayHandler(false)} strokeWidth={2} className="w-6 cursor-pointer"/>
            </div>
            <span style={{height : '1px'}} className="w-full bg-zinc-300"></span>
            <NameInput formik={formik} value={formik.values.name}/>
            <EmailInput formik={formik} value={formik.values.email}/>
            <PassInput formik={formik} value={formik.values.password}/>
            <SecPassInput formik={formik} value={formik.values.passwordConfirmation}/>
            <button disabled={!formik.isValid} type='submit' className={`text-white font-bold p-3 rounded-md mt-2 shadow-customeFour ${!formik.isValid ? 'bg-neutral-300' : 'bg-neutral-900'}`}>Create account</button>
            <button className='w-fit'>Have an account ?</button>
            <span style={{height : '1px'}} className="w-full bg-zinc-300"></span>
            <p>Other options : </p>
            <button className="flex p-2 rounded-md bg-zinc-100 justify-between items-center shadow-customeOne hover:bg-zinc-200">
                <p>Sign up with phone number</p>
                <PhoneIcon className="w-6"/>
            </button>
        </form>
    </>
  )
}

const NameInput = ({formik , value}) => {
    return (
        <>
            <label className="text-lg mt-2 max-sm:text-base" htmlFor="">Enter full name</label>
            <input onBlur={formik.handleBlur} value={value} onChange={formik.handleChange} className="p-2 shadow-customeOne rounded-md bg-zinc-100 outline-neutral-800" type="text" name='name' placeholder="ex : Arsalan ghoochani"/>
            {formik.errors.name && formik.touched.name && <p className='text-red-500'>{formik.errors.name}</p>}
        </>
    )
}

const EmailInput = ({formik , value}) => {
    return (
        <>
            <label className="text-lg mt-2 max-sm:text-base" htmlFor="">Enter your email</label>
            <input onBlur={formik.handleBlur} value={value} className="p-2 shadow-customeOne rounded-md bg-zinc-100 outline-neutral-800" type="email" name='email' onChange={formik.handleChange} placeholder="ex : email@gmail.com"/>
            {formik.errors.email && formik.touched.email && <p className='text-red-500'>{formik.errors.email}</p>}
        </>
    )
}

const PassInput = ({formik , value}) => {

    const [showPass , setShowPass] = useState(false)

    return (
        <>
            <label className="text-lg mt-2 max-sm:text-base" htmlFor="">Enter your password</label>
            <div className='w-full relative cursor-pointer'>
                <input onBlur={formik.handleBlur} value={value} className="w-full p-2 shadow-customeOne rounded-md bg-zinc-100 outline-neutral-800" name='password' onChange={formik.handleChange} type={`${showPass ? 'text' : 'password'}`} placeholder=""/>
                <span onClick={() => setShowPass(!showPass)} className='absolute right-2 top-2'>
                    {showPass ? <EyeIcon className='w-6'/> : <EyeSlashIcon className='w-6'/>}
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
            <label className="text-lg mt-2 max-sm:text-base" htmlFor="">Repeat your password</label>
            <div className='w-full relative cursor-pointer'>
                <input onBlur={formik.handleBlur} value={value} className="w-full p-2 shadow-customeOne rounded-md bg-zinc-100 outline-neutral-800" name='passwordConfirmation' onChange={formik.handleChange} type={`${showPass ? 'text' : 'password'}`} placeholder=""/>
                <span onClick={() => setShowPass(!showPass)} className='absolute right-2 top-2'>
                    {showPass ? <EyeIcon className='w-6'/> : <EyeSlashIcon className='w-6'/>}
                </span>
            </div>
            {formik.errors.passwordConfirmation && formik.touched.passwordConfirmation && <p className='text-red-500'>{formik.errors.passwordConfirmation}</p>}
        </>
    )
}