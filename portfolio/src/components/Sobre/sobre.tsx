import Image from "next/image"
import JenniFoto2 from "../../../public/jennifer2.jpeg"
import Java from "../../../public/java.png"
import Docker from "../../../public/docker.png"
import Oracle from "../../../public/oracle.png"
import Python from "../../../public/python.png"
import Play from "../../../public/play.png"

export default function Sobre(){
    return(
        <div id="sobre" className="bg-bege flex flex-wrap justify-around items-center text-cinza">
            <div>
                <Image className="w-60 md:w-96 mt-20 mb-10" src={JenniFoto2} alt="foto da jennifer"></Image>
            </div>
            <div className="w-3/4 lg:w-2/4">
                <div className="flex flex-wrap items-center gap-2">
                <Image src={Play} alt="play"></Image>
                <h2 className="text-xl">Sobre Mim</h2>
                </div>
                <h1 className="text-3xl">Quem sou eu</h1>
                <p className="mt-20 mb-10 text-lg">Olá, meu nome é Jennifer Daleffi, nascida no estado de São Paulo. Sou estudante de Análise e Desenvolvimento de Sistemas na FIAP (Faculdade de Informática e Administração Paulista) e, em 2023, concluí o curso técnico em Mecânica Industrial integrado ao Ensino Médio no IFSP (Instituto Federal de São Paulo). Atualmente, atuo como desenvolvedora Back-end com foco em Java e estou expandindo minhas habilidades para a área de Infraestrutura e DevOps, com conhecimentos em ferramentas como Terraform, Microsoft Azure (Cloud), Docker, entre outras. Ao longo da minha trajetória, tive a oportunidade de desenvolver projetos relevantes para empresas renomadas, como Porto Seguro, FIA, Ultragaz, Ultracargo, Mahindra, Softtek, entre outras. Este portfólio é um espaço onde apresento meus principais projetos e talentos. Convido você a explorar meu trabalho e conhecer mais sobre minha trajetória profissional.
                </p>
                <div className="flex flex-wrap gap-5">
                    <div className="text-center bg-acizentado p-3 rounded-lg">
                        <Image src={Java} alt="a"></Image>
                    </div>
                    <div className="text-center bg-acizentado p-3 rounded-lg">
                        <Image src={Docker} alt="a"></Image>
                    </div>
                    <div className="text-center bg-acizentado p-3 rounded-lg">
                        <Image src={Oracle} alt="a"></Image>
                    </div>
                    <div className="text-center bg-acizentado p-3 rounded-lg">
                        <Image src={Python} alt="a"></Image>
                    </div>

                </div>
            </div>
        </div>
    )
}