import Image from "next/image"
import Palestra from "../../../public/B3-Fachada.jpg"
import { FaArrowLeft  } from "react-icons/fa";
import Link from "next/link";

export default function Experiencia(){
    return(
        <div className="">
            <div className="ml-12 lg:ml-20 mt-10">
            <Link href="/#profissional"><FaArrowLeft className="text-2xl mb-2"/></Link>
            <h1 className="text-3xl">Experiência</h1>
            </div>
            <div className="flex justify-center mb-10">
                <div className="w-3/4 mt-10 md:w-2/4 xl:w-1/4 border border-cinza rounded-lg hover:scale-110 hover:duration-300">
                    <Image className="w-full h-48 object-cover" src={Palestra} alt="aa"></Image>
                    <div className="p-5">
                        <h1 className="mt-5 text-center text-xl font-bold">B3 - Brasil, Bolsa, Balcão</h1>
                        <p className="text-center">Fevereiro de 2025</p>
                        <p className="text-center mb-5">Função: Estágio em Infraestrutura</p>
                        <p className="">Estou atuando como estagiária na área de Sustentação de Infraestrutura da B3, onde tenho a oportunidade de desenvolver minhas habilidades em tecnologia e contribuir para a manutenção e evolução da infraestrutura que garante a segurança e disponibilidade das operações. Fazer parte de uma das maiores instituições financeiras do país tem sido uma experiência incrível, repleta de aprendizado e crescimento.</p>   
                    </div>       
                </div>
            </div>
        </div>
    )
}