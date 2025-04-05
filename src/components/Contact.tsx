import '../assets/contact.css'
import FormContact from './FormContact'
import { useState } from 'react'

function Contact() {
    const [selectedButton, setSelectedButton] = useState('Ecommerce')

    const buttons = [
        'Ecommerce',
        'CRM',
        'ERP',
        'RPA',
        'Sistema Web',
        'Web Scraping',
        'Portfólio',
        'Blog',
        'Landing Page',
        'Outros'
    ]
    
    const handleButtonClick = (button: string) => {
        setSelectedButton(button) // Atualiza o estado com o botão clicado
    }

    return (
        <section className="bg-[url('/background-image.jpg')] bg-cover bg-center" id="contact">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="flex flex-col items-center lg:items-end">
                    <div className="text-center w-auto">
                        <h2 className="title-contact text-4xl mb-5 mx-2">
                            Vamos discutir algo
                            <b> legal </b>
                            juntos
                        </h2>
                        <h3 className="text-2xl text-white mb-10">estou interessado em..</h3>
                    </div>

                    <div className="grid-btns">
                        {buttons.map((button) => (
                            <button
                                key={button}
                                className={`btn-interests ${selectedButton === button ? 'selected' : ''}`}
                                onClick={() => handleButtonClick(button)}
                            >
                                {button}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center lg:justify-start mx-3">
                    <FormContact subject={selectedButton} />
                </div>
            </div>
        </section>
    )
}

export default Contact
