import config from "../../../config";
import Link from 'next/link';
import Image from 'next/image';
import Breadcrums from "../../../components/Breadcrums";

// This function generates the static paths for each service slug
export async function generateStaticParams() {
    const paths = config.services.map(service => ({
        slug: service.slug,
    }));

    return paths;
}

// This function generates dynamic metadata for the page
export async function generateMetadata({ params }) {
    const service = config.services.find((service) => service.slug === params.slug);

    if (!service) {
        return {
            title: "Service Not Found - PK Auto Care",
            description: "Service not found. Please check the URL or go back to the homepage.",
        };
    }

    return {
        title: `${service.categoryDisplayName} Services in Adelaide - PK Auto Care`,
        description: `Explore our ${service.categoryDisplayName.toLowerCase()} services in Adelaide. We provide top-notch ${service.categoryDisplayName.toLowerCase()} services for all your automotive needs.`,
        openGraph: {
            title: `${service.categoryDisplayName} Services in Adelaide - PK Auto Care`,
            description: `Explore our ${service.categoryDisplayName.toLowerCase()} services in Adelaide. We provide top-notch ${service.categoryDisplayName.toLowerCase()} services for all your automotive needs.`,
            url: `https://yourwebsite.com/auto-care-adelaide/services/${service.slug}`,
            images: [
                {
                    url: `/images/services/${service.image || 'default.jpg'}`,
                    width: 800,
                    height: 600,
                    alt: `${service.categoryDisplayName} Adelaide`,
                },
            ],
        },
    };
}

// This component fetches and displays the service data
const Services = ({ params }) => {
    const service = config.services.find((service) => service.slug === params.slug);

    if (!service) {
        return <p>Service not found</p>;
    }

    return (
        <div className={`mx-auto w-full px-6 py-10 md:py-15 lg:items-center max-w-screen-xl min-h-[calc(100vh-111px)]`}>
            <Breadcrums crum={`auto-care-adelaide/services/${service.slug}`}/>
            <h1 className={`text-3xl max-w-[600px] mt-4 font-racing text-header mb-10`}>
                {service.categoryDisplayName} Services in Adelaide
            </h1>

            {/* Render more details about the service */}
            <ul>
                {service.typeOfServices.map((subService, index) => (
                    <li className={`mb-10`} key={index}>
                        <h2 className={`text-para text-xl lg:text-lg font-bold mb-3`}>{subService.name}</h2>
                        <p className={`text-para text-xl lg:text-lg mb-3`}>{subService.shortDescription}</p>

                        <Link className={`text-para bg-gray-100 hover:bg-gray-200 max-w-[150px] rounded-xl px-3 py-1 flex items-center`} href={`/auto-care-adelaide/services/${service.slug}/${subService.slug.split('/').pop()}`}>
                            <Image
                                src="/images/double_arrow.svg"
                                alt="PK Auto care"
                                placeholder="blur"
                                width={25}
                                height={0}
                                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..." // Base64-encoded LQIP image
                                priority
                            /> Learn more
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Services;
