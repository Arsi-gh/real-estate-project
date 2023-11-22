import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { PhoneIcon, XMarkIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from 'yup'
import { useUser } from "./UserRoleProvider";

const initialValues = {
  email : "",
  password : "",
}

const validationSchema = Yup.object({
  email : Yup.string().required().email(),
  password : Yup.string().required()
})

export default function LoginForm({displayHandler}) {

  const setUser = useUser().setUser
  const handleLogin = async (email , password) => {
    const {data} = await axios.get(`http://localhost:5000/users?email=${email}&password=${password}`)
    if (data) {
      setUser(data[0])
      displayHandler(false)
    } else {
  
    }
  }

  const [showPass , setShowPass] = useState(false)

  const formik = useFormik({
    initialValues,
    onSubmit : (values) => {
      handleLogin(values.email , values.password)
    },
    validationSchema,
  })

  return (
    <>
        <div onClick={() => displayHandler(false)} className="z-10 fixed top-0 h-screen w-full bg-black opacity-60"></div>
        <form onSubmit={formik.handleSubmit} className="z-20 fixed left-[50%] top-[10%] text-neutral-800 transform translate-x-[-50%] bg-white p-4 rounded-lg flex flex-col gap-y-4 w-[28rem]">
            <div className="flex justify-between">
                <b className="text-lg">Login</b>
                <XMarkIcon onClick={() => displayHandler(false)} strokeWidth={2} className="w-[1.5rem] cursor-pointer"/>
            </div>
            <span className="w-full h-[1px] bg-zinc-300"></span>
            <label className="text-lg" htmlFor="">Enter your email</label>
            <input value={formik.values.email} onChange={formik.handleChange} name="email" className="p-2 shadow-customeOne rounded-md bg-zinc-100 outline-neutral-800" type="text" placeholder="ex : email@gmail.com"/>
            <label className="text-lg" htmlFor="">Enter your password</label>
            <div className="relative">
              <input value={formik.values.password} onChange={formik.handleChange} name="password" className="p-2 w-full shadow-customeOne rounded-md bg-zinc-100 outline-neutral-800" type={`${showPass ? "text" : "password"}`} placeholder=""/>
              <span onClick={() => setShowPass(!showPass)} className="absolute right-2 top-2 cursor-pointer">
                {showPass ? <EyeSlashIcon className="w-[1.7rem]"/> : <EyeIcon className="w-[1.7rem]"/>}
              </span>
            </div>
            <button type="submit" disabled={!formik.isValid} className="bg-neutral-900 text-white font-bold p-3 rounded-lg shadow-customeFour">Submit</button>
            <button className="w-fit">Don't have an account ?</button>
            <span className="w-full h-[1px] bg-zinc-300"></span>
            <p>Other options : </p>
            <button className="flex p-2 rounded-md bg-zinc-100 justify-between shadow-customeOne hover:bg-zinc-200">
                <p>Login with phone number</p>
                <PhoneIcon className="w-[1.5rem]"/>
            </button>
        </form>
    </>
  )
}
