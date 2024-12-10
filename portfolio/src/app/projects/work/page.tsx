import Image from "next/image"
import work from "../../../../public/work_resized.jpg"
import work2 from "../../../../public/work2.png"
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";



export default function Fixerai() {
    return (
        <div className="flex flex-wrap justify-around mt-20">
            <div className="w-96 ml-5 mr-5">
                <Link href="/#projetos"><FaArrowLeft className="text-2xl mb-5" /></Link>
                <h1 className="text-3xl font-bold">WorkBeer</h1>
                <p className="mt-5 text-lg">O projeto consiste em uma plataforma de networking (B2B), onde profissionais e empresas irão se conectar em Eventos propostos pela Própria plataforma.Um projeto desafiador proposto pelo Movimento de Inovação Digital (MID), que são parceiros da FIAP. Foi desenvolvido em 2 meses, se tratando de uma rede social inovadora focada em proporcionar encontros anônimos entre pessoas com interesses semelhantes, especialmente para aqueles que gostam de explorar bares e happy hours.
                </p>
                <div className="flex flex-wrap gap-5 mt-10">
                    <FaHtml5 className="text-5xl" />
                    <FaCss3Alt className="text-5xl" />
                    <IoLogoJavascript className="text-5xl" />
                </div>
                <div className="text-2xl mt-10 mb-5">
                    Integrantes
                </div>
                <div className="text-lg">
                    <h1>Jennifer Daleffi - Responsável pela gestão e trello.</h1>
                    <h1 className="mt-5">Mohamed Smaili - Responsável pelo desenvolvimento web do projeto.</h1>
                    <h1 className="mt-5 mb-5">Rodrigo Nakata - Responsável pela organização do projeto.</h1>
                    <h1 className="mb-5">Lucas Feliciano - Responsável pelo design e pelo Figma do projeto.</h1>
                </div>
            </div>
            <div className="flex flex-wrap ml-5 mr-5 mb-10 flex-col items-center">
                <Image className="mb-10 rounded-xl border-2 border-black border-solid" width={500} src={work} alt="imagem do projeto fixer"></Image>
                <Image className="mb-10 rounded-xl border-2 border-black border-solid" width={500} src={work2} alt="imagem do projeto fixer"></Image>
                <div className="flex gap-5">
                    <a target="_blank" className="bg-white p-2 hover:bg-cinza rounded-full transition duration-500" href="https://github.com/afeifz/WorkBeer"><FaGithub className="text-4xl hover:text-bege transition duration-500"/></a>
                    <a target="_blank" className="bg-white p-2 hover:bg-cinza rounded-full transition duration-500" href="https://afeifz.github.io/WorkBeer/"><IoLogoVercel className="text-4xl hover:text-bege transition duration-500"/></a>
                </div>
            </div>
        </div>
    )
}