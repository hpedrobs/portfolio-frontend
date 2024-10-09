import { FaTools } from 'react-icons/fa'
import '../assets/maintenance.css'

const Maintenance = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 dvh">
            <FaTools className="text-green-500 text-6xl mb-4 animate-pulse" />
            <h1 className="text-4xl text-center font-bold text-gray-800">O site está em manutenção!</h1>
            <p className="text-lg text-center text-gray-600 mt-2">Estamos trabalhando para trazer melhorias em breve.</p>
        </div>
    )
}

export default Maintenance
