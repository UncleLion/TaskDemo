import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function PasswordReset({ resetPasswordForm }: { resetPasswordForm: HTMLFormElement }) {
  const [resetFormVisible, setResetFormVisible] = useState(true);
  const [resetConfirmationVisible, setResetConfirmationVisible] = useState(false);

  useEffect(() => {
    function handleSubmit(e: Event) {
      e.preventDefault();
      setResetFormVisible(false);
      setResetConfirmationVisible(true);
    }

    if (resetPasswordForm) {
      resetPasswordForm.addEventListener('submit', handleSubmit);
    }
  }, [resetPasswordForm]);

  return (
    <div>
      {resetFormVisible && (
        <div className=" container form-group ">
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
      )}
      {resetConfirmationVisible && (
        <div className="reset-confirmation d-block">
          <div className="mb-4">
            <h4 className="mb-3">Link was sent</h4>
          </div>
          {/* <div className="forgot">
            <Link to="/forgot">Forgot Password</Link>
          </div> */}
        </div>
      )}
    </div>
  );
}

function ForgotPage() {
  return (
    <div className="container infinity-container">
      <div className="row">
        <div className="col-md-1 infinity-left-space"></div>

        <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12 text-center infinity-form">
          <PasswordReset resetPasswordForm={document.querySelector('.reset-password-form') as HTMLFormElement} />
          {/* Решта вашого коду... */}
          <button type="submit" className="btn">Login Now</button>
        </div>

        <div className="col-md-1 infinity-right-space"></div>
      </div>
    </div>
  );
}

export default ForgotPage;
