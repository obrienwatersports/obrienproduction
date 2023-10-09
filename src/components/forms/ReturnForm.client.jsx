import React, { Component } from "react";
import * as emailjs from "emailjs-com";
import { Button, Form, Label, Input } from "reactstrap";
import Swal from "sweetalert2";
// @ts-ignore
import ReCAPTCHA from "react-google-recaptcha";

class ReturnForm extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    product: "",
    order: "",
    radio: "",
    size: "",
    message: "",
    recaptchaRef: "",
  };

  // @ts-ignore
  handleSubmit(e) {
    e.preventDefault();

    const {
      name,
      email,
      phone,
      product,
      order,
      radio,
      size,
      message,
      recaptchaRef,
    } = this.state;

    let templateParams = {
      from_name: name,
      from_email: email,
      phone: phone,
      to_name: "O'Brien Watersports",
      product: product,
      order: order,
      radio: radio,
      size: size,
      message: message,
      recaptchaRef: recaptchaRef,
    };

    emailjs.send(
      "obrien_365",
      "obrien_return_form",
      templateParams,
      "user_vOc0ylPHeC2nCdyLQJAiW"
    );

    this.resetForm();
  }
  resetForm() {
    this.setState({
      name: "",
      email: "",
      phone: "",
      product: "",
      order: "",
      radio: "",
      size: "",
      message: "",
    });
    Swal.fire({
      title: "Email Successfully Sent to the O'Brien Team",
      icon: "success",
    });
  }
  // @ts-ignore
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };

  render() {
    return (
      <div id="warranty-form">
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <div className="flex-md">
            <div className="fifty padding">
              <Label className="text-muted">Full Name</Label>
              <Input
                type="text"
                name="name"
                value={this.state.name}
                className="text-primary"
                onChange={this.handleChange.bind(this, "name")}
                placeholder="Name"
              />
            </div>
            <div className="fifty padding">
              <Label className="text-muted">Email address</Label>
              <Input
                type="email"
                name="email"
                value={this.state.email}
                className="text-primary"
                onChange={this.handleChange.bind(this, "email")}
                placeholder="Enter email"
              />
            </div>
          </div>
          <div className="flex-md">
            <div className="fifty padding">
              <Label className="text-muted">Phone</Label>
              <Input
                type="tel"
                name="phone"
                value={this.state.phone}
                className="text-primary"
                onChange={this.handleChange.bind(this, "phone")}
                placeholder="Enter Phone #"
              />
            </div>
          </div>
          <div className="padding">
            <Label className="text-muted">Product</Label>
            <Input
              type="text"
              name="product"
              className="text-primary"
              value={this.state.product}
              onChange={this.handleChange.bind(this, "product")}
              placeholder="Product"
            />
          </div>
          <div className="padding">
            <Label className="text-muted">
              Order Number / Confirmation Number
            </Label>
            <Input
              type="text"
              name="order"
              className="text-primary"
              value={this.state.order}
              onChange={this.handleChange.bind(this, "order")}
              placeholder="Order # / Confirmation #"
            />
          </div>
          <div className="padding">
            <Label className="text-muted">Return Details</Label>
            <div>
              <Label>
                <input
                  type="radio"
                  value="refund"
                  checked={this.state.radio === "refund"}
                  onChange={this.handleChange.bind(this, "radio")}
                />
                Return for Refund
              </Label>
            </div>
            <div>
              <Label>
                <input
                  type="radio"
                  value="exchange"
                  checked={this.state.radio === "exchange"}
                  onChange={this.handleChange.bind(this, "radio")}
                />
                Return for Exchange
              </Label>
            </div>
          </div>
          <div className="padding">
            <Label className="text-muted">If Return, which size?</Label>
            <Input
              type="text"
              name="size"
              className="text-primary"
              value={this.state.size}
              onChange={this.handleChange.bind(this, "size")}
              placeholder="Which size?"
            />
          </div>
          <div className="padding">
            <Label className="text-muted">
              Any additional information / description of return
            </Label>
            <Input
              type="textarea"
              name="message"
              className="text-primary"
              value={this.state.message}
              onChange={this.handleChange.bind(this, "message")}
            />
          </div>
          <div className="padding">
            <ReCAPTCHA
              ref={this.state.recaptchaRef}
              sitekey="6LcClc0ZAAAAAKoN2AsxwRRd4GMtD_yUG5AwXEhl"
              onChange={this.handleChange.bind(this, "recaptchaRef")}
            />
          </div>
          <div className="padding">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}
export default ReturnForm;
