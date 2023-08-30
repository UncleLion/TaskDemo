// import React from 'react'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './LoginPage.css'



function LoginPage() {
    const [password, setPassword] = useState("")
    const [visible, setVisible] = useState(false)

    return (
        <div className="wraper d-flex align-items-center justify-content-center w-100">
            <div className='login rounded'>
                <h2 className='mb-3'>Login Form</h2>
                <form className='needs-validation'>
                    <div className='form-group was-validated mb-2'>
                        <div>
                        </div>
                        <label htmlFor='email' className='form-label bi bi-envelope-at'>Email Address</label>
                        <input type="email" className='form-control  ' required placeholder='Email' />
                        <div className='invalid-feedback'>
                            Please Enter you email
                        </div>
                    </div>
                    <div className='form-group was-validated mb-2'>
                        <label htmlFor='password' className='form-label' >Password</label>
                        <input
                            value={password}
                            type={visible ? 'text' : 'password'}
                            id='password'
                            onChange={(e) => setPassword(e.target.value)}
                            className='form-control'
                            
                            required
                            placeholder='password'
                        /><i className='bi bi-lock'></i>
                        <div className='p-2' onClick={() => setVisible(!visible)}>
                            {visible ? <i className="bi bi-eye"></i> : <i className="bi bi-eye-slash-fill"></i> }
                        </div>
                        
                        {/* <div className='invalid-feedback'> */}
                            Please Enter you password
                        {/* </div> */}
                    </div>
                    <div className='form-group form-check mb-2'>
                        <input type="checkbox" className='form-check-input'/>
                        <label htmlFor='check' className='form-check-label'>Remember me</label>
                    </div>
                    <button type='submit' className='btn btn-success w-100 mt-2'>SIGN IN</button>
                </form>
            </div>   
        </div> 
    )
}

export default LoginPage