import {useState} from 'react';

import {CustomInput} from './CustomInput';

import './Klaviyo.scss';

import generalConfig from '../../../general.config';
import {ValidateEmail} from './ValidateEmail';

export function StockNotification({selectedVariant}) {
  const [email, setEmail] = useState('');

  const [formSending, setFormSending] = useState(false);
  const [isFormSent, setIsFormSent] = useState(false);
  const [formCheck, setFormCheck] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmitForm = async () => {
    setFormCheck(true);
    if (!ValidateEmail(email)) {
      setErrorMessage('Please enter a valid email.');
      return;
    }
    if (generalConfig.klaviyoPublicKey === '') {
      setErrorMessage(
        'Invalid Klaviyo public key. Please check the general.config.js file!',
      );
      return;
    }

    setFormCheck(false);
    setFormSending(true);

    const variantID = selectedVariant?.id.split('/').pop();

    const url = `${generalConfig.klaviyoEndpoint}/api/v1/catalog/subscribe`;

    const options = {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        revision: '2023-06-15',
        'content-type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        a: generalConfig.klaviyoPublicKey,
        email,
        variant: variantID,
        platform: 'shopify',
      }),
    };

    const response = await fetch(url, options).then(() => {
      setEmail('');
      setErrorMessage('');
      setIsFormSent(true);
    });

    if (response && response.status !== 'OK') {
      setErrorMessage(
        response?.errors?.base
          ? response?.errors?.base[0]
          : 'Invalid email input value.',
      );
      setEmail('');
    } else {
      setErrorMessage('');
    }

    setFormSending(false);
  };

  return (
    <div className="klaviyoBackInStock">
      <p>
        <strong>Sorry, this product is out of stock</strong>
      </p>
      <p className="">
        Enter your email to receive an alert when this product is available
      </p>
      <div className="">
        <CustomInput
          label="Insert your email"
          isRequire={true}
          showValidMessage={false}
          value={email}
          check={formCheck}
          isFormSent={isFormSent}
          setValue={setEmail}
          setFormCheck={setFormCheck}
          validate={ValidateEmail}
          className=""
        />
        <div className="buttonHolder">
          <div
            className={` ${formSending ? 'pointer-events-none' : ''}`}
            onClick={handleSubmitForm}
            aria-hidden="true"
          >
            {formSending ? 'Sending...' : 'Subscribe'}
          </div>
        </div>
      </div>
      {!isFormSent && errorMessage.length > 0 && (
        <p className="mt-2 text-sm text-red-500">{errorMessage}</p>
      )}
      {isFormSent && (
        <>
          {errorMessage.length > 0 ? (
            <p className="mt-2 text-sm text-red-500">{errorMessage}</p>
          ) : (
            <p className="mt-2 text-sm text-green-600">
              You will receive alerts when the product is restocked.
            </p>
          )}
        </>
      )}
    </div>
  );
}
