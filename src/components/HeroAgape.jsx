import {logoAgape, tortaAgape} from "../../public/assets/index.js"

const HeroAgape = () => {
    return (
        <section className="bg-bg-primary py-15 mb-10">
            <div className="relative max-w-screen-xl mx-auto flex justify-center font-poppins">
                <img
                    src={logoAgape}
                    className="absolute z-10 left-1/2 -translate-x-1/2
                     w-[50%] max-w-[500px] h-auto"
                    alt="logo"
                />
                <img
                    src={tortaAgape}
                    className="z-0
                    w-[80%] max-w-[850px] h-auto"
                    alt="mockup"
                />

                <div className="absolute inset-0 flex flex-col justify-center z-11">
                    <div className="absolute left-[5%] top-[25%] max-w-[450px] w-[40%]">
                        <h1 className="text-lg sm:text-3xl lg:text-4xl  font-bold text-primary-dark">Pastel Velvet</h1>
                        <p
                            className="
                            text-xs sm:text-base lg:text-2xl text-text-danger
                            backdrop-blur rounded-full px-4 py-2
                            font-light italic
                            border-1 border-gray-50"
                        >
                            Bizcocho esponjoso de cacao con crema de queso suave y un sello rojo irresistible
                        </p>
                    </div>

                    <div className="absolute right-[15%] bottom-[25%] flex flex-col items-end
                        ">
                        <h1
                            className="text-2xl md:text-3xl lg:text-4xl
                            mr-[30%] font-bold text-primary-dark">
                            12.500
                        </h1>
                        <button className="cursor-pointer rounded-full border-2 border-primary-dark
                        backdrop-blur font-bold text-base sm:text-xl md:text-3xl lg:text-4xl
                        px-1 py-1
                        sm:px-2 sm:py-2
                        md:px-4 md:py-2
                        lg:px-6 lg:py-3
                        text-primary-dark
                        text-center whitespace-nowrap"
                        >
                            Ordena ahora
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};
export default HeroAgape;
