import Breadcrums from "../../components/Breadcrums";
import IconListBoxWithLink from "../../components/IconListBoxWithLink";


export const metadata = {
    title: "PK Auto Care - Mechanical, Auto Electrical and Air Conditioning Services in Adelaide"
};

const ServicesMainPage = () => {
    return (
        <div className={`mx-auto w-full px-6 py-10 md:py-15 lg:items-center max-w-screen-xl min-h-[calc(100vh-111px)]`}>
            <Breadcrums crum={`auto-care-adelaide/services`}/>
            <h1 className={`text-3xl max-w-[600px] mt-4 font-racing text-header mb-10`}>
                Mechanical, Auto Electrical and Air Conditioning Services in Adelaide
            </h1>
            <p className={`text-para text-xl lg:text-lg`}>
            We provide a full range of automotive services, including air conditioning repairs, battery testing and installation, and electrical and mechanical maintenance. For businesses, we offer complete fleet management along with specialized services for traffic management vehicles, caravans, boats, and earth-moving equipment installations, all focused on enhancing your vehicle's safety and durability.
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
