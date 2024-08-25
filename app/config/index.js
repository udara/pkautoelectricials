const mechanical = require('./mechanical');
const electrical = require('./electrical');
const specialty = require('./specialty');
const airConditioning = require('./air-conditioning');
const fleetManagement = require('./fleet-management');
const battery = require('./battery');

module.exports = {
    name: `PK Auto care`,
    telephone: `0412 241 341`,
    email: `pk.autoelectrical@gmail.com`,
    address: '670 Port Rd, Beverley SA 5009',
    services: [
        mechanical,
        electrical,
        airConditioning,
        specialty,
        fleetManagement,
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
                    link: 'auto-care-adelaide/services/mechanical/breaks-repairs',
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
                    link: 'auto-care-adelaide/services/electrical/lighting',
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
            category: 'Auto HVAC Engineering',
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
                    name:'Retro Fitting Air Conditioning Unit',
                    link: 'auto-care-adelaide/services/air-conditioning/retro-fitting-air-conditioning-unit',
                },
                {
                    name:'Gas Recovery Service',
                    link: 'auto-care-adelaide/services/air-conditioning/gas-recovery-service',
                },
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
                    link: 'auto-care-adelaide/services/specialty-services/arrow-boards-supply-and-installation',
                },
                {
                    name:'VMS Boards Supply and Installation',
                    link: 'auto-care-adelaide/services/specialty-services/vms-boards-supply-and-installation',
                },
                {
                    name:'Power Tool Maintenance and Repair',
                    link: 'auto-care-adelaide/services/specialty-services/power-tool-maintenance-and-repair',
                },
                {
                    name:'Handbrake Alarms for Mining Vehicles',
                    link: 'auto-care-adelaide/services/specialty-services/handbrake-alarms',
                },
                {
                    name:'Handbrake Alarms for Traffic Management Vehicles',
                    link: 'auto-care-adelaide/services/specialty-services/handbrake-alarms',
                },
            ]
        },
        {
            category: 'Fleet Management',
            mainLink: 'auto-care-adelaide/services/fleet-management',
            subServices: [
                {
                    name:'Comprehensive Fleet Management Services',
                    link: 'auto-care-adelaide/services/fleet-management/comprehensive-fleet-management-services',
                },
                {
                    name:'Fleet Maintenance and Repair',
                    link: 'auto-care-adelaide/services/fleet-management/fleet-maintenance-repair',
                },
                {
                    name:'Compliance and Regulatory Services',
                    link: 'auto-care-adelaide/services/fleet-management/compliance-regulatory-services',
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
