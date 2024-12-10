"use client";


import { FaArrowLeft  } from "react-icons/fa";
import Excel from "../../../public/excel.jpg"
import PowerApps from "../../../public/powerapps.jpg"
import PowerAutomate from "../../../public/powerautomate.jpg"
import PowerBi from "../../../public/powerbi.jpg"
import Git from "../../../public/git.jpg"
import Algoritmos from "../../../public/algoritmos.jpg"
import Analise from "../../../public/analise.jpg"
import Computador from "../../../public/computador.jpg"
import JavaCertificado from "../../../public/javacertificado.jpg"
import SqlCertificado from "../../../public/sql.jpg"
import Industria from "../../../public/industria.jpg"
import { useState } from "react";
import Link from "next/link";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




const certificados = [
    {
        id: 1,
        titulo: "Excel: Automatizando tarefas com Macros (Alura)",
        imagem: Excel,
    },
    {
        id: 2,
        titulo: "Power Apps: Descobrindo o poder da automação lowcode (Alura)",
        imagem: PowerApps,
    },
    {
        id: 3,
        titulo: "Power Automate: automatize processos e tarefas repetitivas e rotineiras (Alura)",
        imagem: PowerAutomate,
    },
    {
        id: 4,
        titulo: "Power BI Desktop: construindo meu primeiro dashboard (Alura)",
        imagem: PowerBi,
    },
    {
        id: 5,
        titulo: "Básico sobre o funcionamento do computador (AdaTech)",
        imagem: Computador,
    },
    {
        id: 6,
        titulo: "Desenvolvimento de aplicação serverless com Java e Maven para redirecionamento de urls. (RocketSeat)",
        imagem: JavaCertificado,
    },
    {
        id: 7,
        titulo: "Git e Versionamento (AdaTech)",
        imagem: Git,
    },
    {
        id: 8,
        titulo: "SQL para Análise de Dados: Do básico ao avançado (Udemy)",
        imagem: SqlCertificado,
    },
    {
        id: 9,
        titulo: "System Analysis and Web prototyping (FIAP)",
        imagem: Analise,
    },
    {
        id: 10,
        titulo: "Algoritmos: Aprenda a programar (FIAP)",
        imagem: Algoritmos,
    },
    {
        id: 11,
        titulo: "Indústria 4.0 (PUCRS)",
        imagem: Industria,
    }
]


export default function Certificados() {
    const [search, setSearch] = useState("");

    const filteredCertificados = certificados.filter((certificado) =>
        certificado.titulo.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="">
            <div className="p-4">
                <div className="mb-10 mt-10">
                    <div className="lg:ml-10">
                    <Link href="/"><FaArrowLeft className="text-2xl mb-2 cursor-pointer mr-2" /></Link>
                    <h1 className="text-3xl font-bold text-cinza border-b border-cinza w-40 mb-5">Certificados</h1>
                    </div>
                    <div className="flex justify-center">
                    <div className="relative w-full max-w-xl">
                        <input
                            type="text"
                            placeholder="Pesquisar projetos..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="p-3 w-full border-2 border-bege rounded-md text-black pl-10"
                        />
                        <FontAwesomeIcon
                            icon={faMagnifyingGlass}
                            className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"
                            style={{ color: "#292929" }}
                        />
                    </div> 
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredCertificados.length > 0 ? (
                        filteredCertificados.map((certificado) => (
                            <div
                                key={certificado.id}
                                className="shadow-md border rounded-lg overflow-hidden border-cinza text-center hover:scale-110 hover:duration-300"
                            >
                                <img
                                    src={certificado.imagem.src}
                                    alt={certificado.titulo}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h2 className="text-lg font-semibold">{certificado.titulo}</h2>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500 col-span-full">
                            Nenhum certificado encontrado.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
