"use client";


import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import JenniFoto3 from "../../../public/jennifer3.png"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const EmailForm = () => {

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();


    if (form.current) {
      emailjs
        .sendForm(
          "service_0svomq9", 
          "template_vv4m8pr",
          form.current,
          "GxOVIPogiW09Fvqgy" 
        )
        .then(
          () => {
            alert("E-mail enviado com sucesso!");
          },
          () => {
            alert("Erro ao enviar o e-mail. Tente novamente.");
          }
        );
    }
  };

  return (
    <div>
        <div className="w-full flex flex-wrap justify-center">
            <h1 className="text-4xl text-bege mb-20 text-cinza">Contato</h1>
        </div>
        <div className="flex flex-wrap justify-center gap-20 xl:gap-80 items-center">
            <div>
                <Image className="w-64 md:w-96" src={JenniFoto3} alt="foto da jennifer"></Image>
                <div className="flex flex-wrap justify-center gap-5 mt-5">
                    <a target="_blank" href="https://github.com/JenniferDaleffi"><FaGithub className="text-4xl" /></a>
                    <a target="_blank" href="https://linkedin.com/in/jenniferdaleffi"><FaLinkedin className="text-4xl"/></a>
                    <a target="_blank" href="https://instagram.com/jenniferdaleffi"><FaInstagram className="text-4xl"/></a>
                </div>
            </div>
            <form className="flex flex-col" ref={form} onSubmit={sendEmail}>
                <h1 className="text-3xl mb-5 border-b border-cinza text-center w-64">Me mande um email</h1>

                <label className="mb-2 text-xl">Nome</label>
                <input className="p-3 rounded-lg" type="text" name="user_name" required />

                <label className="mb-2 mt-5 text-xl">Email</label>
                <input className="p-3 rounded-lg" type="email" name="user_email" required />

                <label className="mb-2 mt-5 text-xl">Mensagem</label>
                <textarea className="p-3 mt-2 h-44 rounded-lg" name="message" required />

                <div className="flex flex-wrap justify-center">
                <button className="border-2 border-solid border-cinza text-xl bg-cinza w-32 text-bege p-3 w-24 mt-5 rounded-lg hover:bg-transparent hover:text-cinza transition duration-500" type="submit">Enviar</button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default EmailForm;
