import config from "../../../../config";
import Breadcrums from "../../../../components/Breadcrums";

// This function generates the static paths for each sub-service slug
export async function generateStaticParams() {
    const paths = config.services.flatMap((service) =>
        service.typeOfServices.map((subService) => ({
            slug: service.slug,
            subServiceSlug: subService.slug.split('/').pop(),
        }))
    );

    return paths;
}

const SubService = ({ params }) => {
    const service = config.services.find((service) => service.slug === params.slug);

    if (!service) {
        return <p>Service not found</p>;
    }

    const subService = service.typeOfServices.find((subService) =>
        subService.slug.endsWith(params.subServiceSlug)
    );

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
                <img
                    src={`/images/services/${subService.image}`}
                    className={`w-full mb-6 rounded-xl`}
                    alt={`${subService.name} Adelaide`}
                    width={725}
                    height={0}
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
                                <img
                                    src={`/images/services/${sub.image}`}
                                    className={`mr-4 mb-6 w-full lg:max-w-[100px] md:w-auto rounded-xl`} // Remove float, keep margin
                                    alt={`${subService.name} Adelaide`}
                                    title={`${subService.name} Adelaide`}
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
