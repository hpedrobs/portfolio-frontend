import '../assets/contact.css'
import FormContact from './FormContact'

function Contact() {
    return (
        <section className="" id="contact">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="flex flex-col items-center lg:items-end">
                    <div className="text-center w-auto">
                        <h2 className="title-contact text-4xl mb-5 mx-2">
                            Vamos discutir algo
                            <span> legal </span>
                            juntos
                        </h2>
                        <h3 className="text-2xl text-white mb-10">estou interessado em..</h3>
                    </div>

                    <div className="grid-btns">
                        <button className="btn-interests selected">Ecommerce</button>
                        <button className="btn-interests">CRM</button>
                        <button className="btn-interests">ERP</button>
                        <button className="btn-interests">RPA</button>
                        <button className="btn-interests">Sistema Web</button>
                        <button className="btn-interests">Web Scraping</button>
                        <button className="btn-interests">Portfólio</button>
                        <button className="btn-interests">Blog</button>
                        <button className="btn-interests">Landing Page</button>
                    </div>
                </div>

                <div className="flex justify-center lg:justify-start mx-3">
                    <FormContact />
                </div>
            </div>
        </section>
    )
}

export default Contact
