import {AboutUs, HeaderAgape, HeroAgape, Products, Footer} from "./components/index.js";

const App = () => {
    return (
        <>
            <HeaderAgape />
            <main className="bg-agapeHeader">
                <HeroAgape/>
                <AboutUs/>
                <Products/>
                <Footer/>
            </main>
        </>
    )
}
export default App

