import Image from "next/image"
import portfolioestudantes from "../../../../public/portfolioestudantes_resized.png"
import portfolioestudantes2 from "../../../../public/portfolioestudantes2.png"
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaArrowLeft  } from "react-icons/fa";
import Link from "next/link";
import { FaGithub} from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";


export default function Fixerai(){
    return(
        <div className="flex justify-around mt-20">
            <div className="w-96">
                <Link href="/#projetos"><FaArrowLeft className="text-2xl mb-5"/></Link>
                <h1 className="text-3xl">Portfolio dos Estudantes</h1>
                <p className="mt-5 text-lg">No contexto acadêmico, um portfólio individual é amplamente utilizado por profissionais para apresentar projetos, habilidades e experiências. Contudo, e se um portfólio pudesse reunir o desempenho coletivo e individual de um grupo de estudantes? Essa foi a proposta desenvolvida em parceria com meus colegas Leonardo Cadena e Julia Vasconcelos. Nosso desafio foi criar um portfólio inovador que destacasse o progresso acadêmico de cada integrante de maneira organizada e visualmente atrativa.Estrutura do Portfólio: Nosso projeto foi estruturado em três seções principais, refletindo diferentes aspectos do aprendizado ao longo do curso.</p>
                <div className="flex gap-5 mt-10">
                    <RiNextjsFill className="text-5xl"/>
                    <SiTypescript className="text-5xl"/>
                    <RiTailwindCssFill className="text-5xl"/>
                    <FaReact className="text-5xl"/>
                </div>
                <div className="text-2xl mt-10 mb-5">
                    Integrantes
                </div>
                <div className="text-lg">
                    <h1>Jennifer Daleffi - Responsável pelo design do website e pelo desenvolvimento web.</h1>
                    <h1 className="mt-5 mb-5">Julia Vasconselos - Responsável pelo desenvolvimento AppWrite.</h1>
                    <h1 className="mb-5">Leonardo Cadena - Responsável pelo back-end em TypeScript.</h1>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <Image className="mb-10 rounded-xl border-2 border-black border-solid" width={500} src={portfolioestudantes} alt="imagem do projeto fixer"></Image>
                <Image className="mb-10 rounded-xl border-2 border-black border-solid" width={500} src={portfolioestudantes2} alt="imagem do projeto fixer"></Image>
                <div className="flex gap-5">
                    <a target="_blank" className="bg-white p-2 hover:bg-cinza rounded-full transition duration-500" href="https://github.com/JenniferDaleffi/PortfolioDeAvaliacoes"><FaGithub className="text-4xl hover:text-bege transition duration-500"/></a>
                    <a target="_blank" className="bg-white p-2 hover:bg-cinza rounded-full transition duration-500" href="https://portfolio-de-avaliacoes.vercel.app/"><IoLogoVercel className="text-4xl hover:text-bege transition duration-500"/></a>
                </div>
            </div>
        </div>
    )
}