import {Racing_Sans_One, Roboto} from 'next/font/google';
import "../globals.css";
import config from '../config'
import Image from "next/image";
import Footer from "../components/Footer";

const racing = Racing_Sans_One({subsets: ['latin'], variable: '--font-racing-sans-one', weight: ['400']});
const roboto = Roboto({
    subsets: ['latin'],
    variable: '--font-roboto',
    weight: ['100', '300', '400', '500', '700', '900']
});

export default function RootLayout({children}) {
    return (
        <div
            className={`mx-auto bg-slantedGrey w-full px-6 py-10 md:py-15 lg:items-center max-w-screen-xl min-h-[calc(100vh-111px)]`}
        >
            <div className="lg:flex items-stretch gap-10">
                <div className={`w-full lg:w-5/6`}>
                    {children}
                </div>
                <div className="hidden lg:flex  items-stretch">
                    <div className={`w-[1px] my-auto h-4/5 opacity-10 border border-para`}></div>
                </div>
                <div className={`w-full h-full hidden lg:block lg:w-2/5`}>
                    <div className={`text-xl text-charcoal mt-10 mb-3 font-racing text-header `}>
                        Call us for a quote
                    </div>
                    <p className={`text-xl flex gap-3 font-normal font-light text-para`}>
                        <Image
                            src="/images/telephone.png"
                            alt="PK Auto care"
                            placeholder="blur"
                            className={"opacity-50"}
                            width={25}
                            height={25}
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..." // Base64-encoded LQIP image
                            priority
                        />
                        {config.telephone}
                    </p>
                    <div className={`text-xl text-charcoal mt-10 mb-3 font-racing text-header `}>
                        Visit us
                    </div>
                    <div className={`flex items-start`}>
                        <Image
                            src="/images/location.png"
                            alt="PK Auto care"
                            placeholder="blur"
                            className={"opacity-50"}
                            width={25}
                            height={25}
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..." // Base64-encoded LQIP image
                            priority
                        />
                        <p className={`text-xl ml-3 font-normal text-para mb-3`}>
                            {config.address}
                        </p>
                    </div>

                    <Image
                        src="/images/RAA-Approved.png"
                        alt="RAA-Approved Repairer - Mechanical, Electrical and Air Conditioning"
                        className={`mt-6`}
                        placeholder="blur"
                        width={200}
                        height={50}
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..." // Base64-encoded LQIP image
                        priority
                    />
                </div>
            </div>
        </div>
    );
}

