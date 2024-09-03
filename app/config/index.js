const mechanical = require('./mechanical');
const electrical = require('./electrical');
const specialty = require('./specialty');
const airConditioning = require('./air-conditioning');
const vehicleAccessoryFitting = require('./vehicle-accessory-fitting');
const battery = require('./battery');

module.exports = {
    name: `PK Auto care`,
    telephone: `0412 241 341`,
    email: `pk.autoelectrical@gmail.com`,
    address: '670 Port Rd, Beverley, SA 5009',
    address_footer: '670 Port Rd, Beverley, Adelaide, SA 5009',
    services: [
        mechanical,
        electrical,
        airConditioning,
        specialty,
        vehicleAccessoryFitting,
        battery
    ],
    feature: [
        {
            category: 'Mechanical Services',
            mainLink: '/services/mechanical',
            subServices: [
                {
                    name:'Vehicle Maintenance',
                    link: 'auto-care-adelaide/services/mechanical/mechanical-repairs-maintenance',
                },
                {
                    name:'Log Book Servicing',
                    link: 'auto-care-adelaide/services/mechanical/log-book-servicing',
                },
                {
                    name:'Brakes Repair and Services',
                    link: 'auto-care-adelaide/services/mechanical/brakes-repairs',
                },
                {
                    name:'Clutch Repair and Services',
                    link: 'auto-care-adelaide/services/mechanical/clutch-repairs',
                },
                {
                    name:'Engine Repair and Services',
                    link: 'auto-care-adelaide/services/mechanical/engine-repairs',
                },
                {
                    name:'Transmission Repair and Services',
                    link: 'auto-care-adelaide/services/mechanical/transmission-repairs',
                }
            ]
        },
        {
            category: 'Auto Electrical Services',
            mainLink: 'auto-care-adelaide/services/electrical/auto-electrical-work',
            subServices: [
                {
                    name:'Starter Motor and Alternator',
                    link: 'auto-care-adelaide/services/electrical/starter-motor-alternator',
                },
                {
                    name:'Trailer/Caravan Electrical Work ',
                    link: 'auto-care-adelaide/services/electrical/truck-trailer-auto-electrical-services',
                },
                {
                    name:'Driving, Mining & Emergency Lights',
                    link: 'auto-care-adelaide/services/electrical/led-driving-mining-emergency-lights',
                },
                {
                    name:'Reversing Sensors and Cameras Installation',
                    link: 'auto-care-adelaide/services/electrical/reversing-sensors-cameras-installation',
                },
                {
                    name:'Solar Power Systems',
                    link: 'auto-care-adelaide/services/electrical/truck-trailer-auto-electrical-services#solar-power-systems',
                },
                {
                    name:'Electric Brakes Repair and Installation',
                    link: 'auto-care-adelaide/services/electrical/truck-trailer-auto-electrical-services#electric-brakes-repair-installation',
                }
            ]
        },
        {
            category: 'Auto Air Conditioning',
            mainLink: 'auto-care-adelaide/services/air-conditioning',
            subServices: [
                {
                    name:'Complete Diagnostic Service',
                    link: 'auto-care-adelaide/services/air-conditioning/complete-diagnostic-service',
                },
                {
                    name:'Leak Detection and Repair',
                    link: 'auto-care-adelaide/services/air-conditioning/leak-detection-and-repair',
                },
                {
                    name:'Air Conditioning Re-Gas',
                    link: 'auto-care-adelaide/services/air-conditioning/air-conditioning-re-gas',
                },
                {
                    name:'Air Conditioning Service and Repair',
                    link: 'auto-care-adelaide/services/air-conditioning/air-conditioning-service-and-repair',
                },
                {
                    name:'Compressor Inspection and Replacement',
                    link: 'auto-care-adelaide/services/air-conditioning/compressor-inspection-and-replacement',
                },
                {
                    name:'Aluminium air conditioning pipe repair and hose repair',
                    link: 'auto-care-adelaide/services/air-conditioning/aluminium-air-conditioning-pipe-repair-and-hose-repair',
                }
            ]
        },
        {
            category: 'Specialty Services',
            mainLink: 'auto-care-adelaide/services/battery',
            subServices: [
                {
                    name:'Installations for Traffic Management Vehicles',
                    link: 'auto-care-adelaide/services/specialty-services/installations-for-traffic-management-vehicles',
                },
                {
                    name:'Arrow Boards Supply and Installation',
                    link: 'auto-care-adelaide/services/specialty-services/installations-for-traffic-management-vehicles#arrow-boards-supply-and-installation',
                },
                {
                    name:'VMS Boards Supply and Installation',
                    link: 'auto-care-adelaide/services/specialty-services/installations-for-traffic-management-vehicles',
                },
                {
                    name:'UHF Radio Supply and Installation',
                    link: 'auto-care-adelaide/services/specialty-services/installations-for-traffic-management-vehicles',
                },
                {
                    name:'Handbrake Alarms for Traffic Management / Mining Vehicles',
                    link: 'auto-care-adelaide/services/specialty-services/handbrake-alarms',
                },
            ]
        },
        {
            category: 'Vehicle Accessory Services',
            mainLink: 'auto-care-adelaide/services/vehicle-accessory-fitter',
            subServices: [
                {
                    name:'Second Battery System Setup',
                    link: 'auto-care-adelaide/services/vehicle-accessory-fitter/second-battery-system-setup',
                },
                {
                    name:'Solar Power Systems',
                    link: 'auto-care-adelaide/services/vehicle-accessory-fitter/solar-power-systems',
                },
                {
                    name:'Anderson plug wiring',
                    link: 'auto-care-adelaide/services/vehicle-accessory-fitter/anderson-plug-wiring',
                },
                {
                    name:'12-pin Trailer plug wiring',
                    link: 'auto-care-adelaide/services/vehicle-accessory-fitter/12-pin-trailer-plug-wiring',
                },
                {
                    name:'Boat Trailer Lighting',
                    link: 'auto-care-adelaide/services/vehicle-accessory-fitter/boat-trailer-lighting-and-electric-brake',
                },
            ]
        },
        {
            category: 'Battery Replacements and Supply',
            mainLink: 'auto-care-adelaide/services/battery',
            subServices: [
                {
                    name:'Battery Testing and Diagnostics',
                    link: 'auto-care-adelaide/services/battery/battery-testing-diagnostics',
                },
                {
                    name:'Battery Installation',
                    link: 'auto-care-adelaide/services/battery/battery-installation',
                },
                {
                    name:'Battery Supply',
                    link: 'auto-care-adelaide/services/battery/battery-supply',
                },
                {
                    name:'Battery Disposal and Recycling',
                    link: 'auto-care-adelaide/services/battery/battery-disposal-recycling',
                }
            ]
        }
    ]
}
