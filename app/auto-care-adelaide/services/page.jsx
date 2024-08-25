import Breadcrums from "../../components/Breadcrums";
import Image from 'next/image';
import Link from 'next/link';
import IconListBoxWithLink from "../../components/IconListBoxWithLink";


export const metadata = {
    title: "PK Auto Care - Mechanical, Electrical and Air Conditioning Services in Adelaide"
};

const ServicesMainPage = () => {
    return (
        <div className={`mx-auto w-full px-6 py-10 md:py-15 lg:items-center max-w-screen-xl min-h-[calc(100vh-111px)]`}>
            <Breadcrums crum={`auto-care-adelaide/services`}/>
            <h1 className={`text-3xl max-w-[600px] mt-4 font-racing text-header mb-10`}>
                Mechanical, Electrical and Air Conditioning Services in Adelaide
            </h1>
            <p className={`text-para text-xl lg:text-lg`}>
                We offer comprehensive automotive services, including air conditioning repairs, battery testing and
                installation, and electrical and mechanical maintenance. For businesses, we provide complete fleet
                management and specialty services like traffic management installations and handbrake alarms, ensuring
                your vehicle's safety and efficiency
            </p>
            <div
                className="grid mt-12 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <IconListBoxWithLink text={`Mechanical`} link={`services/mechanical`} image={`/images/mechanicalIcon.png`} />
                <IconListBoxWithLink text={`Auto Electrical`} link={`services/electrical`} image={`/images/electricalIcon.png`} />
                <IconListBoxWithLink text={`Air Conditioning`} link={`services/air-conditioning`} image={`/images/ac_unit.png`} />
                <IconListBoxWithLink text={`Specialty Services`} link={`services/specialty-services`} image={`/images/mechanicalIcon.png`} />
                <IconListBoxWithLink text={`Fleet Management`} link={`services/fleet-management`} image={`/images/mechanicalIcon.png`} />
                <IconListBoxWithLink text={`Battery Replacement`} link={`services/battery`} image={`/images/mechanicalIcon.png`} />
            </div>
        </div>
    );
};

export default ServicesMainPage;
