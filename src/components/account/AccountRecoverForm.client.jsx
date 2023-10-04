import {useState} from 'react';

import {emailValidation} from '~/lib/utils';
import {getInputStyleClasses} from '../../lib/styleUtils';

export function AccountRecoverForm() {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(null);

  async function onSubmit(event) {
    event.preventDefault();

    setEmailError(null);
    setSubmitError(null);

    const newEmailError = emailValidation(event.currentTarget.email);

    if (newEmailError) {
      setEmailError(newEmailError);
      return;
    }

    await callAccountRecoverApi({
      email,
    });

    setEmail('');
    setSubmitSuccess(true);
  }

  return (
    <div className="">
      <div className="inside-xl">
        <header>
          {submitSuccess ? (
            <>
              <h1 className="text-4xl">Request Sent</h1>
              <p className="mt-4">
                If that email address is in our system, you will receive an
                email with instructions about how to reset your password in a
                few minutes.
              </p>
            </>
          ) : (
            <>
              <h1 className="text-4xl">Forgot Password</h1>
              <p className="mt-4">
                Enter the email address associated with your account to receive
                a link to reset your password.
              </p>
            </>
          )}
          <form noValidate className="pt-6 pb-8 mt-4 mb-4" onSubmit={onSubmit}>
            {submitError && (
              <div className="flex items-center justify-center mb-6 bg-zinc-500">
                <p className="m-4 text-s text-contrast">{submitError}</p>
              </div>
            )}
            <div className="justify-center formControl">
              <div className="emailInput">
                <input
                  className={`searchLike ${getInputStyleClasses(emailError)}`}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Email address"
                  aria-label="Email address"
                  // eslint-disable-next-line jsx-a11y/no-autofocus
                  autoFocus
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>
              <div className="buttonHolder">
                <button className="" type="submit">
                  Request Reset Link
                </button>
              </div>
            </div>
            {!emailError ? (
              ''
            ) : (
              <p className={`text-red-500 text-xs`}>{emailError} &nbsp;</p>
            )}
          </form>
        </header>
      </div>
    </div>
  );
}

export async function callAccountRecoverApi({
  email,
  password,
  firstName,
  lastName,
}) {
  try {
    const res = await fetch(`/account/recover`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email, password, firstName, lastName}),
    });
    if (res.status === 200) {
      return {};
    } else {
      return res.json();
    }
  } catch (error) {
    return {
      error: error.toString(),
    };
  }
}
