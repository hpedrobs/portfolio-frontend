import '../assets/about.css'

function About() {
    return (
        <section className="" id="about">

            <div className="flex flex-col lg:flex-row justify-center items-center">
                <div className="flex flex-col">
                    <h2 className="h2">Sobre Mim</h2>
                    <img className="" src="./me-fundo-verde-com-circ.png" alt="Minha imagem circular" width="300px" height="300px" />
                </div>

                <div className="content text-center">
                    <p>
                        Olá! Sou o Pedro Henrique, tenho 22 anos e moro em Goiânia, Goiás.
                        É um prazer conhecê-lo!
                    </p>
                    <p>
                        Em minha atuação como Desenvolvedor de Software por 4 anos na área
                        de Desenvolvimento Web e Desenvolvimento de Software Empresarial,
                        adquiri uma vasta gama de habilidades técnicas e uma sólida experiência
                        prática em diversas tecnologias. Minha trajetória demonstra meu
                        compromisso com o desenvolvimento contínuo e a aquisição de novas
                        competências. Através de um processo constante de aprendizado e
                        aprimoramento, me tornei um profissional versátil e capaz de entregar
                        soluções eficientes e inovadoras.
                    </p>
                    <p>
                        Busco sempre novos desafios, especialmente em projetos que envolvam
                        Desenvolvimento de Software Empresarial. No entanto,também estou
                            aberto a oportunidades em outras áreas de desenvolvimento de software.
                    </p>
                    <p>
                        Estou confiante de que minhas habilidades e experiências podem
                        contribuir para o sucesso da sua empresa. Agradeço a oportunidade
                        e aguardo ansiosamente seu contato.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About
