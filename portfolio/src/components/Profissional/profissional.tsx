export default function Profissional() {
    return (
        <div id="profissional" className="bg-bege mb-10">
            <div className="flex gap-20 justify-around">
                <div className="border-solid border-2 border-cinza w-96 h-96 p-5 rounded-xl bg-transparent shadow-slate-700 shadow-lg flex flex-col justify-between items-center hover:scale-110 hover:duration-300">
                    <h1 className="text-2xl">Currículo</h1>
                    <p className="text-center break-all">Meu currículo profissional, no qual apresento meus conhecimentos adquiridos ao longo da minha trajetória, minhas formações acadêmicas e certificações relevantes, além das experiências profissionais que me permitiram desenvolver habilidades práticas. Também destaco as áreas de interesse dentro da tecnologia nas quais busco me especializar e expandir meu conhecimento.</p>
                    <button className="border-2 border-solid border-cinza bg-cinza p-5 rounded-lg w-40 text-white hover:bg-transparent hover:text-cinza transition duration-500">Baixar CV</button>
                </div>
                <div className="border-solid border-2 border-cinza w-96 h-96 p-5 rounded-xl bg-transparent shadow-slate-700 shadow-lg flex flex-col justify-between items-center hover:scale-110 hover:duration-300">
                    <h1 className="text-2xl">Certificados</h1>
                    <p className="text-center break-all">Neste quadro, apresento todos os certificados que conquistei ao longo dos meus anos de estudo, adquiridos em plataformas renomadas como Alura, FIAP, PUCRS, Rockseat, Udemy, entre outras. Cada certificação reflete o meu compromisso contínuo com o aprendizado e o aprimoramento das minhas habilidades na área de tecnologia. Além disso, compartilho o conhecimento que venho adquirindo aplicando o que aprendi para gerar impacto positivo no setor.</p>
                    <button className="border-2 border-solid border-cinza bg-cinza p-5 rounded-lg w-40 text-white hover:bg-transparent hover:text-cinza transition duration-500">Certificados</button>
                </div>
                <div className="border-solid border-2 border-cinza w-96 h-96 p-5 rounded-xl bg-transparent shadow-slate-700 shadow-lg flex flex-col justify-between items-center hover:scale-110 hover:duration-300">
                    <h1 className="text-2xl">Experiência</h1>
                    <p className="text-center break-all">Minha experiência profissional na área de tecnologia tem sido essencial para agregar valor ao setor de desenvolvimento. Trabalhei com empresas reais, aplicando meus conhecimentos em projetos práticos, enfrentando desafios e contribuindo para soluções que geraram resultados significativos. Essa vivência me permitiu aprimorar habilidades técnicas e colaborar com equipes, sempre focado em entregar impacto positivo para o setor.</p>
                    <button className="border-2 border-solid border-cinza bg-cinza p-5 rounded-lg w-40 text-white hover:bg-transparent hover:text-cinza transition duration-500">Experiência</button>
                </div>
            </div>
        </div>
    )
}