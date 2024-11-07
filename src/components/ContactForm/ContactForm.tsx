import React, { useState, ChangeEvent, FormEvent } from 'react'
import './ContactForm.css'
import emailjs from '@emailjs/browser'

interface FormState {
    name: string;
    email: string;
    message: string;
}

const ContactForm: React.FC = () => {
    
    const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    const [formData, setFormData] = useState<FormState>({
        name: '',
        email: '',
        message: ''
    })

    const [handlingSubmisson, setHandlingSubmisson] = useState(false)

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prevState => ({
        ...prevState,
        [name]: value
        }))
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        setHandlingSubmisson(true)
        e.preventDefault()
        emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, e.currentTarget, EMAILJS_PUBLIC_KEY)
        .then((result) => {
            console.log(result.text)
            alert("Email sent successfully!")
            setFormData({name: "", email: "", message: ""})
            setHandlingSubmisson(false)
        }, (error) => {
            console.log("Error: Sending failed", error.text)
            alert("Error: Sending failed.")
            setHandlingSubmisson(false)
        })
        console.log(formData)
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    />
                </label>
                <label>
                    Email:
                    <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    />
                </label>
                <label>
                    Message:
                </label>
                    <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    />
                
                {
                handlingSubmisson ? 
                <button style={{opacity: 0.2, cursor: "none"}}>Submit</button> :
                <button type="submit">Submit</button>
                }
            </form>
        </div>
    )
}

export default ContactForm;