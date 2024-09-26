import '../assets/home.css'

function Home() {
    return (
        <section className="container-full pt-5" id="home">
            <div className="flex flex-col lg:flex-row justify-center items-center mx-auto">
                <article className="navbar-text-js lg:mb-0 px-5 text-center lg:text-start">
                    <h2>Developer Full-Stack</h2>
                    <h1>Pedro Henrique</h1>
                    <p>Sou Pedro Henrique, tenho 22 anos e sou de Goiânia, Goiás. Atualmente, trabalho como engenheiro de software, desenvolvendo soluções com muita paixão. Fique à vontade para explorar o portfólio que fiz com muito carinho. Espero que você curta a navegação!</p>
                </article>

                <img src="./me.png" alt="Minha imagem ilustrada!" width={300} height={300}/>
            </div>
        </section>
    )
}

export default Home
