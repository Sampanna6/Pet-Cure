import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style2.css';

const PaymentForm = () => {
  const [form, setForm] = useState({
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    cardholderName: '',
    billingAddress: '',
    zipCode: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value
    });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!/^\d{16}$/.test(form.cardNumber)) {
      newErrors.cardNumber = 'Please enter a valid 16-digit credit card number.';
    }
    if (!/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/.test(form.expirationDate)) {
      newErrors.expirationDate = 'Please enter a valid expiration date (MM/YY or MM/YYYY).';
    }
    if (!/^\d{3,4}$/.test(form.cvv)) {
      newErrors.cvv = 'Please enter a valid 3 or 4-digit CVV.';
    }
    if (!form.cardholderName) {
      newErrors.cardholderName = "Please enter the cardholder's name.";
    }
    if (!form.billingAddress) {
      newErrors.billingAddress = 'Please enter the billing address.';
    }
    if (!/^\d{5}$/.test(form.zipCode)) {
      newErrors.zipCode = 'Please enter a valid 5-digit ZIP code.';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log('Form submitted successfully', form);
      // Handle successful form submission (e.g., send data to backend)
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-primary text-white">
              Payment Form
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="cardNumber">Credit Card Number</label>
                  <input
                    type="text"
                    className={`form-control ${errors.cardNumber ? 'is-invalid' : ''}`}
                    id="cardNumber"
                    value={form.cardNumber}
                    onChange={handleChange}
                    required
                  />
                  <div className="invalid-feedback">{errors.cardNumber}</div>
                </div>
                <div className="form-group">
                  <label htmlFor="expirationDate">Expiration Date</label>
                  <input
                    type="text"
                    className={`form-control ${errors.expirationDate ? 'is-invalid' : ''}`}
                    id="expirationDate"
                    value={form.expirationDate}
                    onChange={handleChange}
                    required
                  />
                  <div className="invalid-feedback">{errors.expirationDate}</div>
                </div>
                <div className="form-group">
                  <label htmlFor="cvv">CVV</label>
                  <input
                    type="text"
                    className={`form-control ${errors.cvv ? 'is-invalid' : ''}`}
                    id="cvv"
                    value={form.cvv}
                    onChange={handleChange}
                    required
                  />
                  <div className="invalid-feedback">{errors.cvv}</div>
                </div>
                <div className="form-group">
                  <label htmlFor="cardholderName">Cardholder Name</label>
                  <input
                    type="text"
                    className={`form-control ${errors.cardholderName ? 'is-invalid' : ''}`}
                    id="cardholderName"
                    value={form.cardholderName}
                    onChange={handleChange}
                    required
                  />
                  <div className="invalid-feedback">{errors.cardholderName}</div>
                </div>
                <div className="form-group">
                  <label htmlFor="billingAddress">Billing Address</label>
                  <input
                    type="text"
                    className={`form-control ${errors.billingAddress ? 'is-invalid' : ''}`}
                    id="billingAddress"
                    value={form.billingAddress}
                    onChange={handleChange}
                    required
                  />
                  <div className="invalid-feedback">{errors.billingAddress}</div>
                </div>
                <div className="form-group">
                  <label htmlFor="zipCode">ZIP Code</label>
                  <input
                    type="text"
                    className={`form-control ${errors.zipCode ? 'is-invalid' : ''}`}
                    id="zipCode"
                    value={form.zipCode}
                    onChange={handleChange}
                    required
                  />
                  <div className="invalid-feedback">{errors.zipCode}</div>
                </div>
                <button type="submit" className="btn btn-primary">Submit Payment</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
