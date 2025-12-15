import {nuestrosClientes, cuchareableText, cookiesText, cakesText,
    cuchareable, cookies, cakes, flowersHeader} from "../assets/index.js"

const Products = () => {
    return (
        <section className="bg-bg-primary relative font-poppins mt-[150px] mx-[auto] mb-20">
            <div className="absolute -top-40 left-1/2 -translate-x-1/2">
                <img src={flowersHeader}
                     className="h-[80px] md:h-[100px] lg:h-[120px] 2xl:h-[150px]" alt="Flowers"/>
            </div>

            <div className="col-span-2
                           flex justify-center gap-0 p-4">
                    <div className="flex flex-col items-start ml-10">
                        <h1 className="font-light text-center
                        text-3xl sm:text-4xl lg:text-5xl lg:mt-20 ">Los preferidos de</h1>
                        <img src={nuestrosClientes} alt="clientesText"
                             className="w-[80%] max-w-[500px] lg:w-[500px] -mt-5 z-10"/>
                    </div>
                </div>

            <div className="mt-16 grid lg:grid-cols-3 place-items-center gap-y-10">
                <div>
                    <img
                        className="-mb-40 rounded-base mx-auto z-10"
                        src={cuchareable}
                        alt="cuchareable"
                    />
                    <div className="bg-surface-light rounded-4xl w-[350px] flex flex-col items-center justify-between p-6 pt-2">
                        <img className="mt-35" src={cuchareableText} alt="cuchareableText" />
                        <p className="text-2xl text-white font-light text-center italic w-[300px]">
                            Postres suaves y cremosos listos para disfrutar a cucharadas.
                        </p>
                        <a
                            href="#"
                            className="rounded-4xl font-medium text-1xl px-4 py-2.5 bg-button-secondary text-surface-dark"
                        >
                            Ordenar ahora
                        </a>
                    </div>
                </div>
                <div>
                    <img
                        className="-mb-40 rounded-base mx-auto z-10"
                        src={cakes}
                        alt="cakes"
                    />
                    <div className="bg-surface-medium rounded-4xl w-[350px] flex flex-col items-center justify-between p-6 pt-2">
                        <img className="mt-35" src={cakesText} alt="cakesText" />
                        <p className="text-2xl text-white font-light text-center italic w-[300px]">
                            Tortas esponjosas con sabores clásicos y toques modernos.
                        </p>
                        <a
                            href="#"
                            className="rounded-4xl font-medium text-1xl px-4 py-2.5 bg-button-secondary text-surface-dark"
                        >
                            Ordenar ahora
                        </a>
                    </div>
                </div>
                <div>
                    <div>

                        <img
                            className="-mb-40 rounded-base mx-auto z-10"
                            src={cookies}
                            alt="cookies"
                        />
                        <div className="bg-surface-dark rounded-4xl w-[350px] flex flex-col items-center justify-between p-6 pt-2">
                            <img className="mt-35" src={cookiesText} alt="cookiesText" />
                            <p className="text-2xl text-white font-light text-center italic w-[300px]">
                                Galletas frescas, crujientes por fuera y suaves por dentro.
                            </p>
                            <a
                                href="#"
                                className="rounded-4xl font-medium text-1xl px-4 py-2.5 bg-button-secondary text-surface-dark"
                            >
                                Ordenar ahora
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Products
