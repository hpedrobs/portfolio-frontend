import '../assets/home.css'

function Home() {
    const navbarTextHtml = `
        <nav id="navbar">
            <div class="container">
                <ul>
                    <li><a href="#paginia-inicial" class="slide">Página Principal</a></li>
                    <li><a href="#sobre-mim" class="slide">Sobre Mim</a></li>
                    <li><a href="#habilidades" class="slide">Habilidades</a></li>
                    <li><a href="#projetos" class="slide">Projetos</a></li>
                </ul>
            </div>
        </nav>
    `

    const formatHtml = (html: string) : string => {
        const lines = html.split('\n').filter(line => line.trim().length > 0)
        const indentLengths = lines.map((line: string) => {
            const match = line.match(/^(\s*)/)
            return match ? match[0].length : 0
        })
        const minIndent = Math.min(...indentLengths)
        const trimmedLines = lines.map(line => line.slice(minIndent))
        return trimmedLines.join('\n')
    }

    return (
        <section className="container-full pt-5" id="home">
            <div className="grid grid-cols-1">
                <article className="navbar-text-js mb-10 px-5">
                    <p className="whitespace-nowrap overflow-hidden">const navbar = document.getElementById('#navbar')</p>
                    <p className="whitespace-nowrap overflow-hidden">const slides = document.querySelectorAll('.slide-nav-button')</p>
                </article>

                <article className="flex flex-col justify-center mx-auto mb-5 px-5">
                    <h1 className="h1 software">
                        software
                        <div className="trace ml-2"></div>
                    </h1>
                    <h1 className="h1 developer">Developer</h1>  
                </article>

                <article className="flex flex-col justify-center mx-auto mb-10 px-5">
                    <h2 className="h2-home">
                        Acredito que boas solucões são a chave para o sucesso nos negócios,<br />
                        e estou aqui para ajudar você a alcançar seus objetivos.
                    </h2> 
                </article>

                <article className="navbar-text-html px-5 mb-5">
                    <pre>
                        <code className="flex items-start">
                            {formatHtml(navbarTextHtml)}
                        </code>
                    </pre>
                </article>

                <article className="resume px-2">
                    <div className="grid grid-cols-1 gap-1">
                        <div className="flex flex-row items-center justify-center">
                            <p className="number-resume">4</p>
                            <p className="text-resume mr-3">
                                anos de<br/>
                                experiência
                            </p>
                            <p className="number-resume">12</p>
                            <p className="text-resume">
                                projetos<br/>
                                concluídos
                            </p>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Home
