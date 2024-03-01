import './ErrorE.css'
import NavBar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"

function ErrorE(){
    return(
        <>
        <NavBar></NavBar>
        <div className="error-message">
            <h1>404, This page doesn&apos;t exist!</h1>
        </div>
        <Footer></Footer>
        </>
    )
}

export default ErrorE