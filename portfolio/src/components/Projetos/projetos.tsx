"use client";


import { useState } from "react";
import Image from "next/image";
import FixerAI from "../../../public/fixerai_resized.jpg";
import Recicla from "../../../public/recicla_resized.jpg";
import Verde from "../../../public/verde_resized.jpg";
import Work from "../../../public/work_resized.jpg";
import PortfolioEstudantes from "../../../public/portfolioestudantes_resized.png";
import Jogo from "../../../public/jogo_resized.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";



// Lista de projetos
const projetos = [
    {
        id: 1,
        titulo: "FixerAI",
        descricao:
            "Desenvolvimento de um sistema de gestão integrada para oficinas automotivas em parceria com a Porto Seguro.",
        imagem: FixerAI,
        link: "/projects/fixerai",
        
    },
    {
        id: 2,
        titulo: "ReciclaBalsa",
        descricao:
            "Proposta para integrar iniciativas de reciclagem com o transporte fluvial de forma sustentável.",
        imagem: Recicla,
        link: "/projects/recicla",
    },
    {
        id: 3,
        titulo: "Portfolio dos Estudantes",
        descricao:
            "Portfólio grupal com notas, feedbacks e design estilizado para mostrar o desempenho acadêmico.",
        imagem: PortfolioEstudantes,
        link: "/projects/portfolioestudantes",
    },
    {
        id: 4,
        titulo: "VerdeVias",
        descricao:
            "Transição para sistemas de transporte público movidos a fontes renováveis de energia.",
        imagem: Verde,
        link: "/projects/verde",
    },
    {
        id: 5,
        titulo: "WorkBeer",
        descricao:
            "Plataforma de networking B2B para encontros anônimos em eventos, bares e happy hours.",
        imagem: Work,
        link: "/projects/work",
    },
    {
        id: 6,
        titulo: "Jogo da Velha",
        descricao:
            "Implementação do jogo da velha com 3 modos de dificuldade em Python.",
        imagem: Jogo,
        link: "/projects/jogo",
    },
];

export default function Projetos() {
    const [search, setSearch] = useState("");


    const projetosFiltrados = projetos.filter((projeto) =>
        projeto.titulo.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div id="projetos" className="flex flex-col bg-cinza text-white p-10 items-center">
            <h1 className="text-4xl mb-5 mt-5">Meus Projetos</h1>
            {}
            <div className="relative w-full max-w-xl mb-10 mt-5">
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
            {/* Renderização de projetos */}
            <section className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {projetosFiltrados.length > 0 ? (
                    projetosFiltrados.map((projeto) => (
                        <Link href={projeto.link}
                        key={projeto.id}
                        className="hover:scale-110 hover:duration-300"
                        >
                        <div
                            className="border-2 border-bege rounded-md bg-cinza"
                        >
                            <Image
                                src={projeto.imagem}
                                alt={`Imagem do projeto ${projeto.titulo}`}
                                width={600}
                                height={300}
                                className="rounded-md"
                            />
                            <div className="p-5">
                                <h1 className="text-center text-bege text-2xl mt-5 mb-5">
                                    {projeto.titulo}
                                </h1>
                                <p className="text-lg">{projeto.descricao}</p>
                            </div>
                        </div>
                        </Link>
                    ))
                ) : (
                    <p className="text-xl col-span-full text-center">
                        Nenhum projeto encontrado.
                    </p>
                )}
            </section>
            
        </div>
    );
}
