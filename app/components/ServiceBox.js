import Link from 'next/link'

const ServiceBox = ({header, description, slug}) => {
    return (
        <div className="p-4 bg-[#000] bg-opacity-40 flex flex-col h-full">
            <h2 className={`px-3 pt-3 text-2xl lg:text-xl font-racing`}>{header}</h2>
            <div className={`py-6 px-3 list-inside list-square text-white font-light gap-3 space-y-3 lg:space-y-2 text-xl md:text-xl lg:text-base`}>
                {description}
            </div>
            <Link href={slug}>...more...</Link>
        </div>
    );
}

export default ServiceBox;