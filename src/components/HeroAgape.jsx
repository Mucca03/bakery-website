import logoAgape from "../assets/logoAgape.png";
import tortaAgape from "../assets/tortaAgape.png";

const HeroAgape = () => {
    return (
        <section className="bg-agapeHeader py-10">
            <div className="relative max-w-screen-xl mx-auto h-[500px] font-poppins">
                <img
                    src={logoAgape}
                    className="absolute z-10 top-[0px] left-[380px] w-[450px] h-auto"
                    alt="logo"
                />
                <img
                    src={tortaAgape}
                    className="absolute z-0 top-[50px] left-[350px] w-[550px] h-auto drop-shadow-cake"
                    alt="mockup"
                />
                <div
                    className="absolute top-[194px] left-[330px]
                     text-2xl font-bold text-ColorAgape"
                >
                    Pastel Velvet
                </div>
                <div
                    className="absolute top-[221px] left-[300px]
                     text-sm text-ColorAgape
                     backdrop-blur rounded-full px-[10px] py-[12px]
                     text-center w-[230px] font-extralight italic"
                >
                    Bizcocho esponjoso de cacao con crema de queso suave y un sello rojo irresistible
                </div>
                <div
                    className="absolute top-[365px] left-[765px]
                     text-2xl font-bold text-ColorAgape"
                >
                    12.500
                </div>
                <div
                    className="absolute top-[400px] left-[700px]
                     cursor-pointer rounded-full border-2 border-ColorAgape
                     backdrop-blur px-[16px] py-[8px]
                     font-bold text-2xl text-ColorAgape
                     text-center whitespace-nowrap"
                >
                    Ordena ahora
                </div>
            </div>
        </section>
    );
};
export default HeroAgape;
