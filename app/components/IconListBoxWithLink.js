import Image from "next/image";
import Link from "next/link";

const IconListBoxWithLink = ({image, link, text}) => {
    return (
        <Link href={`${link}`}>
            <div
                className="bg-gray-100 border border-gray-200 hover:cursor-pointer hover:bg-gray-200 rounded-xl flex p-4 h-full items-center">
                <Image
                    src={`${image}`}
                    alt="PK Auto care"
                    placeholder="blur"
                    width={25}
                    height={0}
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..." // Base64-encoded LQIP image
                    priority
                    className={`mr-4`}
                />
                <span className="font-medium text-para">{text}</span>
            </div>
        </Link>
    )
}

export default IconListBoxWithLink;