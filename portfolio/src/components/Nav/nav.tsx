export default function Nav() {
    return(
        <>
        <div className="flex justify-between text-xl bg-cinza text-bege">
            <div className="mt-5 ml-10">
                <button>PORTUGUÊS</button>
            </div>
            <div className="mr-10 flex gap-24 mt-5 mb-5">
                <a href="#sobre">SOBRE</a>
                <a href="#profissional">PROFISSIONAL</a>
                <a href="#projetos">PROJETOS</a>
                <a href="#contato">CONTATO</a>
            </div>
        </div>
    </>
    )
  
}