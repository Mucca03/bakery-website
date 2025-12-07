import {flowersHeader, selloAgape, tortaAgapeA} from "../assets/index.js"

const AboutUs = () => {
    return (

        <section>
            <div className="relative bg-GreenAU font-poppins">
                <div className="bg-agapeHeader">
                    <svg className="absolute -top-20" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0 43.9999C106.667 43.9999 213.333 7.99994 320 7.99994C426.667 7.99994 533.333 43.9999 640 43.9999C746.667 43.9999 853.333 7.99994 960 7.99994C1066.67 7.99994 1173.33 43.9999 1280 43.9999C1386.67 43.9999 1440 19.0266 1440 9.01329V100H0V43.9999Z"
                            className="fill-GreenAU"></path>
                    </svg>
                </div>
                <div className="absolute right-[0px] z-10 top-[0px]">
                    <img src={tortaAgapeA} className="lg:w-[400px] 2xl:w-[620px]" alt="TortaAgape"/>
                </div>
                <div className="absolute 2xl:left-[1420px] lg:left-[1000px] z-10 lg:-top-15 2xl:top-[50px]">
                    <img src={selloAgape} className="w-[300px] h-auto" alt="selloAgape" />
                </div>

                <div className="grid 2xl:grid-cols-[150px_1fr_480px] lg:grid-cols-[150px_1fr_340px] gap-2">
                    <div className=""></div>
                    <div className="2xl:space-y-10 lg:space-y-8 mt-20">
                        <h1 className="2xl:text-7xl lg:text-5xl font-bold text-agapeText">
                            ¿Quienes somos?
                        </h1>

                        <p className="2xl:text-5xl/15 lg:text-3xl/10 text-ColorAgape
                        font-extralight italic">
                            En <b>Ágape</b>, somos más que una respostería <b>somos una
                            familia apasionada</b> por el arte de la reposteria
                            artesanal. Empezamos en 2022, y hoy nuestra tienda ha
                            sido un sueño hecho realidad, impulsado por el <b>amor a
                            la cocina</b> y el deseo de compartir momentos dulces
                            contigo. Comenzamos nuestra aventura con unos
                            deliciosos cupcakes y <b>hoy tenemos mucho más para ti</b>
                        </p>
                        <div className="space-x-10 mb-15">
                            <button
                                className="bg-buttomAgape
                            cursor-pointer rounded-full
                            px-[30px] 2xl:py-[10px] lg:py-[3px]
                            font-bold lg:text-2xl 2xl:text-4xl text-ColorAgape
                            text-center whitespace-nowrap
                            drop-shadow-md/50"
                            >
                                Ver más
                            </button>
                            <button
                                className="
                            cursor-pointer rounded-full
                            border-2
                            bg-GreenAU
                            px-[30px] 2xl:py-[10px] lg:py-[3px]
                            font-bold lg:text-2xl 2xl:text-4xl text-ColorAgape
                            text-center whitespace-nowrap
                            drop-shadow-md/50"
                            >
                                Contáctanos
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-gradient-to-b from-GreenAU to-agapeHeader h-[100px] 2xl:top-[800px] lg:top-[570px]"></div>
                <div className="absolute -bottom-15 lg:left-1/2 lg:-translate-x-1/2">
                    <img src={flowersHeader} className="2xl:h-[150px] lg:h-[120px]" alt="Flowers"/>
                </div>
            </div>
        </section>
    )
}

export default AboutUs