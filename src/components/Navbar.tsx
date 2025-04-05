import { useState } from 'react'
import { HiBars3BottomRight } from "react-icons/hi2"
import { FaEnvelope } from "react-icons/fa"

import '../assets/navbar.css'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className="navbar py-6 lg:py-3 px-6 lg:flex lg:items-center backdrop-blur">
            <div className="flex fle-row justify-between content-center lg:block lg:flex-col">
                {/* Button Contact */}
                <a href="#contact" className="a-envelope flex items-center rounded p-3 drop-shadow">
                    <span>Contato</span>
                    <FaEnvelope className="size-6" />
                </a>

                {/* Menu Button for Mobile */}
                <button onClick={toggleMenu} className="block lg:hidden text-white">
                    <HiBars3BottomRight className="size-10 color-bar-menu" />
                </button>
            </div>

            {/* Dropdown Menu */}
            <div className={`${isOpen ? "flex" : "hidden"} lg:flex flex-col lg:flex-row items-center lg:items-none w-full mt-5 lg:mt-0 lg:w-auto lg:ml-auto`}>
                <ul className="lg:flex lg:space-x-6 text-center lg:mx-auto w-full lg:w-auto rounded drop-shadow lg:drop-shadow-none menu-background">
                    <li className="py-2 lg:py-0">
                        <a href="#home" className="block lg:inline drop-shadow" onClick={toggleMenu}>Página Principal</a>
                    </li>
                    <li className="py-2 lg:py-0">
                        <a href="#about" className="block lg:inline drop-shadow" onClick={toggleMenu}>Sobre Mim</a>
                    </li>
                    <li className="py-2 lg:py-0">
                        <a href="#skills" className="block lg:inline drop-shadow" onClick={toggleMenu}>Habilidades</a>
                    </li>
                    <li className="py-2 lg:py-0">
                        <a href="#projects" className="block lg:inline drop-shadow" onClick={toggleMenu}>Projetos</a>
                    </li>
                </ul>
            </div>

        </nav>
    )
}

export default Navbar
