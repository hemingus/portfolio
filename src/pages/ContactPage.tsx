import ContactForm from '../components/ContactForm/ContactForm'
import './ContactPage.css'

const ContactPage = () => {
    return (
        <div className="ContactPage-container">
            <h1>Contact</h1>
            <h3>You can reach out to me on E-mail or LinkedIn</h3>
            <a href="mailto:heming.hanevik@gmail.com">Send an Email</a>
            <a href="https://www.linkedin.com/in/heming-hanevik-395220129/" target="_blank">LinkedIn</a>
            <h3>Or write me a message here: </h3>
            <ContactForm />
        </div>
    )
}

export default ContactPage