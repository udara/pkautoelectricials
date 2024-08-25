import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="bg-gray-50 border-t border-gray-100 mt-10 dark:border-0 dark:bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="lg:flex md:justify-between">
                    <div className="mb-9 mt-3 lg:mb-0 lg:mt-0">
                        <Link href={'/'}>
                            <Image
                                src="/images/logo.png"
                                alt="PK Auto care"
                                placeholder="blur"
                                width={125}
                                height={50}
                                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..." // Base64-encoded LQIP image
                                priority
                            />
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-header uppercase dark:text-white">Auto care Adelaide</h2>
                            <ul className="text-para font-light">
                                <li className={`mb-2`}>
                                    <Link href="/auto-care-adelaide/services/mechanical/mechanical-repairs-maintenance" className="hover:underline">Vehicle Maintenance</Link>
                                </li>
                                <li className={`mb-2`}>
                                    <Link href="/auto-care-adelaide/services/mechanical/log-book-servicing" className="hover:underline">Log Book Servicing
                                        Services</Link>
                                </li>
                                <li className={`mb-2`}>
                                    <Link href="/auto-care-adelaide/services/electrical/truck-trailer-auto-electrical-services#electric-brakes-repair-installation" className="hover:underline">Engine Repair and Services</Link>
                                </li>
                                <li className={`mb-2`}>
                                    <Link href="/services/specialty-services" className="hover:underline">Specialty
                                        Services</Link>
                                </li>
                                <li className={`mb-2`}>
                                    <Link href="/services/fleet-management" className="hover:underline">Fleet
                                        Management</Link>
                                </li>
                                <li className={`mb-2`}>
                                    <Link href="/services/battery" className="hover:underline">Battery Care &
                                        Supply</Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-header uppercase dark:text-white">Services</h2>
                            <ul className="text-para font-light">
                                <li className={`mb-2`}>
                                    <Link href="/services/mechanical" className="hover:underline">Mechanical
                                        Services</Link>
                                </li>
                                <li className={`mb-2`}>
                                    <Link href="/services/electrical" className="hover:underline">Auto Electrical
                                        Services</Link>
                                </li>
                                <li className={`mb-2`}>
                                    <Link href="/services/air-conditioning" className="hover:underline">Auto HVAC
                                        Engineering</Link>
                                </li>
                                <li className={`mb-2`}>
                                    <Link href="/services/specialty-services" className="hover:underline">Specialty
                                        Services</Link>
                                </li>
                                <li className={`mb-2`}>
                                    <Link href="/services/fleet-management" className="hover:underline">Fleet
                                        Management</Link>
                                </li>
                                <li className={`mb-2`}>
                                    <Link href="/services/battery" className="hover:underline">Battery Care &
                                        Supply</Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-header uppercase dark:text-white">Contact</h2>
                            <ul className="text-para font-light">
                                <li className="mb-4">
                                    <Link href="tel:0412241341" className="flex gap-3">
                                        <Image
                                            src="/images/telephone.png"
                                            alt="PK Auto care"
                                            placeholder="blur"
                                            width={25}
                                            height={25}
                                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..." // Base64-encoded LQIP image
                                            priority
                                        />0412 241 341
                                    </Link>
                                </li>
                                <li className="flex gap-3 mb-4">
                                    <Image
                                        src="/images/location.png"
                                        alt="PK Auto care"
                                        placeholder="blur"
                                        width={25}
                                        height={25}
                                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..." // Base64-encoded LQIP image
                                        priority
                                    />
                                    <address>670 Port Rd, Beverley SA 5009</address>
                                </li>
                                <li className="flex gap-3 mb-4">
                                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                         fill="#626262" viewBox="0 0 8 19">
                                        <path fill-rule="evenodd"
                                              d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                    <Link rel="nofollow" target="_blank"
                                          href="https://www.facebook.com/profile.php?id=100060388285482">
                                        Facebook page
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a
              href="https://flowbite.com/" className="hover:underline">PK Auto Care</a>. All Rights Reserved.
          </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;