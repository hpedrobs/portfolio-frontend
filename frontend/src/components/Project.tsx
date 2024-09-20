import '../assets/project.css'
import { ClockIcon } from '@heroicons/react/24/solid'

function Project() {
    return (
        <section className="" id="projects">
            <h2 className="h2 mb-10">Projetos</h2>
            <div className="flex items-center justify-center">
                <div className="text-center">
                    <ClockIcon className="h-14 w-14 text-yellow-500 mx-auto mb-4" />
                    <h1 className="text-2xl font-bold text-yellow-500">Em breve...</h1>
                </div>
            </div>
        </section>
    )
}

export default Project
