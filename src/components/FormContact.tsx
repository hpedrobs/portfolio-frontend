import React, { useState } from 'react'
import '../assets/form-contact.css'
import Modal from './Modal'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

interface ContactProps {
    subject: string
}

const FormContact: React.FC<ContactProps> = ({ subject }) => {
    const apiUrl = import.meta.env.VITE_API_URL ?? 'https://api.hpedrobs.com'

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [titleModal, setTitleModal] = useState('')
    const [contentModal, setContentModal] = useState('')

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const [loading, setLoading] = useState(false)

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        setLoading(true)

        try {
            const response = await fetch(`${apiUrl}/messages/sendMessage`, {
                method: 'POST',
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    subject
                }),
                headers: {
                    'Content-Type': 'application/json',
                }
            })

            const result = await response.text()

            setTimeout(() => {
                setLoading(false)
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                })    
                setTitleModal('Mensagem Recebida!')
                setContentModal(result)
                setIsModalOpen(true)
            }, 2000) 
        } catch (error) {
            console.error('Erro:', error)
            setLoading(false) 
        }
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = event.target
        setFormData({ ...formData, [id]: value })
    }

    return (
        <>
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Ei, pronto pra trocar uma ideia? Ou será que você prefere me chamar pra um café (ou uma cerveja)? 😄</h2>
                <form id="form-contact" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Nome</label>
                        <input
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-green-300"
                            type="text" id="name"
                            placeholder="Digite seu nome"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">E-mail</label>
                        <input
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-green-300"
                            type="email" id="email"
                            placeholder="Digite seu e-mail"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Mensagem</label>
                        <textarea
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-green-300"
                            id="message"
                            placeholder="Digite sua mensagem"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className={`w-full ${loading ? 'bg-gray-400' : 'bg-green-500'} text-white font-bold py-2 px-4 rounded-md hover:${loading ? '' : 'bg-green-600'} focus:outline-none focus:bg-green-600`}
                        disabled={loading} 
                    >
                        {loading ? (
                            <AiOutlineLoading3Quarters className="animate-spin h-5 w-5 inline-block mr-2" />
                        ) : (
                            'Enviar'
                        )}
                    </button>
                </form>
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={titleModal}
            >
                <p className="text-gray-700">{contentModal}</p>
            </Modal>
        </>
    )
}

export default FormContact
