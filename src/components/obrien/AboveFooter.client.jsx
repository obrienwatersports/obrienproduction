/*!
 * Copyright (c) Microsoft Corporation.
 * All rights reserved. See LICENSE in the project root for license information.
 */

import {Component} from 'react';
// @ts-ignore
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import {Image} from '@shopify/hydrogen';

// a basic form
const CustomForm = ({status, message, onValidated}) => {
  let email, fname, lname;
  const submit = () =>
    email &&
    fname &&
    lname &&
    email.value.indexOf('@') > -1 &&
    onValidated({
      EMAIL: email.value,
      FNAME: fname.value,
      LNAME: lname.value,
    });

  return (
    <div>
      {status === 'sending' && <div style={{color: 'blue'}}>sending...</div>}
      {status === 'error' && (
        <div
          style={{color: 'red'}}
          dangerouslySetInnerHTML={{__html: message}}
        />
      )}
      {status === 'success' && (
        <div
          style={{color: 'green'}}
          dangerouslySetInnerHTML={{__html: message}}
        />
      )}
      <p>
        <label htmlFor="fname">First name</label>
        <input
          ref={(node) => (fname = node)}
          type="text"
          placeholder="First Name"
          id="fname"
        />
      </p>

      <p>
        <label htmlFor="lname">Last Name</label>
        <input
          ref={(node) => (lname = node)}
          type="text"
          placeholder="Last Name"
          id="lname"
        />
      </p>

      <p>
        <label htmlFor="email">Email</label>
        <input
          ref={(node) => (email = node)}
          type="email"
          placeholder="Your Email"
          id="email"
        />
      </p>

      <button className="btn" onClick={submit}>
        Submit
      </button>
    </div>
  );
};

class AboveFooter extends Component {
  render() {
    const url =
      '//obrien.us6.list-manage.com/subscribe/post?u=e8bd162f7a7b283432da0ea29&amp;id=639256cd28';
    return (
      <div className="above-footer">
        <div className="top-above">
          <div className="inside-xl">
            <div className="white-back">
              <div className="ob-title text-center">
                <h2>
                  <span>Stay Connected with O&apos;Brien</span>
                </h2>
                <p>
                  We&apos;ll keep you up to date with our latest products,
                  events and more!
                </p>
              </div>

              <div className="flex-md justify">
                <div className="forty-five form">
                  <MailchimpSubscribe
                    url={url}
                    render={({subscribe, status, message}) => (
                      <CustomForm
                        status={status}
                        message={message}
                        onValidated={(formData) => subscribe(formData)}
                      />
                    )}
                  />
                </div>
                <div className="forty-five flex-vertical">
                  <div className="social always-flex justify-center gap5">
                    <a href="https://www.facebook.com/OBrienWakeboards">
                      <Image
                        src="/facebook.svg"
                        alt="O'Brien Facebook"
                        width={44}
                        height={44}
                      />
                    </a>
                    <a href="https://www.instagram.com/obrienwatersports/">
                      <Image
                        src="/instagram.svg"
                        alt="O'Brien Instagram"
                        width={44}
                        height={44}
                      />
                    </a>
                    <a
                      className="flex-vertical"
                      href="https://www.youtube.com/user/obrienh2osports"
                    >
                      <Image
                        src="/youtube.svg"
                        alt="O'Brien Facebook"
                        width={44}
                        height={44}
                      />
                    </a>
                    <a href="https://vimeo.com/obrienwatersports">
                      <Image
                        src="/vimeo.svg"
                        alt="O'Brien Facebook"
                        width={44}
                        height={44}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-above" />
      </div>
    );
  }
}

export default AboveFooter;
