"use client";

import {useState, useEffect} from 'react';

const testimonials = [
    {
        name: 'Mary',
        link: 'https://maps.app.goo.gl/uSgtzLSM6h1i8S1D6',
        rating: 5,
        date: 'March 2024',
        testimonial: `PK was amazing this past Saturday. I was in a tricky spot regarding the lights on my catering trailer, 
        with 3 events over the weekend. He came onsite and repaired so I could get to my events. Pricing was good, 
        considering it included a fair call out fee. Offer me a heaps of advice as to the updating required (older trailer). 
        Heading down this week for new wiring and LED lights. I'm very thankful. Mary`
    },
    {
        name: 'Denize Mushimiyimana',
        link: 'https://maps.app.goo.gl/Uz2EamVtofZdKbos7',
        rating: 5,
        date: 'March 2024',
        testimonial: `Fantastic service from PK Today, very friendly doesn’t matter whether he's the one fixing your car! 
        He will recommend you where exactly they would fix your car if he isn’t able to. Good people like him are very 
        rare to find! Would highly recommend them to my friends.`
    },
    {
        name: 'Jan Cornish',
        link: 'https://maps.app.goo.gl/VFoFSKYYgQh9pgWB8',
        rating: 5,
        date: 'March 2024',
        testimonial: `We had a problem while on a short holiday. Contacted PK who took us in straight away and fixed the problem within 24 hours. Friendly  service and great price.  Will use them again in future for our auto electric needs.`
    },
    {
        name: 'Wayne Adie',
        link: 'https://maps.app.goo.gl/iG4nFW63EMTYVt4Y9',
        rating: 5,
        date: 'March 2024',
        testimonial: `PK were just brilliant, highly recommend them, he operates a little differently than what I'd originally feel comfortable with, by giving him the car at the workshop and then he'll find the appropriate parts and do the job, but I can't argue with the end result, he fixed/replaced an air conditioner console/control panel, (the temperature lever snapped off), and he also fixed a door that wasn't operating in central locking mode. Great communication.
Took him 1.5 days to complete, and also gave us info on other parts of the car that will require attention in the future.`
    }
];

const Testimonials = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 5000); // Change testimonial every 5 seconds

        return () => clearInterval(interval);
    }, []);

    const handleNext = () => {
        setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrentTestimonial((prevIndex) =>
            (prevIndex - 1 + testimonials.length) % testimonials.length
        );
    };

    const {name, testimonial} = testimonials[currentTestimonial];

    return (
        <div id='#testimonials' className={`max-w-screen-xl mx-auto gap-12 mt-12 px-6`}>
            <h2 className={`text-3xl text-center max-w-[600px] font-racing text-header mb-6 lg:mb-0 mx-auto`}>Testimonials</h2>
            <p className={`text-xl text-para max-w-[600px] mx-auto text-center mt-6 lg:mb-0 mb-6 `}>We&apos;re proud of the
                trust our customers place in us, and their
                feedback speaks volumes. Here&apos;s what some
                of them have to say about their experience with PK Auto Care:</p>
            <section className="relative bg-white mx-auto">
                <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:px-6">
                    <figure className="max-w-screen-md mx-auto testimonial-transition h-[250px]"
                            key={currentTestimonial}>
                        <svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27"
                             fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                                fill="currentColor"/>
                        </svg>
                        <blockquote>
                            <p className="text-xl text-para ">&quot;{testimonial}&quot;</p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center mt-6 space-x-3">
                            <div className="flex items-center divide-x-2 divide-gray-500 ">
                                <div className="pr-3 font-medium text-gray-900 ">
                                    <div className={`w-6 h-6 bg-crimsonFlame text-white font-semibold rounded-full`}>
                                        {name.charAt(0)}
                                    </div>
                                </div>
                                <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">{name}
                                </div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
                <div className="absolute inset-y-0 left-0 flex items-center">
                    <button
                        onClick={handlePrev}
                        className="p-2 ml-4 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                        aria-label="Previous"
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd"
                                  d="M15 10a1 1 0 01-1 1H6l3.293 3.293a1 1 0 11-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L6 9h8a1 1 0 011 1z"
                                  clipRule="evenodd"/>
                        </svg>
                    </button>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center">
                    <button
                        onClick={handleNext}
                        className="p-2 mr-4 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                        aria-label="Next"
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd"
                                  d="M5 10a1 1 0 011-1h8l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L14 11H6a1 1 0 01-1-1z"
                                  clipRule="evenodd"/>
                        </svg>
                    </button>
                </div>
            </section>
        </div>
    )
}

export default Testimonials;
