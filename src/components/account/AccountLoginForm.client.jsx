import {useState} from 'react';
import {useNavigate, Link} from '@shopify/hydrogen/client';
import {getInputStyleClasses} from '../../lib/styleUtils';

export function AccountLoginForm({shopName}) {
  const navigate = useNavigate();

  const [hasSubmitError, setHasSubmitError] = useState(false);
  const [showEmailField, setShowEmailField] = useState(true);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(null);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(null);

  function onSubmit(event) {
    event.preventDefault();

    setEmailError(null);
    setHasSubmitError(false);
    setPasswordError(null);

    if (showEmailField) {
      checkEmail(event);
    } else {
      checkPassword(event);
    }
  }

  function checkEmail(event) {
    if (event.currentTarget.email.validity.valid) {
      setShowEmailField(false);
    } else {
      setEmailError('Please enter a valid email');
    }
  }

  async function checkPassword(event) {
    const validity = event.currentTarget.password.validity;
    if (validity.valid) {
      const response = await callLoginApi({
        email,
        password,
      });

      if (response.error) {
        setHasSubmitError(true);
        resetForm();
      } else {
        navigate('/account');
      }
    } else {
      setPasswordError(
        validity.valueMissing
          ? 'Please enter a password'
          : 'Passwords must be at least 6 characters',
      );
    }
  }

  function resetForm() {
    setShowEmailField(true);
    setEmail('');
    setEmailError(null);
    setPassword('');
    setPasswordError(null);
  }

  return (
    <div className="inside-xl">
      <header className="">
        <h1 className="">Sign in</h1>
        <form noValidate className="" onSubmit={onSubmit}>
          {hasSubmitError && (
            <div className="">
              <p className="emailError">
                Sorry we did not recognize either your email or password. Please
                try to sign in again or create a new account.
              </p>
            </div>
          )}
          {showEmailField && (
            <EmailField
              shopName={shopName}
              email={email}
              setEmail={setEmail}
              emailError={emailError}
            />
          )}
          {!showEmailField && (
            <ValidEmail email={email} resetForm={resetForm} />
          )}
          {!showEmailField && (
            <PasswordField
              password={password}
              setPassword={setPassword}
              passwordError={passwordError}
            />
          )}
        </form>
      </header>
    </div>
  );
}

export async function callLoginApi({email, password}) {
  try {
    const res = await fetch(`/account/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email, password}),
    });
    if (res.ok) {
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

function EmailField({email, setEmail, emailError, shopName}) {
  return (
    <>
      <div className="justify-center newAccountForm formControl">
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
          <button type="submit">Next</button>
        </div>
      </div>
      {!emailError ? (
        ''
      ) : (
        <p className={`text-xs emailError`}>{emailError} &nbsp;</p>
      )}
      <div className="createAccount">
        <p className="">
          New to {shopName}? &nbsp;
          <Link className="" to="/account/register">
            Create an account
          </Link>
        </p>
      </div>
    </>
  );
}

function ValidEmail({email, resetForm}) {
  return (
    <>
      <p>{email}</p>
      <div className="justify-center formControl">
        <div className="emailInput">
          <input
            className="searchLike rounded border py-2 px-3"
            type="text"
            autoComplete="username"
            value={email}
            readOnly
          ></input>
        </div>
        <div className="buttonHolder">
          <button
            className="inline-block align-baseline text-sm underline"
            type="button"
            onClick={resetForm}
          >
            Change email
          </button>
        </div>
      </div>
    </>
  );
}

function PasswordField({password, setPassword, passwordError}) {
  return (
    <>
      <div className="justify-center formControl">
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
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <div className="buttonHolder">
          <button className="" type="submit">
            Sign in
          </button>
        </div>
      </div>
      {!passwordError ? (
        ''
      ) : (
        <p className={`text-red-500 text-xs`}> {passwordError} &nbsp;</p>
      )}
      <div className="">
        <div className=""></div>
        <Link className="" to="/account/recover">
          Forgot password
        </Link>
      </div>
    </>
  );
}
