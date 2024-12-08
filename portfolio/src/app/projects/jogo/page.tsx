import Image from "next/image"
import jogo from "../../../../public/jogo_resized.png"
import jogo2 from "../../../../public/jogo2.png"
import { FaPython, FaArrowLeft  } from "react-icons/fa";
import Link from "next/link";
import { FaGithub} from "react-icons/fa";


export default function Fixerai(){
    return(
        <div className="flex justify-around mt-20">
            <div className="w-96">
                <Link href="/#projetos"><FaArrowLeft className="text-2xl mb-5"/></Link>
                <h1 className="text-3xl">Jogo da Velha</h1>
                <p className="mt-5 text-lg">Este projeto é uma implementação do jogo da velha (Tic-Tac-Toe) em Python, desenvolvido como parte do Checkpoint 4 do curso TADS da FIAP. O jogo pode ser jogado em três modos: Jogador X vs Jogador O - Dois jogadores humanos jogam um contra o outro. Jogador X vs Máquina (Fácil) - Um jogador humano enfrenta uma máquina com estratégia fácil. Jogador X vs Máquina (Difícil) - Um jogador humano enfrenta uma máquina com estratégia difícil.</p>
                <div className="flex gap-5 mt-10">
                    <FaPython className="text-5xl"/>
                </div>
                <div className="text-2xl mt-10 mb-5">
                    Integrantes
                </div>
                <div className="text-lg">
                    <h1>Jennifer Daleffi</h1>
                    <h1 className="mt-5 mb-5">Julio César</h1>
                    <h1 className="mb-5">Erik dos Santos</h1>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <Image className="mb-10 rounded-xl border-2 border-black border-solid" width={500} src={jogo} alt="imagem do projeto fixer"></Image>
                <Image className="mb-10 rounded-xl border-2 border-black border-solid" width={500} src={jogo2} alt="imagem do projeto fixer"></Image>
                <a target="_blank" className="bg-white p-2 hover:bg-cinza rounded-full transition duration-500" href="https://github.com/JenniferDaleffi/JogoDaVelha.py"><FaGithub className="text-4xl hover:text-bege transition duration-500"/></a>
            </div>
        </div>
    )
}