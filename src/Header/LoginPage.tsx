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
            <form className='mx-auto'>

                    <h2 className='mb-3'>Login Form</h2>
                
                    <div className='form-input mb-3'>
                        <span><i className='bi bi-envelope-at'></i></span>
                        <input type="email" className='form-control bg-light' required placeholder='Email' />
                    </div>

                    <div className='form-input'>
                        <span><i className='bi bi-lock'></i></span>
                        <input
                        value={password}
                        type={visible ? 'text' : 'password'}
                        className='form-control bg-light'
                        id='password'
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        />
                        <div className='icons' onClick={() => setVisible(!visible)}>
                        {visible ? <span><i className="bi bi-eye"></i></span> : <span><i className="bi bi-eye-slash-fill"></i></span>}
                    </div>
                    <div className="forgot">
                        <a href='#'>Forgot Password</a>
                    </div>
                    </div>
                   
                    <button type='submit' className='btn btn-block'>SIGN IN</button>
             </form>  
        </div> 
    )
}

export default LoginPage