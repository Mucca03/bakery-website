import nuestrosClientes from "../assets/nuestrosClientes.png"
import cuchareableText from "../assets/cuchareableText.png"
import cookiesText from "../assets/cookiesText.png"
import cakesText from "../assets/cakesText.png"
import cuchareable from "../assets/cuchareable.png"
import cookies from "../assets/cookies.png"
import cakes from "../assets/cakes.png"


const Products = () => {
    return (
        <section className="bg-agapeHeader font-poppins mt-[150px] mx-[100px] h-[900px]">
            <div className="h-[299px] grid grid-cols-3 gap-10">
                <div className="col-span-3 col-start-2
                        flex flex-col gap-0 p-4">
                        <h1 className="font-light text-4xl">Los preferidos de</h1>
                        <img src={nuestrosClientes} alt="clientesText"
                        className="w-[500px] -mt-5 z-10"/>
                </div>
                    <div
                        className="bg-card1 block max-w-sm p-6 rounded-4xl rounded-base">
                        <a href="#">
                            <img className="rounded-base" src={cuchareable} alt="cuchareable"/>
                        </a>

                        <a href="#">
                            <img src={cuchareableText} alt="cuchearableText"/>
                        </a>
                        <p className="ml-6 mb-6 text-2xl text-white font-light text-center italic w-[250px]">Postres suaves y cremosos listos para disfrutar
                            a cucharadas.</p>
                        <a href="#"
                           className="rounded-4xl
                           ml-18
                           font-medium text-1xl
                           px-4 py-2.5
                           bg-buttonO
                           text-card3">
                            Ordenar ahora
                        </a>
                    </div>
                    <div
                        className="bg-card2 block max-w-sm p-6 rounded-4xl rounded-base">
                        <a href="#">
                            <img className="rounded-base" src={cakes} alt="cakes"/>
                        </a>
                        <a href="#">
                            <img className="ml-15" src={cakesText} alt="cakesText"/>
                        </a>
                        <p className="ml-6 mb-6 text-2xl text-white font-light text-center italic w-[250px]"> Tortas esponjosas
                            con sabores clásicos y toques modernos.</p>
                        <a href="#"
                           className="rounded-4xl
                           ml-18
                           font-medium text-1xl
                           px-4 py-2.5
                           bg-buttonO
                           text-card3">
                            Ordenar ahora
                        </a>
                </div>
                    <div
                        className="bg-card3 block max-w-sm p-6 rounded-4xl border-default rounded-base">
                        <a href="#">
                            <img className="rounded-base" src={cookies} alt="cookies"/>
                        </a>
                        <a href="#">
                            <img className="ml-10" src={cookiesText} alt="cookiesText"/>
                        </a>

                        <p className="ml-6 mb-6 text-2xl text-white font-light text-center italic w-[250px]">Galletas frescas,
                            crujientes por fuera
                            y suaves por dentro.</p>

                        <a href="#"
                           className="rounded-4xl
                           ml-16
                           font-medium text-1xl
                           px-4 py-2.5
                           bg-buttonO
                           text-card3">
                            Ordenar ahora
                        </a>
                </div>

            </div>
        </section>

    )
}
export default Products
