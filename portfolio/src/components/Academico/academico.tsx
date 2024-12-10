import Image from "next/image"
import IfspFoto from "../../../public/ifsp.jpg"
import FiapFoto from "../../../public/fiapfoto.png"

export default function Academico(){
    return(
        <div id="academico" className="bg-cinza">
        <div className="flex flex-wrap justify-center text-3xl pt-20 text-white">
            <h1 className="border-b w-56 text-center">Perfil Acadêmico</h1>
        </div>
        <div className="mt-20 mb-32 flex flex-wrap justify-center gap-48 text-white">
            <div className="w-3/4 lg:w-96 border border-white rounded-lg hover:scale-110 hover:duration-300 mb-44">
                <Image className="w-full h-48 object-cover" src={IfspFoto} alt="foto do ifsp"></Image>
                <div className="p-5">
                <h1 className="text-center text-xl text-bold">IFSP</h1>
                <p className="text-center">Ensino Médio Técnico em Mecânica Industrial</p>
                <p className="text-center">2021 - 2023</p>
                <p className="mt-5">Em 2021, fui convocada para a matrícula no Instituto Federal de São Paulo onde entrei em 4º lugar. Durante três anos, cursei Técnico em Mecânica, adquirindo habilidades em programação CNC, tratamentos térmicos, resistência dos materiais, física e matemática avançada, processos de fabricação, automação hidráulica e pneumática, tecnologia de usinagem (incluindo uso de tornos e cálculo de RPM), desenho técnico, metrologia, gestão industrial e projeto integrador.</p>
                </div>
            </div>
            <div className="w-3/4 lg:w-96 border border-white rounded-lg hover:scale-110 hover:duration-300 mb-44">
                <Image className="w-full h-48 object-cover" src={FiapFoto} alt="foto da fiap"></Image>
                <div className="p-5">
                <h1 className="text-center text-xl text-bold">FIAP</h1>
                <p className="text-center">Análise e Desenvolvimento de Sistemas</p>
                <p className="text-center">2024 - 2026</p>
                <p className="mt-5">Durante minha experiência na FIAP, participei de projetos inovadores como o ReciclaBalsa, voltado para transporte marítimo sustentável em São Paulo, e o FixerAI, que modernizou o sistema de registro de sinistros de veículos. Em parceria com empresas renomadas como AWS e USP, desenvolvi soluções alinhadas à sustentabilidade e tecnologia avançada, aprimorando habilidades práticas em TI. Essa vivência proporcionou aprendizado colaborativo e impacto positivo em desafios reais.</p>
                </div>
            </div>
        </div>
        </div>
    )
}