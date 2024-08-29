import Image from 'next/image';
import config from "../../../../config";
import Breadcrums from "../../../../components/Breadcrums";

const SubService = ({params}) => {
    const service = config.services.find((service) => service.slug === params.slug);

    if (!service) {
        return <p>Service not found</p>;
    }

    const subService = service.typeOfServices.find((subService) => subService.slug.endsWith(params.subServiceSlug));

    if (!subService) {
        return <p>Sub-service not found</p>;
    }

    return (
        <div className={`mx-auto w-full px-6 py-10 md:py-15 lg:items-center max-w-screen-xl min-h-[calc(100vh-111px)]`}>
            <div>
                <Breadcrums crum={`auto-care-adelaide/services/${service.slug}/${subService.slug}`}/>
                <h1 className={`text-3xl max-w-[600px] mt-4 font-racing text-header mb-10`}>
                    {subService.name} in Adelaide
                </h1>
                <Image
                    src={`/images/services/${subService.image}`}
                    className={`w-full mb-6 rounded-xl`}
                    alt={`${subService.name} Adelaide`}
                    title={`${subService.image}`}
                    placeholder="blur"
                    width={725}
                    height={0}
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..." // Base64-encoded LQIP image
                    priority
                />
                <p className={`text-para text-xl lg:text-lg mb-10`}>{subService.longDescription}</p>
                {/* Render more details about the sub-service */}
                <ul>
                    {subService.subServices?.map((sub, index) => (

                            <li className={`mb-5`} key={index}>
                                <h2 id={sub.slug} className={`text-para text-xl lg:text-lg font-bold mb-5`}>
                                    {sub.name}
                                </h2>
                                <div className="block md:flex items-start mb-3">
                                    <Image
                                        src={`/images/services/${sub.image}`}
                                        className={`mr-4 mb-6 w-full md:w-auto rounded-xl`} // Remove float, keep margin
                                        alt={`${subService.name} Adelaide`}
                                        title={`${subService.name} Adelaide`}
                                        placeholder="blur"
                                        width={100}
                                        height={0}
                                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..." // Base64-encoded LQIP image
                                        priority
                                    />
                                    <p className={`text-para text-xl lg:text-lg`}>
                                        {sub.description}
                                    </p>
                                </div>
                            </li>

                        ))}
                        </ul>
                        </div>
                        </div>
                        );
                        };

                        export default SubService;

                        export async function generateStaticParams() {
                        const paths = [];

                        config.services.forEach((service) => {
                        service.typeOfServices.forEach((subService) => {
                        paths.push({
                        slug: service.slug,
                        subServiceSlug: subService.slug.split('/').pop(),
                    });
                    });
                    });

                        return paths;
                    }
