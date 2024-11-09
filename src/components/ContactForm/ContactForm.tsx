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

    const isFormValid = 
        formData.name.trim() !== "" 
        && formData.email.trim() !== "" 
        && formData.message.trim() !== ""

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prevState => ({
        ...prevState,
        [name]: value
        }))
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!isFormValid) return

        setHandlingSubmisson(true)

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
                    Your name:
                    <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    />
                </label>
                <label>
                    Your e-mail:
                    <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    />
                </label>
                <label>
                    Your message:
                </label>
                    <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    />
                <button 
                    type="submit" 
                    disabled={handlingSubmisson} 
                    style={{opacity: handlingSubmisson ? 0.5 : 1, cursor: handlingSubmisson ? "not-allowed" : "pointer"}}
                >
                    {handlingSubmisson ? "Sending..." : "Send"}
                </button>
            </form>
        </div>
    )
}

export default ContactForm;