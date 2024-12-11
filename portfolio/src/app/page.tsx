import Image from "next/image";
import JenniFoto from "../../public/jennifer.jpg"
import Sobre from "../components/Sobre/sobre"
import Github from "../../public/github.png"
import Profissional from "../components/Profissional/profissional"
import Projetos from "../components/Projetos/projetos"
import Academico from "../components/Academico/academico";
import Contato from "../components/Contato/contato"
import Footer from "../components/Footer/footer"

export default function Home() {
  return (
    <div>
      <div className="bg-cinza text-white">
        <div className="flex justify-center text-center md:text-left md:justify-around pt-20 items-center flex-wrap">
          <div className="w-80 mb-32 md:mb-52">
            <h2 className="text-4xl text-bege">Olá, meu nome é:</h2>
            <h1 className="text-5xl mt-5 mb-5">Jennifer Daleffi</h1>
            <p className="mb-5">Estudante de Análise e Desenvolvimento de Sistemas com foco em desenvolvimento back-end Java e Infra & DevOps</p>
            <a href="#contato"><button className="border-2 border-solid border-bege bg-bege w-44 p-2 rounded-md text-cinza hover:bg-transparent hover:text-bege transition duration-500">Contate-me</button></a>
          </div>
          <div className="mt-20 flex flex-col items-center flex-wrap mb-52">
            <Image className="bg-bege rounded-full w-80 h-80 mb-5" src={JenniFoto} alt="minha foto"></Image>
            <a href="https://github.com/JenniferDaleffi"><Image src={Github} alt="icone do github"></Image></a>
          </div>
        </div>
      </div>
      <Sobre/>
      <Profissional/>
      <Projetos/>
      <Academico/>
      <Contato/>
      <Footer/>
    </div>
  );
}
