import Image from "next/image"
import verde from "../../../../public/verde_resized.jpg"
import verde2 from "../../../../public/verde2.jpg"
import verde3 from "../../../../public/verde3.jpg"
import { FaJava } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaPython, FaArrowLeft } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";


export default function Fixerai() {
    return (
        <div className="flex justify-around mt-20">
            <div className="w-96">
                <Link href="/#projetos"><FaArrowLeft className="text-2xl mb-5" /></Link>
                <h1 className="text-3xl font-bold">VerdeVias</h1>
                <p className="mt-5 text-lg">O projeto VerdeVias prioriza a transição para sistemas de transporte público movidos a fontes renováveis de energia, como a energia solar e elétrica, reduzindo a dependência de combustíveis fósseis. Nossa equipe busca assegurar que os requisitos técnicos e operacionais sejam otimizados, garantindo um funcionamento sustentável e eficiente. Para isso, são adotadas metodologias ágeis, facilitando o monitoramento de cada etapa do desenvolvimento da solução e promovendo uma gestão flexível e colaborativa.
                </p>
                <div className="flex gap-5 mt-10">
                    <FaJava className="text-5xl" />
                    <SiTypescript className="text-5xl" />
                    <FaPython className="text-5xl" />
                    <TbSql className="text-5xl" />
                </div>
                <div className="text-2xl mt-10 mb-5">
                    Integrantes
                </div>
                <div className="text-lg">
                    <h1>Jennifer Daleffi - Responsável pela gestão de negócios e back-end Python</h1>
                    <h1 className="mt-5 mb-5">Julia Vasconselos - Responsável pelo banco de dados Oracle e Machine Learning</h1>
                    <h1 className="mb-5">Leonardo Cadena - Responsável pelo back-end Java e Desenvolvimento Web</h1>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <Image className="mb-10 rounded-xl border-2 border-black border-solid" width={500} src={verde} alt="imagem do projeto fixer"></Image>
                <div className="flex gap-5">
                    <Image className="mb-10 rounded-xl border-2 border-black border-solid" width={500} src={verde2} alt="imagem do projeto fixer"></Image>
                    <Image className="mb-10 rounded-xl border-2 border-black border-solid" width={500} src={verde3} alt="imagem do projeto fixer"></Image>
                </div>
                <a target="_blank" className="bg-white p-2 hover:bg-cinza rounded-full transition duration-500" href="https://github.com/Verde-Vias"><FaGithub className="text-4xl hover:text-bege transition duration-500" /></a>
            </div>
        </div>
    )
}