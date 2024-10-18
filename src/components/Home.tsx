import '../assets/home.css'

function Home() {
    return (
        <section className="container-full pt-5" id="home">
            <div className="flex flex-col lg:flex-row justify-center items-center mx-auto">
                <article className="navbar-text-js lg:mb-0 px-5 text-center lg:text-start">
                    <h2>Developer Full-Stack</h2>
                    <h1 className='my-4'>Pedro Henrique</h1>
                    <p>Meu nome é Pedro Henrique, sou desenvolvedor de software em Goiânia, Goiás, com 6 anos de experiência no desenvolvimento de soluções voltadas para a otimização de processos e inovação. Meu portfólio reflete o compromisso com a qualidade e a eficiência em cada projeto. Sinta-se à vontade para explorá-lo.</p>
                </article>

                <img src="./me.png" alt="Minha imagem ilustrada!" width={300} height={300}/>
            </div>
        </section>
    )
}

export default Home
