import React, { useState } from 'react';
import "./Contact.css";
import Navbar from './Navbar';
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const success = () => toast.success("Submitted Successfully");
    const error = (message) => toast.error(`Error: ${message}`);

    const handleChange = (e) => {
        setData((prevValue) => {
            return { ...prevValue, [e.target.name]: e.target.value }
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8000/contact", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    message: data.message
                })
            });
            if (response.ok) {
                success();
                setData({
                    name: "",
                    email: "",
                    phone: "",
                    message: ""
                })
            } else {
                const errorMessage = await response.text();
                error(errorMessage);
            }
        } catch (err) {
            console.error(err);
            error("Failed to submit form");
        }
    };

    return (
        <>
            <Navbar />
            <div className="contact-form-container">
                <h1>Contact Us</h1>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={data.name} onChange={handleChange} required />
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={data.email} onChange={handleChange} required />
                    <label htmlFor="phone">Phone:</label>
                    <input type="tel" id="phone" name="phone" value={data.phone} onChange={handleChange} required />
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" value={data.message} onChange={handleChange} required />
                    <button type="submit">Submit</button>
                </form>
                <Toaster />
            </div>
        </>
    );
};
