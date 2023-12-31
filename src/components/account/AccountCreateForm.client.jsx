import {useState} from 'react';
import {useNavigate, Link} from '@shopify/hydrogen/client';

import {emailValidation, passwordValidation} from '~/lib/utils';

import {callLoginApi} from './AccountLoginForm.client';
import {getInputStyleClasses} from '../../lib/styleUtils';

export function AccountCreateForm() {
  const navigate = useNavigate();

  const [submitError, setSubmitError] = useState(null);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(null);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(null);

  async function onSubmit(event) {
    event.preventDefault();

    setEmailError(null);
    setPasswordError(null);
    setSubmitError(null);

    const newEmailError = emailValidation(event.currentTarget.email);
    if (newEmailError) {
      setEmailError(newEmailError);
    }

    const newPasswordError = passwordValidation(event.currentTarget.password);
    if (newPasswordError) {
      setPasswordError(newPasswordError);
    }

    if (newEmailError || newPasswordError) {
      return;
    }

    const accountCreateResponse = await callAccountCreateApi({
      email,
      password,
    });

    if (accountCreateResponse.error) {
      setSubmitError(accountCreateResponse.error);
      return;
    }

    // this can be avoided if customerCreate mutation returns customerAccessToken
    await callLoginApi({
      email,
      password,
    });

    navigate('/account');
  }

  return (
    <div className="inside-xl">
      <header>
        <h1 className="text-4xl">Create an Account</h1>
        <div className="justify-center newAccountForm formControl">
          <form noValidate className="pt-6 pb-8 mt-4 mb-4" onSubmit={onSubmit}>
            {submitError && (
              <div className="flex items-center justify-center mb-6 bg-zinc-500">
                <p className="m-4 text-s text-contrast">{submitError}</p>
              </div>
            )}
            <div className="emailInput marginBottom">
              <input
                className={`searchLike rounded ${getInputStyleClasses(
                  emailError,
                )}`}
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
              {!emailError ? (
                ''
              ) : (
                <p className={`text-red-500 text-xs`}>{emailError} &nbsp;</p>
              )}
            </div>
            <div className="emailInput">
              <input
                className={`searchLike rounded ${getInputStyleClasses(
                  passwordError,
                )}`}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="Password"
                aria-label="Password"
                value={password}
                minLength={8}
                required
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              {!passwordError ? (
                ''
              ) : (
                <p className={`text-red-500 text-xs`}>{passwordError} &nbsp;</p>
              )}
            </div>
            <div className="buttonHolder">
              <button className="" type="submit">
                Create Account
              </button>
            </div>
            <div className="flex items-center mt-4">
              <p className="align-baseline text-sm">
                Already have an account? &nbsp;
                <Link className="inline underline" to="/account">
                  Sign in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </header>
    </div>
  );
}

export async function callAccountCreateApi({
  email,
  password,
  firstName,
  lastName,
}) {
  try {
    const res = await fetch(`/account/register`, {
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
