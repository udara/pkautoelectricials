import HeroBox from "./HeroBox";
import config from "../config/index";
import Head from "next/head";
const Hero = () => {
    <Head>
        <link rel="preload" as="image" href="/hero.webp" />
    </Head>
    const renderedHeroBoxes = config.feature.map((item, index) => {
        return <HeroBox key={`herobox-${index}`} header={item.category} list={item.subServices} />
    });
    return (
        <div className={`w-full bg-hero bg-cover bg-center min-h-[calc(100vh-111px)]`}>
            <div className={`bg-[#000] bg-opacity-30 min-h-[calc(100vh-111px)]`}>
                <div
                    className={`mx-auto w-full px-6 py-10 md:py-15 lg:items-center max-w-screen-xl min-h-[calc(100vh-111px)]`}>
                    <div className={`flex items-start md:items-center gap-8`}>
                        <div className={`hidden md:block`}>
                            <img
                                src="/images/RAA-Approved-Compact.webp"
                                alt="PK Auto care"
                                className="mr-[8px]"
                                width="110"
                                height="4"
                            />
                        </div>
                        <h1 className={`text-4xl md:text-5xl text-white font-racing max-w-[600px]`}>
                            <span title={`RAA Approved Repairer`} className={`flex md:hidden text-black mr-3 mb-2 `}>
                                <imgx
                                    src="/images/RAA-Arrow.png"
                                    alt="PK Auto care"
                                    className="mr-[8px]"
                                    width="25"
                                    height="4"
                                /> RAA <span className={`text-raaYellow underline ml-2`}>Approved</span></span>  Auto Electrical, Mechanical and Air Conditioning Services</h1>
                    </div>
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