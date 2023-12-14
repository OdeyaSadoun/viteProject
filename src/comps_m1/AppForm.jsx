import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

const AppForm = () => {
    const { register, handleSubmit, formState: { errors }, getValues } = useForm();

    const [pass, setPass] = useState("");

    const onSub = (dataBody) => {
        delete dataBody.email2;
        console.log(dataBody);
    }

    const checkPass = (pass) => {

        if (pass.length < 2) {
            return <p style={{ color: "red" }}>low password</p>
        }
        else if (pass.length < 6) {
            return <p style={{ color: "gold" }}>medium password</p>
        }
        else if(pass.length >= 6){
            return <p style={{ color: "green" }}>strong password</p>
        }
    }

    const nameRef = register("name", { required: true, minLength: 2 });
    const emailRef = register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i });
    const email2Ref = register("email2", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i });
    const passwordRef = register("password", { required: true});


    return (
        <div className='container mx-auto col-md-6'>
            <h2>Sign in</h2>
            <form onSubmit={handleSubmit(onSub)} className='form-control'>
                <label className='my-3'>Name:</label>
                <input {...nameRef} type="text" className='form-control' />
                {errors.name && <p style={{ color: "red" }}>* Enter valid name, min 2 chars</p>}

                <label className='my-3'>Email:</label>
                <input {...emailRef} type="email" className='form-control' />
                {errors.email && <p style={{ color: "red" }}>* Enter valid email</p>}

                <label className='my-3'>Email again:</label>
                <input {...email2Ref} type="email" className='form-control' />
                {errors.email2 && <p style={{ color: "red" }}>* Emails not match</p>}

                <label className='my-3'>Password:</label>
                <input onInput={() => {
                    setPass(getValues("password"))
                }} {...passwordRef} type="password" className='form-control' />
                {checkPass(pass)}
                {errors.password && <p style={{ color: "red" }}>* Enter password!</p>}

                <button className='btn btn-info my-3'>Send</button>

            </form>
        </div>
    )
}

export default AppForm