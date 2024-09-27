import '../assets/form-contact.css'

function Contact() {
    return (
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Ei, pronto pra bater um papo? Ou será que você prefere me chamar pra um café (ou fumar um baseado)? 😄</h2>
            <form>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Nome</label>
                    <input className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-green-300"
                        type="text" id="name"
                        placeholder="Digite seu nome"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">E-mail</label>
                    <input className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-green-300"
                        type="email" id="email"
                        placeholder="Digite seu e-mail"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="msg">Mensagem</label>
                    <textarea className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-green-300" id="msg"
                        placeholder="Digite sua mensagem"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
                >
                    Enviar
                </button>
            </form>
        </div>
    )
}

export default Contact
