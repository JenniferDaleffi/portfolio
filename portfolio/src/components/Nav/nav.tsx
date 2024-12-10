import Link from "next/link"

export default function Nav() {
    return(
        <>
        <div className="flex justify-between text-xl bg-cinza text-bege">
            <div className="mt-5 ml-10">
                <button>PORTUGUÊS</button>
            </div>
            <div className="mr-10 flex gap-24 mt-5 mb-5">
                <Link href="/">SOBRE</Link>
                <Link href="/#profissional">PROFISSIONAL</Link>
                <Link href="/#projetos">PROJETOS</Link>
                <Link href="/#contato">CONTATO</Link>
            </div>
        </div>
    </>
    )
  
}