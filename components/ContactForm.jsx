import { EnvelopeOpenIcon } from "@heroicons/react/24/outline"
import { useFormik } from "formik"
import * as Yup from 'yup'
import { useUser } from "./UserRoleProvider"

const initialValues = {
    category : '',
    email : '',
    subject : '',
    desc : '',
}

const validationSchema = Yup.object({
    category : Yup.string().required(),
    email : Yup.string().required(),
    subject : Yup.string().required(),
    desc : Yup.string().required()
})

export default function ContactForm () {

    const user = useUser().user

    const formik = useFormik({
        initialValues,
        onSubmit : async (values , actions) => {
            const newReq = {...values , from : user?.name ? user.name : 'no account' , asnwer_text : null , role : user?.role ? user.role : 'no account' , created_At : new Date().toISOString()}
            const {data} = await fetch('http://localhost:5000/requests' , {
                method : "POST",
                headers : {
                    "Content-Type": "application/json",
                },
                body : JSON.stringify(newReq)
            })
            actions.resetForm()
        },
        validationSchema,
        validateOnMount : true,
    })

    return (
        <form onSubmit={formik.handleSubmit} className='flex flex-col my-4 gap-2 w-96 max-sm:w-full'>
            <h4 className='rounded-t-md flex gap-2 items-center text-white bg-neutral-800 p-2'>
                <EnvelopeOpenIcon className='w-8 p-1'/>
                <p>Send a request</p>
            </h4>
            <select value={formik.values.category} onChange={formik.handleChange} name="category" className='p-2 px-4 bg-zinc-50  shadow-customeOne form-select'>
                <option value="select">select categoty</option>
                <option value="err">Error in site</option>
                <option value="req">Have a request</option>
                <option value="other">other</option>
            </select>
            <input value={formik.values.email} onChange={formik.handleChange} name="email" className='p-2 outline-neutral-600 px-4 bg-zinc-50  shadow-customeOne' type="email" placeholder='Enter your email'/>
            <input value={formik.values.subject} onChange={formik.handleChange} name="subject" className='p-2 outline-neutral-600 px-4 bg-zinc-50  shadow-customeOne' type="text" placeholder='Write your subject'/>
            <textarea value={formik.values.desc} onChange={formik.handleChange} name="desc" className='h-40 p-2 outline-neutral-600 px-4 bg-zinc-50  shadow-customeOne' placeholder='Write description'></textarea>
            <button disabled={!formik.isValid} type="submit" className={`${!formik.isValid ? 'bg-neutral-300' : 'bg-neutral-800'} p-2 rounded-b-md text-white font-bold`}>submit</button>
        </form>
    )
}