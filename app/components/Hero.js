import HeroBox from "./HeroBox";
import config from "../config/index"
import Image from "next/image";
const Hero = () => {

    const renderedHeroBoxes = config.feature.map((item,index) => {
        return <HeroBox key={`herobox-${index}`} header={item.category} list={item.subServices}/>
    });
    return (
        <div className={`w-full bg-hero bg-cover bg-center min-h-[calc(100vh-111px)]`}>
            <div className={`bg-[#000] bg-opacity-30 min-h-[calc(100vh-111px)]`}>
                <div
                    className={`mx-auto w-full px-6 py-10 md:py-15 lg:items-center max-w-screen-xl min-h-[calc(100vh-111px)]`}>
                    <div className={`flex items-start md:items-center gap-8`}>
                        <div className={`hidden md:block`}>
                            <Image

                                src="/images/RAA-Approved-Compact.png"
                                alt="PK Auto care"
                                placeholder="blur"
                                className={""}
                                width={110}
                                height={4}
                                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..." // Base64-encoded LQIP image
                                priority
                            />
                        </div>
                        <h1 className={`text-4xl md:text-5xl text-white font-racing max-w-[600px]`}>
                            <span title={`RAA Approved Repairer`} className={`flex md:hidden text-black mr-3 mb-2 `}>
                                <Image
                                src="/images/RAA-Arrow.png"
                                alt="PK Auto care"
                                placeholder="blur"
                                className={"mr-[8px]"}
                                width={25}
                                height={4}
                                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..." // Base64-encoded LQIP image
                                priority
                            /> RAA <span className={`text-raaYellow underline ml-2`}>Approved</span></span>  Mechanical Electrical and Air Conditioning Engineers</h1>
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