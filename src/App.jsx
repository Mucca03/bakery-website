import {AboutUs, HeaderAgape, HeroAgape, Test} from "./components/index.js";

const App = () => {
    return (
        <>
            <HeaderAgape />
            <main className="bg-agapeHeader">
                <HeroAgape />
                <AboutUs />
                <Test />

            </main>
        </>
    )
}
export default App

