import React, { useState } from 'react';
import './PetPaymentStyle.css';

const PetPaymentForm = () => {
    const [formData, setFormData] = useState({
        cardNumber: '',
        cardName: '',
        expiryDate: '',
        cvv: '',
        amount: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div className="outer-container">
            <div className="container">
                <div className="header-label">
                    <label>Online Payment</label>
                </div>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="label" htmlFor="cardNumber">Card Number</label>
                        <input
                            className="input"
                            type="text"
                            id="cardNumber"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor="cardName">Cardholder Name</label>
                        <input
                            className="input"
                            type="text"
                            id="cardName"
                            name="cardName"
                            value={formData.cardName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor="expiryDate">Expiry Date</label>
                        <input
                            className="input"
                            type="text"
                            id="expiryDate"
                            name="expiryDate"
                            placeholder="MM/YY"
                            value={formData.expiryDate}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor="cvv">CVV</label>
                        <input
                            className="input"
                            type="text"
                            id="cvv"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor="amount">Amount</label>
                        <input
                            className="input"
                            type="number"
                            id="amount"
                            name="amount"
                            value={formData.amount}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <button className="button" type="submit">Pay Now</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PetPaymentForm;
