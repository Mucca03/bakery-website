import {logoAgape, tortaAgape} from "../assets/index.js"

const HeroAgape = () => {
    return (
        <section className="bg-agapeHeader py-15 mb-10">
            <div className="relative max-w-screen-xl mx-auto h-[800px] font-poppins">
                <img
                    src={logoAgape}
                    className="absolute z-10 left-1/2 -translate-x-1/2 w-[500px] h-auto"
                    alt="logo"
                />
                <img
                    src={tortaAgape}
                    className="
                    absolute z-0 left-1/2 -translate-x-1/2
                    w-[850px] h-auto
                    "
                    alt="mockup"
                />
                <div
                    className="
                    absolute left-1/2 bottom-[0px]
                    -translate-x-1/2
                    w-[350px] h-[40px]
                    bg-black/40
                    rounded-full blur-2xl
                    z-0"
                ></div>
                <div
                    className="absolute top-[244px] left-[140px]
                     text-4xl font-bold text-ColorAgape"
                >
                    Pastel Velvet
                </div>
                <div
                    className="absolute top-[280px] left-[70px]
                     text-2xl text-redText
                     backdrop-blur rounded-full px-[20px] py-[12px]
                     w-[450px] font-light italic
                     border-1 border-gray-50"
                >
                    Bizcocho esponjoso de cacao con crema de queso suave y un sello rojo irresistible
                </div>
                <div
                    className="absolute top-[515px] left-[870px]
                     text-4xl font-bold text-ColorAgape"
                >
                    12.500
                </div>
                <div
                    className="absolute top-[560px] left-[770px]
                     cursor-pointer rounded-full border-2 border-ColorAgape
                     backdrop-blur px-[25px] py-[15px]
                     font-bold text-4xl text-ColorAgape
                     text-center whitespace-nowrap"
                >
                    Ordena ahora
                </div>
            </div>
        </section>
    );
};
export default HeroAgape;
