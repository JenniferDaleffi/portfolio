import Image from "next/image"
import recicla from "../../../../public/recicla_resized.jpg"
import recicla2 from "../../../../public/recicla2.jpg"
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython, FaArrowLeft } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";


export default function Fixerai() {
    return (
        <div className="flex justify-around mt-20">
            <div className="w-96">
                <Link href="/#projetos"><FaArrowLeft className="text-2xl mb-5" /></Link>
                <h1 className="text-3xl font-bold">ReciclaBalsa</h1>
                <p className="mt-5 text-lg">A sustentabilidade é uma questão central no desenvolvimento urbano contemporâneo. A cidade de São Paulo, um dos maiores centros urbanos do Brasil, enfrenta desafios significativos relacionados ao transporte e ao gerenciamento de resíduos. O projeto ReciclaBalsa: Transporte Marítimo Sustentável para a Região de São Paulo propõe de forma multidisciplinar contendo uma base de dados, python, java, frontend, business model e inteligência artificial a criação que facilite a integração de iniciativas de reciclagem com o transporte fluvial, visando promover práticas sustentáveis e reduzir a emissão de poluentes.
                </p>
                <div className="flex gap-5 mt-10">
                    <FaJava className="text-5xl" />
                    <IoLogoJavascript className="text-5xl" />
                    <FaPython className="text-5xl" />
                    <TbSql className="text-5xl" />
                </div>
                <div className="text-2xl mt-10 mb-5">
                    Integrantes
                </div>
                <div className="text-lg">
                    <h1>Jennifer Daleffi - Responsável pela gestão de negócios e back-end Java</h1>
                    <h1 className="mt-5 mb-5">Paulo Henrique - Responsável pelo banco de dados Oracle e Chatbot IBM</h1>
                    <h1 className="mb-5">Davi Gonzaga - Responsável pelo back-end Python e Desenvolvimento Web</h1>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <Image className="mb-10 rounded-xl border-2 border-black border-solid" width={500} src={recicla} alt="imagem do projeto fixer"></Image>
                <Image className="mb-10 rounded-xl border-2 border-black border-solid" width={500} src={recicla2} alt="imagem do projeto fixer"></Image>
                <a target="_blank" className="bg-white p-2 hover:bg-cinza rounded-full transition duration-500" href="https://github.com/ReciclaBalsa"><FaGithub className="text-4xl hover:text-bege transition duration-500" /></a>
            </div>
        </div>
    )
}