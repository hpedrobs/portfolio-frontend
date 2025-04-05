import '../assets/project.css'
import { FaTools } from "react-icons/fa"

function Project() {
    return (
        <section className="" id="projects">
            <h2 className="h2 mb-10">Projetos</h2>
            <div className="flex items-center justify-center">
                <div className="text-center">
                    <FaTools className="text-green-500 text-6xl mb-4 animate-pulse mx-auto" />
                    <h1 className="text-2xl font-bold text-gray-600">Em breve...</h1>
                </div>
            </div>
        </section>
    )
}

export default Project
