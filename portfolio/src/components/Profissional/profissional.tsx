export default function Profissional() {
    return (
        <div className="bg-bege h-screen">
            <div>
                <h1 className="ml-10 p-20 text-3xl text-center">Meu profissional</h1>
            </div>
            <div className="flex justify-around mt-20">
                <div className="border-solid border-2 border-cinza w-72 h-96 p-5 rounded-xl bg-transparent shadow-slate-700 shadow-lg flex flex-col justify-between items-center hover:scale-110 hover:duration-300">
                    <h1 className="text-2xl">Currículo</h1>
                    <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos quia obcaecati cumque perferendis numquam ullam ad, totam perspiciatis recusandae atque?</p>
                    <button className="border-2 border-solid border-cinza bg-cinza p-5 rounded-lg w-40 text-white hover:bg-transparent hover:text-cinza transition duration-500">Baixar CV</button>
                </div>
                <div className="border-solid border-2 border-cinza w-72 h-96 p-5 rounded-xl bg-transparent shadow-slate-700 shadow-lg flex flex-col justify-between items-center hover:scale-110 hover:duration-300">
                    <h1 className="text-2xl">Certificados</h1>
                    <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos quia obcaecati cumque perferendis numquam ullam ad, totam perspiciatis recusandae atque?</p>
                    <button className="border-2 border-solid border-cinza bg-cinza p-5 rounded-lg w-40 text-white hover:bg-transparent hover:text-cinza transition duration-500">Certificados</button>
                </div>
                <div className="border-solid border-2 border-cinza w-72 h-96 p-5 rounded-xl bg-transparent shadow-slate-700 shadow-lg flex flex-col justify-between items-center hover:scale-110 hover:duration-300">
                    <h1 className="text-2xl">Experiência</h1>
                    <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos quia obcaecati cumque perferendis numquam ullam ad, totam perspiciatis recusandae atque?</p>
                    <button className="border-2 border-solid border-cinza bg-cinza p-5 rounded-lg w-40 text-white hover:bg-transparent hover:text-cinza transition duration-500">Rede Líderes</button>
                </div>
            </div>
        </div>
    )
}