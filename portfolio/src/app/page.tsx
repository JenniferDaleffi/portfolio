import Image from "next/image";
import JenniFoto from "../../public/jennifer.jpg"
import Nav from "../components/Nav/nav"
import Sobre from "../components/Sobre/sobre"
import Github from "../../public/github.png"

export default function Home() {
  return (
    <div>
      <div className="bg-cinza text-white h-screen">
        <Nav/>
        <div className="flex justify-around mt-32 items-center">
          <div className="w-80">
            <h2 className="text-4xl text-bege">Olá, meu nome é:</h2>
            <h1 className="text-5xl mt-5 mb-5">Jennifer Daleffi</h1>
            <p className="mb-5">Estudante de Análise e Desenvolvimento de Sistemas com foco em desenvolvimento back-end Java e Infra & DevOps</p>
            <button className="border-2 border-solid border-bege bg-bege w-32 p-2 rounded-md text-cinza hover:bg-transparent hover:text-bege transition duration-500">Contate-me</button>
          </div>
          <div className="flex flex-col items-center">
            <Image className="bg-bege rounded-full w-96 h-96 mb-5" src={JenniFoto} alt="minha foto"></Image>
            <a href="https://github.com/JenniferDaleffi"><Image src={Github} alt="icone do github"></Image></a>
          </div>
        </div>
      </div>
      <Sobre/>
    </div>
  );
}
