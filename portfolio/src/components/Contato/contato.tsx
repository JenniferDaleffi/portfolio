import Image from "next/image"
import Jennifer3 from "../../../public/jennifer3.png"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";



export default function Contato(){
    return(
        <div id="contato" className="bg-bege h-screen">
            <div className="w-full flex justify-center">
                <h1 className="text-4xl text-bege mt-20 mb-10 text-cinza">Contato</h1>
            </div>
            <div className="flex justify-center gap-80 items-center">
                <div>
                    <Image className="" width={400} src={Jennifer3} alt="foto da jennifer"></Image>
                    <div className="flex justify-center gap-5 mt-5">
                    <a target="_blank" href="https://github.com/JenniferDaleffi"><FaGithub className="text-4xl" /></a>
                    <a target="_blank" href="https://linkedin.com/in/jenniferdaleffi"><FaLinkedin className="text-4xl"/></a>
                    <a target="_blank" href="https://instagram.com/jenniferdaleffi"><FaInstagram className="text-4xl"/></a>
                    </div>
                </div>
                <div className="text-cinza text-xl flex flex-col w-80">
                    <div className="w-72">     
                        <h1 className="text-3xl mb-5 border-b border-cinza text-center w-64">Me mande um email</h1>
                    </div>
                    <p>Nome</p>
                    <input className="p-3 mt-2 rounded-lg" type="text" placeholder="Digite seu nome" />
                    <br />
                    <p className="mt-1">Email</p>
                    <input className="mt-2 mb-1 p-3 rounded-lg" placeholder="Digite seu email" type="email" name="" id="" />
                    <br />
                    <p>Mensagem</p>
                    <textarea className="p-3 mt-2 h-44 rounded-lg" placeholder="Digite sua mensagem" name="" id=""></textarea>
                    <div className="flex justify-center">
                    <button className="border-2 border-solid border-cinza text-xl bg-cinza w-32 text-bege p-3 w-24 mt-5 rounded-lg hover:bg-transparent hover:text-cinza transition duration-500">Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}