import Image from "next/image"
import Palestra from "../../../public/palestra.jpg"
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
                        <h1 className="mt-5 text-center text-xl font-bold">Rede Líderes Digitais</h1>
                        <p className="text-center">Abril 2024 - Agosto 2024</p>
                        <p className="text-center mb-5">Função: Membro</p>
                        <p className="">A Rede Líderes Digitais é uma comunidade exclusiva que reúne as principais empresas nativas digitais, como PayPal, Mercado Livre, Shein, C6, Banco Inter, Rappi, Loggi, Memed, entre outras. Além dessas empresas, também integram a rede grandes executivos, como CTOs, CISOs e CIOs de destaque no mercado. O propósito da Rede é criar um ambiente que promova a conexão entre profissionais qualificados e empresas de relevância no setor digital. Sendo participante de projetos passados, fui reconhecida como Membro da Rede Líderes Digitais, o que me forneceu oportunidades de visibilidade e networking.</p>   
                    </div>       
                </div>
            </div>
        </div>
    )
}