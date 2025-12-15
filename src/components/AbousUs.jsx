import {selloAgape, tortaAgapeA} from "../assets/index.js"

const AboutUs = () => {
    return (
        <section>
            <div className="relative bg-bg-secondary font-poppins">
                <div className="relative">
                    <div className="bg-bg-secondary"></div>
                    <svg
                        className="absolute"
                        viewBox="0 0 1440 100"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            fill="currentColor"
                            className="text-bg-primary"
                            fillRule="evenodd"
                            d="M0 0H1440V100H0V0Z M0 43.9999 C106.667 43.9999 213.333 7.99994 320 7.99994 C426.667 7.99994 533.333 43.9999 640 43.9999 C746.667 43.9999 853.333 7.99994 960 7.99994 C1066.67 7.99994 1173.33 43.9999 1280 43.9999 C1386.67 43.9999 1440 19.0266 1440 9.01329V100H0V43.9999Z"/>
                    </svg>
                </div>
                <div className="hidden lg:block absolute right-0 top-10 z-10">
                    <div className="relative lg:w-[400px] 2xl:w-[620px]">
                        <img
                            src={tortaAgapeA}
                            alt="TortaAgape"
                            className="w-full h-auto"
                        />
                        <img
                            src={selloAgape}
                            alt="SelloAgape"
                            className="absolute top-[10px] lg:left-[30px] 2xl:left-[150px]
                            w-[210px] lg:w-[260px] 2xl:w-[310px]"/>
                    </div>
                </div>

                <div className="grid 2xl:grid-cols-[150px_1fr_480px]
                lg:grid-cols-[150px_1fr_340px] gap-3
                px-5">
                    <div className=""></div>
                    <div className="2xl:space-y-10 lg:space-y-8 lg:mt-20">
                        <h1 className="text-2xl 2xl:text-7xl lg:text-5xl font-bold text-accent-text mt-20">
                            ¿Quienes somos?
                        </h1>

                        <p className="text-base/7
                        md:text-lg/8 2xl:text-5xl/15 lg:text-3xl/10 text-primary-dark
                        font-extralight italic">
                            En <b>Ágape</b>, somos más que una respostería <b>somos una
                            familia apasionada</b> por el arte de la reposteria
                            artesanal. Empezamos en 2022, y hoy nuestra tienda ha
                            sido un sueño hecho realidad, impulsado por el <b>amor a
                            la cocina</b> y el deseo de compartir momentos dulces
                            contigo. Comenzamos nuestra aventura con unos
                            deliciosos cupcakes y <b>hoy tenemos mucho más para ti</b>
                        </p>
                        <div className="space-x-10 mb-5 mt-3">
                            <button
                                className="bg-button-primary
                            cursor-pointer rounded-full
                            px-[30px] 2xl:py-[10px] lg:py-[3px]
                            font-bold lg:text-2xl 2xl:text-4xl text-primary-dark
                            text-center whitespace-nowrap
                            drop-shadow-md/50"
                            >
                                Ver más
                            </button>
                            <button
                                className="
                            cursor-pointer rounded-full
                            border-2
                            bg-bg-secondary
                            px-[30px] 2xl:py-[10px] lg:py-[3px]
                            font-bold lg:text-2xl 2xl:text-4xl text-primary-dark
                            text-center whitespace-nowrap
                            drop-shadow-md/50"
                            >
                                Contáctanos
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-gradient-to-b from-bg-secondary to-bg-primary h-[100px] 2xl:top-[800px] lg:top-[570px]"></div>
            </div>
        </section>
    )
}

export default AboutUs