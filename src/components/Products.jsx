import {nuestrosClientes, cuchareableText, cookiesText, cakesText, cuchareable, cookies, cakes} from "../assets/index.js"

const Products = () => {
    return (
        <section className="bg-agapeHeader font-poppins mt-[150px] mx-[100px] h-[900px]">
            <div className="grid grid-cols-3">
                <div></div>
                <div className="col-span-2
                            flex flex-col gap-0 p-4">
                    <h1 className="font-light text-4xl">Los preferidos de</h1>
                    <img src={nuestrosClientes} alt="clientesText"
                         className="w-[500px] -mt-5 z-10"/>
                </div>
            </div>

            <div className="mt-16 grid grid-cols-3 place-items-center ">
                <img
                    className="-mb-40 rounded-base mx-auto z-10"
                    src={cuchareable}
                    alt="cuchareable"
                />
                <img
                    className="-mb-40 rounded-base mx-auto z-10"
                    src={cakes}
                    alt="cakes"
                />
                <img
                    className="-mb-40 rounded-base mx-auto z-10"
                    src={cookies}
                    alt="cookies"
                />
            </div>

            <div className="grid grid-cols-3 mt-0 place-items-center">

                <div className="bg-card1 rounded-4xl w-[350px] h-[400px] flex flex-col items-center justify-between p-6 pt-2">
                    <img className="mt-35" src={cuchareableText} alt="cuchareableText" />
                    <p className="text-2xl text-white font-light text-center italic w-[250px]">
                        Postres suaves y cremosos listos para disfrutar a cucharadas.
                    </p>
                    <a
                        href="#"
                        className="rounded-4xl font-medium text-1xl px-4 py-2.5 bg-buttonO text-card3"
                    >
                        Ordenar ahora
                    </a>
                </div>

                <div className="bg-card2 rounded-4xl w-[350px] h-[400px] flex flex-col items-center justify-between p-6 pt-2">
                    <img className="mt-35" src={cakesText} alt="cakesText" />
                    <p className="text-2xl text-white font-light text-center italic w-[250px]">
                        Tortas esponjosas con sabores clásicos y toques modernos.
                    </p>
                    <a
                        href="#"
                        className="rounded-4xl font-medium text-1xl px-4 py-2.5 bg-buttonO text-card3"
                    >
                        Ordenar ahora
                    </a>
                </div>

                <div className="bg-card3 rounded-4xl w-[350px] h-[400px] flex flex-col items-center justify-between p-6 pt-2">
                    <img className="mt-35" src={cookiesText} alt="cookiesText" />
                    <p className="text-2xl text-white font-light text-center italic w-[250px]">
                        Galletas frescas, crujientes por fuera y suaves por dentro.
                    </p>
                    <a
                        href="#"
                        className="rounded-4xl font-medium text-1xl px-4 py-2.5 bg-buttonO text-card3"
                    >
                        Ordenar ahora
                    </a>
                </div>
            </div>

        </section>

    )
}
export default Products
