module.exports =  {
    order: 2,
    category: 'Electrical',
    categoryDisplayName: 'Electrical',
    slug: 'electrical',
    description:'Electrical shortDescription',
    image:'electrical',
    typeOfServices: [
        {
            name: 'Auto Electrical Work',
            slug: 'auto-electrical-work',
            shortDescription: 'Complete auto electrical services to keep your vehicle’s electrical systems in perfect working order, ensuring reliability and safety on the road.',
            longDescription: 'Our auto electrical work services cover everything from diagnostics and maintenance to replacements and upgrades for all your vehicle’s electrical systems. We address a wide range of issues, including lighting, wiring, battery, and charging systems, ensuring your vehicle’s electrical components are functioning efficiently. Whether it’s troubleshooting an electrical fault or installing new components, our experienced technicians use the latest diagnostic tools and genuine and after market parts to deliver reliable solutions that keep your vehicle running smoothly and safely. Trust us for all your auto electrical needs, from basic checks to complex system repairs and replacements.',
            image: 'auto-electrical-work.png',
            imageExtension: 'png',
            keywords: ['Auto Electrical Work', 'Electrical Diagnostics', 'Lighting', 'Wiring', 'Battery Systems', 'Charging Systems', 'Vehicle Electrical Systems', 'Electrical Maintenance'],
            subServices: [
                {
                    name: 'Lighting and Wiring Services',
                    slug: 'lighting-wiring',
                    shortDescription: 'Expert lighting and wiring services to ensure your vehicle’s electrical systems are reliable and safe.',
                    description: 'We offer comprehensive lighting and wiring services, including diagnostics, repairs, and upgrades. Our technicians address issues such as faulty headlights, taillights, interior lighting, and wiring problems. We also offer installation services for new lighting systems and wiring harnesses, ensuring your vehicle’s electrical systems are safe and dependable.',
                    image: 'lighting-wiring.png',
                    imageExtension: 'png',
                    keywords: ['Lighting Repair', 'Wiring Services', 'Headlights', 'Taillights', 'Interior Lighting', 'Electrical Wiring', 'Vehicle Safety']
                },
                {
                    name: 'Electrical Fault Diagnostics',
                    slug: 'fault-diagnostics',
                    shortDescription: 'Advanced diagnostics to identify and resolve electrical faults in your vehicle’s systems.',
                    description: 'When your vehicle experiences electrical issues, our advanced diagnostics can identify the root cause quickly and accurately. We use the latest diagnostic tools to assess and pinpoint faults in your vehicle’s electrical systems, including issues with sensors, wiring, and control modules. Our technicians provide expert guide lines, ensuring your vehicle’s electrical systems are restored to optimal performance.',
                    image: 'electrical-fault-diagnostics.png',
                    imageExtension: 'png',
                    keywords: ['Electrical Diagnostics', 'Fault Finding', 'Sensor Issues', 'Wiring Problems', 'Control Module Diagnostics', 'Vehicle Electrical Faults']
                }
            ]
        },
        {
            name: 'Starter Motor and Alternator',
            slug: 'starter-motor-alternator',
            shortDescription: 'Comprehensive inspection, maintenance, and replacement services for your vehicle’s starter motor and alternator, ensuring reliable starting and consistent electrical performance.',
            longDescription: 'We offer a full range of services for starter motors and alternators, including inspection, maintenance, and replacement. Our skilled technicians thoroughly check your vehicle’s electrical system, ensuring that the starter motor and alternator are in optimal condition. If necessary, we also provide high-quality replacement services to keep your vehicle starting reliably and performing efficiently. While we do not repair these components, our focus on preventive maintenance and timely replacement helps you avoid unexpected breakdowns and ensures consistent electrical performance.',
            image: 'starter-motor-alternator.png',
            imageExtension: 'png',
            keywords: ['Starter Motor Inspection', 'Alternator Maintenance', 'Electrical System Check', 'Preventive Maintenance', 'Vehicle Starting System'],
            subServices: [
                {
                    name: 'Starter Motor Inspection/Replacement',
                    slug: 'starter-motor-replacement',
                    shortDescription: 'Reliable starter motor replacement to keep your vehicle starting efficiently.',
                    description: 'If your starter motor is beyond repair, we offer high-quality replacement services. Our technicians use top-tier parts to replace faulty starter motors, ensuring your vehicle starts reliably every time. We focus on providing a seamless replacement experience to minimize downtime and keep your vehicle in top condition.',
                    image: 'starter-motor-replacement.png',
                    imageExtension: 'png',
                    keywords: ['Starter Motor Replacement', 'Engine Starting Issues', 'Electrical System Reliability']
                },
                {
                    name: 'Alternator Inspection/Replacement',
                    slug: 'alternator-replacement',
                    shortDescription: 'Professional alternator replacement to ensure your vehicle’s electrical system remains reliable.',
                    description: 'When your alternator is no longer functioning as it should, our replacement services ensure your vehicle’s electrical system is restored to full functionality. We use high-quality alternators and expert installation techniques to provide reliable, long-lasting replacements that keep your vehicle’s electrical systems powered and efficient.',
                    image: 'alternator-replacement.png',
                    imageExtension: 'png',
                    keywords: ['Alternator Replacement', 'Battery Charging Issues', 'Electrical System Maintenance', 'Reliable Electrical Power']
                }
            ]
        }
    ]
}