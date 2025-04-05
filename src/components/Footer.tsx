import '../assets/footer.css'
import { FiGithub } from 'react-icons/fi'
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa"

function Contact() {
    return (
        <footer className="py-8" id="footer">
            <div className="container mx-auto">
                <div className="flex justify-center gap-2 mb-5">
                    <a href="https://github.com/hpedrobs" target="_blank"><FiGithub className="text-white icon-footer"/></a>
                    <a href="https://www.linkedin.com/in/hpedrobs/" target="_blank"><FaLinkedinIn className="text-white icon-footer"/></a>
                    <a href="https://wa.me/556296111270?text=Ol%C3%A1%2C%20visitei%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20seus%20servi%C3%A7os." target="_blank"><FaWhatsapp className="text-white icon-footer"/></a>
                </div>

                <div className="text-center text-white">
                    <h4 className="h4 mr-2">Projetado e construído por:</h4>
                    <h4 className="h4"><b>hpedrobs</b> 2024 © Todos direitos reservados</h4>
                </div>
            </div>
        </footer>
    )
}

export default Contact
