import Link from "next/link";

const ServiceDescriptionBox = ({ image, link, title, description }) => {
    return (
        <Link href={`${link}`}>
            <div
                className="bg-white border border-gray-300 hover:cursor-pointer hover:bg-gray-100 rounded-lg flex p-4 items-start space-x-4 shadow-sm">
                <img
                    src={`${image}`}
                    alt="PK Auto Care"
                    width={40}
                    height={40}
                    className="flex-shrink-0"
                />
                <div>
                    <h3 className="font-bold text-para text-lg">{title}</h3>
                    <p className="text-sm text-para mt-1">{description}</p>
                </div>
            </div>
        </Link>
    );
};

export default ServiceDescriptionBox;