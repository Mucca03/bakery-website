import flowersHeader from "../assets/headerAgape.png";
import selloAgape from "../assets/selloAgape.png"
import tortaAgapeA from "../assets/tortaAgapeA.png"

const AboutUs = () => {
    return (
        
        <section>
                      
            {/*bg-gradient-to-b from-GreenAU to-agapeHeader*/}
            <div className="relative bg-GreenAU font-poppins h-[850px]">
                <div className="bg-agapeHeader">
                <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0 43.9999C106.667 43.9999 213.333 7.99994 320 7.99994C426.667 7.99994 533.333 43.9999 640 43.9999C746.667 43.9999 853.333 7.99994 960 7.99994C1066.67 7.99994 1173.33 43.9999 1280 43.9999C1386.67 43.9999 1440 19.0266 1440 9.01329V100H0V43.9999Z"
                        className="fill-GreenAU text-gray-400"></path>
                </svg>
            </div>  
                <div className="absolute left-[1300px] z-10 top-[0px]">
                    <img src={tortaAgapeA} className="w-[600px] h-auto" alt="TortaAgape"/>
                </div>
                <div className="absolute left-[1420px] z-10 top-[50px]">
                    <img src={selloAgape}className="w-[300px] h-auto"/>
                </div>
                <div
                    className="absolute top-[160px] left-[150px]
                     text-7xl font-bold text-agapeText"
                >
                    ¿Quienes somos?
                </div>
                <div
                    className="absolute top-[260px] left-[150px]
                    text-5xl/15 text-ColorAgape
                    w-[1250px] font-extralight italic"
                >
                    En <b>Ágape</b>, somos más que una respostería <b>somos una 
                        familia apasionada</b> por el arte de la reposteria 
                        artesanal. Empezamos en 2022, y hoy nuestra tienda ha 
                        sido un sueño hecho realidad, impulsado por el <b>amor a 
                            la cocina</b> y el deseo de compartir momentos dulces 
                            contigo. Comenzamos nuestra aventura con unos 
                            deliciosos cupcakes y <b>hoy tenemos mucho más para ti</b>
                </div>
                <div
                    className="absolute top-[770px] left-[150px] bg-buttomAgape
                    cursor-pointer rounded-full
                    px-[30px] py-[5px]
                    font-bold text-3xl text-ColorAgape
                    text-center whitespace-nowrap
                    drop-shadow-md/50"
                >
                    Ver más
                </div>
                <div
                    className="absolute top-[770px] left-[400px]
                    cursor-pointer rounded-full
                    border-2
                    bg-GreenAU
                    px-[30px] py-[5px]
                    font-bold text-3xl text-ColorAgape
                    text-center whitespace-nowrap
                    drop-shadow-md/50"
                >
                    Contáctanos
                </div>
                <div className="absolute bg-gradient-to-b from-GreenAU to-agapeHeader w-full h-[195px] top-[830px]"></div>
                <div className="absolute left-[810px] top-[950px]">
                    <img src={flowersHeader} className="h-20 sm:h-35" alt="Flowers"/>
                </div>
            </div>
        </section>
    )
}

export default AboutUs