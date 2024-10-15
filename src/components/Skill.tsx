import CardSkill from './CardSkill'
import '../assets/skill.css'

function Skill() {
    return (
        <section className="" id="skills">
            <h2 className="h2">Habilidades</h2>

            <div className="flex flex-col justify-center align-center">
                <div className="mb-10 resume-skills">
                    <p>
                        Sou programador com experiência no setor contábil, onde trabalhei como desenvolvedor de software em uma empresa de contabilidade. Tenho uma bagagem diversificada em HTML, CSS (SASS/SCSS), JavaScript, React, Vue.js, Node.js, Express.js, Python, MongoDB, TypeScript e Playwright.
                        Meus principais focos são frameworks como React, Vue.js e Node.js, além da automação com Playwright. Essa vivência no ramo contábil me permite criar soluções práticas e eficientes que atendem às necessidades específicas dos clientes.
                    </p>
                </div>

                <div className="list-skills">
                    <CardSkill title={'HTML5'} progress={70} objectData="./icons/html.svg"/>
                    <CardSkill title={'CSS3'} progress={70} objectData="./icons/css.svg"/>
                    <CardSkill title={'JavaScript'} progress={80} objectData="./icons/js.svg"/>
                    <CardSkill title={'Vue.js'} progress={70} objectData="./icons/vue.svg"/>
                    <CardSkill title={'Node.js'} progress={70} objectData="./icons/node.svg"/>
                    <CardSkill title={'Python'} progress={60} objectData="./icons/python.svg"/>
                    <CardSkill title={'MongoDB'} progress={80} objectData="./icons/mongodb.svg"/>
                    <CardSkill title={'TypeScript'} progress={70} objectData="./icons/ts.svg"/>
                    <CardSkill title={'React'} progress={70} objectData="./icons/react.svg"/>
                    <CardSkill title={'VS Code'} progress={90} objectData="./icons/vs.svg"/>
                    <CardSkill title={'Figma'} progress={70} objectData="./icons/figma.svg"/>
                    <CardSkill title={'PHP'} progress={60} objectData="./icons/php.svg"/>
                </div>
            </div>

        </section>
    )
}

export default Skill
