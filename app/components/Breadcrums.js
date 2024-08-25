import Link from 'next/link';
import Image from 'next/image'

const Breadcrums = ({crum}) => {
    let link = '';
    const pathArray = crum.split('/').filter(Boolean); // Split and filter empty strings
    const renderedBreadcrum = pathArray.map((item, index) => {
        link = `${link}/${item}`;
        return (
            <li key={index} className={`inline-flex ${index < 2 ? 'hidden md:inline-flex' : null}  items-center`}>
                {index > 0 && ( // Only show the separator icon after the first item
                    <div className={`${index < 2 ? 'hidden md:block' : null}`}>
                        <Image
                            src="/images/double_arrow.svg"
                            alt="Vercel Logo"
                            placeholder="blur"
                            width={25}
                            height={25}
                            className={`mr-1`}
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..." // Base64-encoded LQIP image
                            priority
                        />
                    </div>
                )}
                <Link href={link}
                      className="inline-flex items-center text-[10px] md:text-sm ">
                    {item.toUpperCase()}
                </Link>
            </li>
        );
    });

    return (
        <nav className="flex text-charcoal" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                {/* Home Icon as the first breadcrumb */}
                <li className="inline-flex items-center">
                    <Link href="/" className="inline-flex text-sm items-center text-2xl">
                        <Image
                            src="/images/home.svg"
                            alt="Vercel Logo"
                            placeholder="blur"
                            width={20}
                            height={20}
                            className={`mr-1`}
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..." // Base64-encoded LQIP image
                            priority
                        />

                        <Image
                            src="/images/double_arrow.svg"
                            alt="Vercel Logo"
                            placeholder="blur"
                            width={25}
                            height={25}
                            className={`ml-1`}
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..." // Base64-encoded LQIP image
                            priority
                        />
                    </Link>
                </li>
                {renderedBreadcrum}
            </ol>
        </nav>
    );
}

export default Breadcrums;
