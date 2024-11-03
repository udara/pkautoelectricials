import Breadcrums from "../components/Breadcrums";
import IconListBoxWithLink from "../components/IconListBoxWithLink";

export const metadata = {
    title: "PK Auto Care - Auto Electrical, Mechanical and Air Conditioning Services in Adelaide"
};

const ServicesMainPage = () => {
    return (
        <div className={`mx-auto w-full px-6 py-10 md:py-15 lg:items-center max-w-screen-xl min-h-[calc(100vh-111px)]`}>
            <Breadcrums crum={`auto-care-adelaide/services`}/>
            <h1 className={`text-3xl max-w-[600px] mt-4 font-racing text-header mb-10`}>
                PK Mobile Auto Electrical Service, Your Trusted Auto Care Experts in Adelaid
            </h1>
            <p className={`text-para text-xl lg:text-lg`}>
                With over 15 years of trading and a combined 30 years of auto electrical experience, PK Mobile Auto Electrical Service proudly serves Adelaide and the surrounding areas. As a family-owned and operated business, we bring top-tier service and customer care directly to your location—whether it’s your home, workplace, or anywhere else.

                Our mobile units are fully equipped with the latest diagnostic tools, allowing our skilled technicians to handle everything from starter motor and alternator repairs to trailer electrics and air conditioning. Based in Beverley, we’re ideally positioned to reach customers across Adelaide, ensuring your vehicle receives the expert attention it needs, wherever you are.
            </p>
            <div
                className="grid mt-12 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <IconListBoxWithLink text={`Mechanical`} link={`/auto-care-adelaide/services/mechanical`} image={`/images/mechanicalIcon.png`} />
                <IconListBoxWithLink text={`Auto Electrical`} link={`/auto-care-adelaide/services/electrical`} image={`/images/electricalIcon.png`} />
                <IconListBoxWithLink text={`Air Conditioning`} link={`/auto-care-adelaide/services/air-conditioning`} image={`/images/ac_unit.png`} />
                <IconListBoxWithLink text={`Specialty Services`} link={`/auto-care-adelaide/services/specialty-services`} image={`/images/special.png`} />
                <IconListBoxWithLink text={`Accessory Fitting`} link={`/auto-care-adelaide/services/vehicle-accessory-fitter`} image={`/images/accessoryFitting.png`} />
                <IconListBoxWithLink text={`Battery Replacement`} link={`/auto-care-adelaide/services/battery`} image={`/images/battery.png`} />
            </div>
        </div>
    );
};

export default ServicesMainPage;
