import {flowersHeader, footerCake, logoAgapeSello, whatsappIcon, igIcon, backgroundFooter} from "../assets/index.js"

const Footer = () => {
    return (
        <section className="max-w-screen-xl mx-auto relative overflow-hidden bg-agapeHeader px-6 py-20">
            <img
                src={backgroundFooter}
                alt="bgFooter"
                className="absolute h-full w-full pointer-events-none"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 font-poppins gap-10 mt-15 pb-10 object-cover relative">
                <div className="mx-auto">
                    <img src={flowersHeader} alt="flowers"
                         />
                    <img src={footerCake} alt="cakeFooter"
                         />
                </div>
                <div className="space-y-10 mx-auto">
                        <img src={logoAgapeSello} alt="logoSello"
                             className="mx-auto mt-30"/>
                        <h1 className="text-center font-light text-2xl sm:text-4xl text-ColorAgape">¡Visítanos en Redes sociales <br />
                            y ordena ahora!</h1>
                        <div className="flex justify-center gap-8 mt-4">
                            <img src={whatsappIcon} alt="WhatsApp" className="" />
                            <img src={igIcon} alt="Instagram" className="" />
                        </div>
                        <p className="mt-20 text-center font-light text-xl">© Ágape Repostería. All Rights Reserved.</p>
                </div>
            </div>
        </section>

    )
}
export default Footer
