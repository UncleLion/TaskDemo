import{ useEffect } from 'react';

function PasswordReset() {
  useEffect(() => {
    function handleSubmit(e: Event) {
      e.preventDefault();
      const resetForm = document.querySelector('.reset-form') as HTMLElement;
      const resetConfirmation = document.querySelector('.reset-confirmation') as HTMLElement;
      resetForm.classList.remove('d-block');
      resetForm.classList.add('d-none');
      resetConfirmation.classList.add('d-block');
    }

    const resetPasswordForm = document.querySelector('.reset-password-form') as HTMLFormElement;
    if (resetPasswordForm) {
      resetPasswordForm.addEventListener('submit', handleSubmit);
    }
  }, []);

  return null; // React компонент повинен повертати щось, навіть якщо це `null`
}

function ForgotPage() {
  useEffect(() => {
    PasswordReset();
  }, []);

    return (
        <div className="container infinity-container">
            <div className="row">
                <div className="col-md-1 infinity-left-space"></div>

                <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12 text-center infinity-form">
                    <div className="text-center mb-3 mt-5">
					    {/* <img src="logo.png" width="150px"> */}
                    </div>
                    <div className="reset-form d-block">
				    <form className="reset-password-form px-3">
				    	<h4>Reset Your password</h4>
				        <p className="mb-3 color: #777">
				            Please enter your email address and we will send you a password reset link.
				        </p>
				        <div className="form-input">
							<span><i className="fa fa-envelope"></i></span>
							<input type="email" name="" placeholder="Email Address" required/>
						</div>
				        <div className="mb-3"> 
							<button type="submit" className="btn">Send Reset Link</button>
						</div>
				    </form>
                </div>
                <div className="reset-confirmation d-none px-3">
					<div className="mb-4">
						<h4 className="mb-3">Link was sent</h4>
					    {/* <h6 style="color: #777">Please, check your inbox for a password reset link.</h6> */}
					</div>
					<div className="mb-3">
                        <a href="LoginPage.tsx">
                            <button type="submit" className="btn">Login Now</button>
                        </a>
                    </div>
				</div>
                </div>
                <div className="col-md-1 infinity-right-space"></div>
            </div>
        </div>
    )
 }


export default ForgotPage;
