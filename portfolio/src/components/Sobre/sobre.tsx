import Image from "next/image"
import JenniFoto2 from "../../../public/jennifer2.jpeg"
import Java from "../../../public/java.png"
import Docker from "../../../public/docker.png"
import Oracle from "../../../public/oracle.png"
import Python from "../../../public/python.png"
import Play from "../../../public/play.png"

export default function Sobre(){
    return(
        <div className="bg-bege flex justify-around items-center h-screen text-cinza">
            <div>
                <Image width={400} src={JenniFoto2} alt="foto da jennifer"></Image>
            </div>
            <div className="w-2/4">
                <div className="flex items-center gap-2">
                <Image src={Play} alt="play"></Image>
                <h2 className="text-xl">Sobre Mim</h2>
                </div>
                <h1 className="text-3xl">Quem sou eu</h1>
                <p className="mt-20 mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. In non blanditiis aliquid magni voluptate quaerat fuga dolorem autem, quam laudantium. Soluta vitae, voluptate, a sint laborum ratione perspiciatis, itaque amet earum esse quidem quod dolor provident sunt. A velit, ut sed optio ad ab hic sunt iure odio architecto pariatur expedita explicabo obcaecati corrupti cupiditate quam perspiciatis ratione quidem nam fugit consequuntur. Dolore saepe, error accusamus cum voluptatum sed at numquam corrupti facere soluta obcaecati deleniti officia eveniet eligendi iste neque illo non officiis facilis! Quo dolor sed repellat minima impedit illo cum consequatur ut asperiores esse. Molestias a adipisci commodi nulla sit iure ratione ad at odit eaque. Vel commodi dolor, pariatur deleniti aliquid molestias dolorem minus sapiente omnis officiis autem recusandae ut soluta voluptas esse doloremque nam quod aut quisquam. Omnis eveniet magnam voluptatem at adipisci pariatur. Quos repellat consequatur minus corrupti exercitationem illo harum vero necessitatibus praesentium?</p>
                <div className="flex gap-5">
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