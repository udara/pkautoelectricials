import React, {useState} from "react";
import Image from 'next/image'
import Link from 'next/link'
import BurgerMenu from "./BurgerMenu";
import config from '../config'

const Nav = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleIsVisible = () => {
        setIsVisible(!isVisible);
    };
    return (
        <>
            <nav
                className="bg-charcoal dark:bg-charcoal fixed w-full z-20 top-0 start-0 dark:border-gray-600">
                <div className={`bg-crimsonFlame text-xl justify-center flex items-center gap-3 py-2 text-white h-10 text-center`}>
                    <Image
                        src="/images/location-nav.png"
                        alt="PK Auto care"
                        placeholder="blur"
                        width={25}
                        height={25}
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..." // Base64-encoded LQIP image
                        priority
                    />
                    {config.address}
                </div>
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div className={"px-4 py-3 bg-charcoal rounded-xl"}>
                        <Link href={'/'}>
                            <Image
                                src="/images/logo.png"
                                alt="PK Auto care"
                                placeholder="blur"
                                width={150}
                                height={50}
                                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..." // Base64-encoded LQIP image
                                priority
                            />
                        </Link>
                    </div>
                    <div
                        className={`inline-flex items-center p-2 md:hidden focus:outline-none focus:ring-0 `}>
                        <BurgerMenu toggleIsVisible={toggleIsVisible}/>
                    </div>
                    <div className={`w-full ${isVisible ? null : 'hidden'} md:block md:w-auto`}>
                        <ul className="font-medium text-2xl md:text-xl flex flex-col py-4 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
                            <li>
                                <Link href={'/'}
                                      className="block py-3 md:py-0 text-white font-roboto px-3 rounded md:p-0">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href={'/auto-care-adelaide/services'}
                                      className="block py-3 md:py-0 text-white font-roboto px-3 rounded md:p-0">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href={'/#about'}
                                      className="block py-3 md:py-0 text-white font-roboto px-3 rounded md:p-0">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href={'/#faqs'}
                                      className="block py-3 md:py-0 text-white font-roboto px-3 rounded md:p-0">
                                    FAQs
                                </Link>
                            </li>
                            <li>
                                <Link href={`tel:${config.telephone}`}
                                      className="flex gap-3 py-3 md:py-0 text-white font-roboto px-3 rounded md:p-0">
                                    <Image
                                        src="/images/telephone-nav.svg"
                                        alt="PK Auto care"
                                        placeholder="blur"
                                        width={25}
                                        height={25}
                                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..." // Base64-encoded LQIP image
                                        priority
                                    />{config.telephone}
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            <div className={`h-[150px]`}></div>
        </>
    )
}

export default Nav;