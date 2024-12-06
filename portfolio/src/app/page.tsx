import Image from "next/image";
import JenniFoto from "../../public/jennifer.jpg"
import Nav from "../components/Nav/nav"
import Sobre from "../components/Sobre/sobre"


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
          <div>
            <Image className="bg-bege rounded-full w-96 h-96" src={JenniFoto} alt="minha foto"></Image>
          </div>
        </div>
      </div>
      <Sobre/>
    </div>
  );
}
