import logoAgape from "../assets/logoAgape.png";
import tortaAgape from "../assets/tortaAgape.png"

const HeroAgape = () => {
    return (
        <section className="bg-agapeHeader">
            <div className="grid lg:py-2 lg:px-10 grid-cols-6 grid-rows-3">
                <div className="relative rounded-full col-start-2 col-span-4">
                    <img        src={`${logoAgape}`}
                                className="absolute z-1 top-4 w-120 h-auto left-1/5"
                                alt="logo"
                    />
                    <img        src={`${tortaAgape}`}
                                className="absolute lg:left-10 lg:w-180 h-auto drop-shadow-cake z-0"
                                alt="mockup"
                    />
                </div>

                <div className="relative rounded-full col-start-2 row-start-2 py-10 z-2">
                    <h2 className=" text-2xl font-bold px-5 text-ColorAgape">Pastel Velvet</h2>
                    <p className="text-sm text-ColorAgape
                       backdrop-blur rounded-full py-2
                       text-center w-[200px]">
                        Bizcocho esponjoso de cacao con crema de queso suave y un sello rojo irresistible
                    </p>
                </div>
                <div className="relative rounded-full col-start-4 px-35 row-start-3 z-2">
                    <h1 className=" text-2xl font-bold px-13 text-ColorAgape">12.500</h1>
                    <div className="absolute
                        cursor-pointer rounded-full border-2 border-colorAgape
                         backdrop-blur px-8 py-5 font-bold text-lg
                         text-ColorAgape text-center whitespace-nowrap">
                        Ordena ahora
                    </div>
                </div>
            </div>
        </section>
    )
}
export default HeroAgape
