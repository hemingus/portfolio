import React, { useState, ChangeEvent, FormEvent } from 'react';
import './ContactForm.css'

interface FormState {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Process form data (you can send it to an API, log it, etc.)
    console.log(formData);
    // You can add your logic to send the form data to a server here
    // For example: Send a POST request using fetch or axios
  };

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
            
            <button type="submit">Submit</button>
        </form>
    </div>
  );
};

export default ContactForm;