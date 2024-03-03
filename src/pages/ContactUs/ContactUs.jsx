import './ContactUs.css'
import NavBar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import ContactUsBody from '../../components/ContactUsBody/ContactUsBody'

function ContactUs(){
    return(
        <>
        <NavBar></NavBar>
        <ContactUsBody/>
        <Footer></Footer>
        </>
    )
}

export default ContactUs