import React, { useState } from 'react';
import './PetStyle.css';

const PetAppointmentBooking = () => {
    const [formData, setFormData] = useState({
        petName: '',
        petAge: '',
        petBreed: '',
        veterinarian: '',
        appointmentDate: '',
        appointmentTime: '',
        ownerName: '',
        ownerContact: '',
        ownerAddress: '',
        cityRegion: ''
    });

    const [doctors, setDoctors] = useState([]);

    const doctorOptions = {
        Kothrud: [
            'Dr. Ajay Deshmukh', 'Dr. Ravi Patel', 'Dr. Anil Kapoor'
        ],
        Shivajinagar: [
            'Dr. Sanjay Rao', 'Dr. Neeta Sharma', 'Dr. Pradeep Mehta'
        ],
        Deccan: [
            'Dr. Rajesh Joshi', 'Dr. Aarti Gupta', 'Dr. Vikram Agarwal'
        ],
        Hadapsar: [
            'Dr. Amit Singh', 'Dr. Pooja Kapoor', 'Dr. Subodh Rao'
        ],
        Akurdi: [
            'Dr. Rina Sharma', 'Dr. Nitin Patel', 'Dr. Manish Joshi'
        ],
        Pimpri_Chinchwad: [
            'Dr. Sunil Deshmukh', 'Dr. Ankit Mehta', 'Dr. Priya Agarwal'
        ],
        Swargate: [
            'Dr. Harsh Gupta', 'Dr. Sandeep Singh', 'Dr. Alok Kapoor'
        ],
        Sadashivpeth: [
            'Dr. Sushant Patel', 'Dr. Aishwarya Deshmukh', 'Dr. Mohit Rao'
        ]
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (name === 'cityRegion') {
            setDoctors(doctorOptions[value] || []);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div className="outer-container">
            <div className="container">
                <div className="header-label">
                    <label>Book an Appointment</label>
                </div>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="label" htmlFor="petName">Pet Name</label>
                        <input
                            className="input"
                            type="text"
                            id="petName"
                            name="petName"
                            value={formData.petName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor="petAge">Pet Age</label>
                        <input
                            className="input"
                            type="number"
                            id="petAge"
                            name="petAge"
                            value={formData.petAge}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor="petBreed">Pet Breed</label>
                        <input
                            className="input"
                            type="text"
                            id="petBreed"
                            name="petBreed"
                            value={formData.petBreed}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor="veterinarian">Veterinarian</label>
                        <select
                            className="select"
                            id="veterinarian"
                            name="veterinarian"
                            value={formData.veterinarian}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>Choose...</option>
                            {doctors.map((doctor, index) => (
                                <option key={index} value={doctor}>{doctor}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor="cityRegion">City Region</label>
                        <select
                            className="select"
                            id="cityRegion"
                            name="cityRegion"
                            value={formData.cityRegion}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>Choose...</option>
                            <option value="Kothrud">Kothrud</option>
                            <option value="Shivajinagar">Shivajinagar</option>
                            <option value="Deccan">Deccan</option>
                            <option value="Hadapsar">Hadapsar</option>
                            <option value="Akurdi">Akurdi</option>
                            <option value="Pimpri_Chinchwad">Pimpri Chinchwad</option>
                            <option value="Swargate">Swargate</option>
                            <option value="Sadashivpeth">Sadashivpeth</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor="appointmentDate">Appointment Date</label>
                        <input
                            className="input"
                            type="date"
                            id="appointmentDate"
                            name="appointmentDate"
                            value={formData.appointmentDate}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor="appointmentTime">Appointment Time</label>
                        <input
                            className="input"
                            type="time"
                            id="appointmentTime"
                            name="appointmentTime"
                            value={formData.appointmentTime}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor="ownerName">Owner Name</label>
                        <input
                            className="input"
                            type="text"
                            id="ownerName"
                            name="ownerName"
                            value={formData.ownerName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor="ownerContact">Owner Contact</label>
                        <input
                            className="input"
                            type="tel"
                            id="ownerContact"
                            name="ownerContact"
                            value={formData.ownerContact}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor="ownerAddress">Owner Address</label>
                        <input
                            className="input"
                            type="text"
                            id="ownerAddress"
                            name="ownerAddress"
                            value={formData.ownerAddress}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <button className="button" type="submit">Book Appointment</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PetAppointmentBooking;
