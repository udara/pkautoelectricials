import HeroBox from "./HeroBox";
import config from "../config/index"
const Hero = () => {

    const renderedHeroBoxes = config.feature.map((item => {
        return <HeroBox header={item.category} list={item.subServices}/>
    }))
    return (
        <div className={`w-full bg-hero bg-cover bg-center min-h-[calc(100vh-111px)]`}>
            <div className={`bg-[#000] bg-opacity-30 min-h-[calc(100vh-111px)]`}>
                <div
                    className={`mx-auto w-full px-6 py-10 md:py-15 lg:items-center max-w-screen-xl min-h-[calc(100vh-111px)]`}>
                    <h1 className={`pb-6 text-4xl md:text-5xl text-white font-racing max-w-[600px]`}>Mechanical
                        Electrical and Air Conditioning Engineers</h1>
                    <div
                        className="grid mt-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-white">
                        {renderedHeroBoxes}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;