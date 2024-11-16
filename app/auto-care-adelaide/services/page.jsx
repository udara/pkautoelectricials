import Breadcrums from "../../components/Breadcrums";
import ServiceDescriptionBox from "../../components/ServiceDescriptionBox";


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
            We provide a full range of automotive services, including air conditioning repairs, battery testing and installation, and electrical and mechanical maintenance. For businesses, we offer complete fleet management along with specialized services for traffic management vehicles, caravans, boats, and earth-moving equipment installations, all focused on enhancing your vehicle&apos;s safety and durability.
            </p>
            <div
                className="grid mt-12 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
                <ServiceDescriptionBox  description={`Vehicle Maintenance, Engine, Transmission, Brakes and Clutch Repair and Services`} title={`Mechanical`} link={`/auto-care-adelaide/services/mechanical`} image={`/images/mechanicalIcon.png`} />
                <ServiceDescriptionBox  description={`Lighting and Wiring Services and Fault Diagnostics. Starter Motor and Alternator Inspection/Replacement`} title={`Auto Electrical`} link={`/auto-care-adelaide/services/electrical`} image={`/images/electricalIcon.png`} />
                <ServiceDescriptionBox  description={`Leak Detection/Repairs, Re-Gas, Cleaning/Inspection/Replacement of AC Related components`} title={`Air Conditioning`} link={`/auto-care-adelaide/services/air-conditioning`} image={`/images/ac_unit.png`} />
                <ServiceDescriptionBox  description={`Installations for Traffic Management Vehicles, Handbrake Alarms for Mining, Traffic Management Vehicles and Trucks`} title={`Specialty Services`} link={`/auto-care-adelaide/services/specialty-services`} image={`/images/special.png`} />
                <ServiceDescriptionBox  description={`Accessory Fitting for Caravans, Trucks & Trailers, LED Driving Lights / Mining Light Bars / Emergency Lighting`} title={`Accessory Fitting`} link={`/auto-care-adelaide/services/vehicle-accessory-fitter`} image={`/images/accessoryFitting.png`} />
                <ServiceDescriptionBox  description={`Testing and Diagnostics, Supply and Installation. Battery Disposal and Recycling `} title={`Battery Replacement`} link={`/auto-care-adelaide/services/battery`} image={`/images/battery.png`} />
            </div>
        </div>
    );
};

export default ServicesMainPage;
