import Image from "next/image"
import fixerai from "../../../../public/fixerai_resized.jpg"
import fixerai2 from "../../../../public/fixerai2.jpg"
import { FaJava } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaPython, FaArrowLeft  } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import Link from "next/link";
import { FaGithub} from "react-icons/fa";


export default function Fixerai(){
    return(
        <div className="flex justify-around mt-20">
            <div className="w-96">
                <Link href="/#projetos"><FaArrowLeft className="text-2xl mb-5"/></Link>
                <h1 className="text-3xl font-bold">FixerAI</h1>
                <p className="mt-5 text-lg">O presente trabalho propõe o desenvolvimento de um sistema de gestão integrada para oficinas automotivas, em parceria com a Faculdade de Informática e Administração Paulista e a Porto Seguro, com o objetivo de otimizar os processos relacionados ao reparo e manutenção de veículos. O sistema visa oferecer uma solução completa e eficiente para as necessidades do setor, abrangendo desde o agendamento de serviços até o acompanhamento pós atendimento.</p>
                <div className="flex gap-5 mt-10">
                    <FaJava className="text-5xl"/>
                    <SiTypescript className="text-5xl"/>
                    <FaPython className="text-5xl"/>
                    <TbSql className="text-5xl"/>
                </div>
                <div className="text-2xl mt-10 mb-5">
                    Integrantes
                </div>
                <div className="text-lg">
                    <h1>Jennifer Daleffi - Responsável pelo back-end Python e gestão de negócios.</h1>
                    <h1 className="mt-5 mb-5">Paulo Henrique - Responsável pelo banco de dados Oracle e Machine Learning</h1>
                    <h1 className="mb-5">Davi Gonzaga - Responsável pelo back-end Java e Desenvolvimento Web</h1>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <Image className="mb-10 rounded-xl border-2 border-black border-solid" width={500} src={fixerai} alt="imagem do projeto fixer"></Image>
                <Image className="mb-10 rounded-xl border-2 border-black border-solid" width={500} src={fixerai2} alt="imagem do projeto fixer"></Image>
                <a target="_blank" className="bg-white p-2 hover:bg-cinza rounded-full transition duration-500" href="https://github.com/FixerAI"><FaGithub className="text-4xl hover:text-bege transition duration-500"/></a>
            </div>
        </div>
    )
}