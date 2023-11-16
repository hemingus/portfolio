import ContactForm from '../components/ContactForm/ContactForm'
import './ContactPage.css'

const ContactPage = () => {
    return (
        <div className="ContactPage-container">
            <h1>Contact</h1>
            <h3>You can reach out to me through E-mail, LinkedIn or GitHub </h3>
            <a href="https://www.linkedin.com/in/heming-hanevik-395220129/" target="_blank">LinkedIn</a>
            <a href="https://github.com/hemingus" target="_blank">GitHub</a>
            <h3>Or send me a message </h3>
            <ContactForm />
        </div>
    )
}

export default ContactPage