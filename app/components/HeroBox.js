import Link from 'next/link'

const HeroBox = ({header, list}) => {
    const renderedList = list.map((item,index) => {return <li key={`${header.split(' ','-')}${index}`}><Link href={item.link}>{item.name}</Link></li> })
    return (
        <div className="p-4 bg-[#000] bg-opacity-70 rounded-xl flex flex-col h-full">
            <h2 className={`px-3 pt-3 text-2xl lg:text-xl font-racing`}>{header}</h2>
            <ul className={`py-6 px-3 list-inside list-square text-white font-light gap-3 space-y-3 lg:space-y-2 text-xl md:text-xl lg:text-base`}>
                {renderedList}
            </ul>
        </div>
    );
}

export default HeroBox;