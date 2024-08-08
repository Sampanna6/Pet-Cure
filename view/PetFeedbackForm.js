import React, { useState } from 'react';
import './PetFeedbackStyle.css';

const PetFeedbackForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        rating: '',
        comments: ''
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
                    <label>Submit Your Feedback</label>
                </div>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="label" htmlFor="name">Name</label>
                        <input
                            className="input"
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor="email">Email</label>
                        <input
                            className="input"
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor="rating">Rating</label>
                        <select
                            className="select"
                            id="rating"
                            name="rating"
                            value={formData.rating}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>Choose...</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor="comments">Comments</label>
                        <textarea
                            className="textarea"
                            id="comments"
                            name="comments"
                            value={formData.comments}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <button className="button" type="submit">Submit Feedback</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PetFeedbackForm;
