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
            longDescription: 'Our auto electrical work services cover everything from diagnostics and maintenance to replacements and upgrades for all your vehicle’s electrical systems. We address a wide range of issues, including lighting, wiring, battery, and charging systems, ensuring your vehicle’s electrical components are functioning efficiently. Whether it’s troubleshooting an electrical fault or installing new components, our experienced technicians use the latest diagnostic tools and high-quality parts to deliver reliable solutions that keep your vehicle running smoothly and safely. Trust us for all your auto electrical needs, from basic checks to complex system repairs and replacements.',
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
                    description: 'When your vehicle experiences electrical issues, our advanced diagnostics can identify the root cause quickly and accurately. We use the latest diagnostic tools to assess and pinpoint faults in your vehicle’s electrical systems, including issues with sensors, wiring, and control modules. Our technicians provide detailed reports and expert recommendations, ensuring your vehicle’s electrical systems are restored to optimal performance.',
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
        },
        {
            name: "Truck & Trailer Auto Electrical Services",
            slug: "truck-trailer-auto-electrical-services",
            shortDescription: "Comprehensive electrical services for trucks and trailers, ensuring your vehicle's electrical systems are reliable and safe.",
            longDescription: "Our Truck & Trailer Auto Electrical Services provide expert solutions for all your vehicle's electrical needs. From setting up dual battery systems to repairing and installing electric brakes, we ensure your truck or trailer operates efficiently and safely on the road. Whether it's lighting, wiring, or charging systems, our experienced technicians are equipped to handle all aspects of auto electrical services.",
            image: "truck-and-trailer-auto-electrical-services.png",
            imageExtension: "png",
            keywords: [
                "Truck Electrical Services",
                "Trailer Electrical Services",
                "Dual Battery Systems",
                "Electric Brakes Repair",
                "Auto Electrical Repair"
            ],
            subServices: [
                {
                    name: "Second Battery System Setup / Dual Battery Systems Setup",
                    slug: "second-battery-system-setup",
                    shortDescription: "Ensure reliable power with our dual battery system setups, perfect for long trips and heavy electrical loads.",
                    description: "Our Second Battery System Setup service provides the installation of dual battery systems to ensure your vehicle has a reliable source of power for additional electrical needs. Ideal for long journeys, off-road adventures, or when using power-intensive accessories, our setup ensures you never run out of juice.",
                    image: "second-battery-system-setup.png",
                    imageExtension: "jpg",
                    keywords: [
                        "Dual Battery Setup",
                        "Second Battery Installation",
                        "Vehicle Power Management"
                    ]
                },
                {
                    name: "Electric Brakes Repair and Installation",
                    slug: "electric-brakes-repair-installation",
                    shortDescription: "Expert repair and installation of electric brakes for enhanced safety and control.",
                    description: "Our Electric Brakes Repair and Installation service ensures your vehicle's braking system is safe, responsive, and meets all regulatory standards. Whether you're looking to install new electric brakes or repair existing ones, our technicians provide professional, reliable service to keep you safe on the road.",
                    image: "electric-brakes-repair-installation.png",
                    imageExtension: "png",
                    keywords: [
                        "Electric Brakes",
                        "Brake Repair",
                        "Brake Installation",
                        "Vehicle Safety"
                    ]
                },
                {
                    name: "Boat Trailer Lighting and Electric Brake/Breakaway Units",
                    slug: "boat-trailer-lighting-and-electric-brake",
                    shortDescription: "Ensure your boat trailer is road-ready with our lighting and brake services.",
                    description: "Our Boat Trailer Lighting and Electric Brake/Breakaway Units service provides complete electrical solutions for boat trailers. We handle everything from wiring and installing lights to setting up electric brakes and breakaway units, ensuring your trailer is safe and compliant with road regulations.",
                    image: "boat-trailer-lighting-and-electric-brake.png",
                    imageExtension: "png",
                    keywords: [
                        "Boat Trailer Lighting",
                        "Electric Brake Setup",
                        "Breakaway Units",
                        "Trailer Safety"
                    ]
                },
                {
                    name: "Anderson plug wiring",
                    slug: "anderson-plug-wiring",
                    shortDescription: "Professional Anderson plug wiring for reliable power connections in your vehicle.",
                    description: "Our Anderson Plug Wiring service offers expert installation of Anderson plugs, providing a reliable power connection for your vehicle’s electrical needs. Whether you need it for towing, charging, or connecting auxiliary devices, our service ensures safe and efficient wiring.",
                    image: "anderson-plug-wiring.png",
                    imageExtension: "png",
                    keywords: [
                        "Anderson Plug Installation",
                        "Vehicle Wiring",
                        "Power Connections"
                    ]
                },
                {
                    name: "12-pin Trailer plug wiring",
                    slug: "12-pin-trailer-plug-wiring",
                    shortDescription: "Ensure all your trailer’s electrical connections are secure with our 12-pin plug wiring service.",
                    description: "Our 12-pin Trailer Plug Wiring service provides expert wiring solutions to ensure your trailer’s electrical systems are fully functional and secure. Perfect for trailers with complex electrical needs, our service ensures every pin is correctly wired for optimal performance.",
                    image: "12-pin-trailer-plug-wiring.png",
                    imageExtension: "png",
                    keywords: [
                        "Trailer Plug Wiring",
                        "12-pin Wiring",
                        "Trailer Electrical Connections"
                    ]
                },
                {
                    name: "Solar Power Systems",
                    slug: "solar-power-systems",
                    shortDescription: "Efficient solar power systems for sustainable energy solutions in your vehicle.",
                    description: "Our Solar Power Systems service offers the installation and setup of high-efficiency solar panels and related components to provide sustainable energy solutions for your vehicle. Whether you're looking to power your caravan, RV, or other vehicles, our solar systems ensure you have a reliable and eco-friendly energy source, reducing dependency on traditional power sources and lowering your carbon footprint.",
                    image: "solar-power-systems.png",
                    imageExtension: "png",
                    keywords: [
                        "Solar Power Systems",
                        "Vehicle Solar Panels",
                        "Sustainable Energy",
                        "RV Solar Installation",
                        "Eco-Friendly Power Solutions"
                    ]
                }
            ]
        },
        {
            name: "LED Driving Lights / Mining Light Bars / Emergency Lighting ",
            slug: "led-driving-mining-emergency-lights",
            shortDescription: "Expert lighting solutions for all types of vehicles, enhancing visibility and safety.",
            longDescription: "Our Lighting service offers comprehensive solutions for upgrading, repairing, and installing vehicle lighting systems. Whether you need brighter headlights, more efficient LED lights, or specialized lighting for off-road or commercial vehicles, our expert technicians provide high-quality installations to improve your vehicle's visibility and safety on the road.",
            image: "led-driving-mining-emergency-lights.png",
            imageExtension: "png",
            keywords: [
                "Vehicle Lighting",
                "Headlight Installation",
                "LED Lights",
                "Vehicle Visibility",
                "Lighting Upgrade"
            ],
            subServices: [
                {
                    name: 'Driving Lights',
                    slug: 'driving-lights',
                    shortDescription: 'High-performance driving lights for enhanced visibility and safety on the road.',
                    description: 'Our Driving Lights service provides the installation of high-performance lights designed to improve visibility during night driving or in poor weather conditions. These lights offer focused illumination, ensuring you have a clear view of the road ahead, making your driving experience safer and more comfortable.',
                    image: 'driving-lights.png',
                    imageExtension: 'png',
                    keywords: [
                        'Driving Lights',
                        'Vehicle Lighting',
                        'Night Driving Safety'
                    ]
                },
                {
                    name: 'Mining Light Bars',
                    slug: 'mining-light-bars',
                    shortDescription: 'Durable mining light bars designed to withstand harsh conditions while providing optimal illumination.',
                    description: 'Our Mining Light Bars service offers the installation of robust and durable light bars specifically designed for mining and industrial applications. These light bars provide powerful, wide-area illumination, making them ideal for use in challenging environments where reliable lighting is crucial.',
                    image: 'mining-light-bars.png',
                    imageExtension: 'png',
                    keywords: [
                        'Mining Light Bars',
                        'Industrial Lighting',
                        'Heavy-Duty Lights'
                    ]
                },
                {
                    name: 'Emergency Lighting',
                    slug: 'emergency-lighting',
                    shortDescription: 'Reliable emergency lighting systems for vehicles, ensuring safety in critical situations.',
                    description: 'Our Emergency Lighting service provides the installation of specialized lighting systems designed for emergency vehicles or situations. These lights are essential for ensuring visibility and safety during emergencies, whether for police, fire, rescue, or other critical services.',
                    image: 'emergency-lighting.png',
                    imageExtension: 'png',
                    keywords: [
                        'Emergency Lighting',
                        'Safety Lights',
                        'Vehicle Emergency Systems'
                    ]
                }
            ]
        },
        {
            name: "Reversing Sensors and Cameras Installation",
            slug: "reversing-sensors-cameras-installation",
            shortDescription: "Enhance safety with our professional installation of reversing sensors and cameras.",
            longDescription: "Our Reversing Sensors and Cameras Installation service provides expert installation of advanced parking aids, including reversing sensors and cameras. These systems help you detect obstacles behind your vehicle, making parking and reversing safer and easier. Whether for personal cars, commercial vehicles, or heavy-duty trucks, our installation ensures seamless integration with your vehicle's existing systems.",
            image: "reversing-sensors-and-cameras-installation.png",
            imageExtension: "png",
            keywords: [
                "Reversing Sensors",
                "Backup Cameras",
                "Parking Aids",
                "Vehicle Safety",
                "Obstacle Detection"
            ],
            subServices: []
        }
    ]
}