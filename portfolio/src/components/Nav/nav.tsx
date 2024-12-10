import Link from "next/link"

export default function Nav() {
    return(
        <>
        <div className="flex flex-wrap gap-24 justify-center text-xl bg-cinza text-bege xl:justify-between">
            <div className="mt-10 xl:mt-10 xl:ml-5">
                <button>PORTUGUÊS</button>
            </div>
            <div className="flex flex-wrap justify-center gap-24 mt-10 mb-5 xl:mr-5">
                <Link href="/">HOME</Link>
                <Link href="/#sobre">SOBRE</Link>
                <Link href="/#projetos">PROJETOS</Link>
                <Link href="/#academico">ACADÊMICO</Link>
                <Link href="/#contato">CONTATO</Link>
            </div>
        </div>
    </>
    )
  
}