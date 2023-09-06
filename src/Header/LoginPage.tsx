import React from 'react';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './LoginPage.css';

function LoginPage() {
    const { control, handleSubmit, formState: { errors } } = useForm();
    const [visible, setVisible] = useState(false);

    const onSubmit = (data: Record<string, any>) => {
        console.log(data); // Виведе дані форми після успішного відправлення
    };

    return (
        <div className="container form-group">
            <form className='mx-auto' onSubmit={handleSubmit(onSubmit)}>
                <h2 className='mb-3'>Login Form</h2>
                <div className='form-input mb-3'>
                    <span><i className='bi bi-envelope-at'></i></span>
                    <Controller
                        name="email"
                        control={control}
                        rules={{ required: true, pattern: /^\S+@\S+$/i }} // Валідація для email
                        defaultValue=""
                        render={({ field }) => (
                            <input
                                {...field}
                                type="email"
                                className={`form-control bg-light ${errors.email ? 'is-invalid' : ''}`}
                                placeholder='Email'
                            />
                        )}
                    />
                    {errors.email && <div className="invalid-feedback">Введіть дійсну адресу електронної пошти</div>}
                </div>

                <div className='form-input'>
                    <span><i className='bi bi-lock'></i></span>
                    <Controller
                        name="password"
                        control={control}
                        rules={{ required: true, minLength: 6 }} // Валідація для пароля
                        defaultValue=""
                        render={({ field }) => (
                            <input
                                {...field}
                                type={visible ? 'text' : 'password'}
                                className={`form-control bg-light ${errors.password ? 'is-invalid' : ''}`}
                                placeholder='Password'
                            />
                        )}
                    />
                    {errors.password && <div className="invalid-feedback">Пароль має містити принаймні 6 символів</div>}
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

export default LoginPage;
