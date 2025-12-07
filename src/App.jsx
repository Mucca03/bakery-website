import {AboutUs, HeaderAgape, HeroAgape, Products} from "./components/index.js";

const App = () => {
    return (
        <>
            <HeaderAgape />
            <main className="bg-agapeHeader">
                <HeroAgape />
                <AboutUs />
                <Products />
            </main>
        </>
    )
}
export default App

