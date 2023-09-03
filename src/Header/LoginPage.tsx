// import React from 'react'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './LoginPage.css'



function LoginPage() {

    const [password, setPassword] = useState("")
    const [visible, setVisible] = useState(false)

    return (
        <div className="container form-group">
            <div className='row col-md-6 '>
                <h2 className='mb-3'>Login Form</h2>
                <form className='px-3'>
                    <label htmlFor='email' className='form-label'>Email Address</label>
                    <div className='form-input'>
                        <span><i className='bi bi-envelope-at'></i></span>
                        <input type="email" className='form-control form-control-lg bg-light ' required placeholder='Email' />
                    </div>
                    <div className='invalid-feedback'>
                        Please Enter you email
                    </div>
                    <label htmlFor='password' className='form-label'>Password</label>
                    <div className='form-input'>
                        <span><i className='bi bi-lock'></i></span>
                        <input
                        value={password}
                        type={visible ? 'text' : 'password'}
                        id='password'
                        onChange={(e) => setPassword(e.target.value)}
                        className='form-control'
                        required
                        placeholder='Password'
                    />
                    </div>
                        
                    <div className='icons' onClick={() => setVisible(!visible)}>
                        {visible ? <i className="bi bi-eye"></i> : <i className="bi bi-eye-slash-fill"></i> }
                    </div>

                    <div className='invalid-feedback'>
                        Please Enter you password
                    </div>
                    <div className='row mb-3'>
                        <div className='col-auto d-flex align-items-center'>
                            <div className='form-check custom-checkbox'>
                                <input type="checkbox" className='form-check-input'/>
                                <label className='form-check-label'>Remember me</label>
                            </div>
                        </div>
                    </div>
                   
                    <div className="forgot">
                        <a href='#'>Forgot Password</a>
                    </div>

                    <div className='mb-3'>
                        <button type='submit' className='btn btn-block'>SIGN IN</button>
                    </div>
                </form>
            </div>   
        </div> 
    )
}

export default LoginPage