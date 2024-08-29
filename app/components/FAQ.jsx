"use client";
import { useState } from 'react';
import Image from "next/image";

const FAQS = [
    {
        q: 'What areas of Adelaide do you provide services to?',
        a: 'We travel to all areas of Adelaide, including the outer suburbs, to provide our mobile services.'
    },
    {
        q: 'Do you offer warranties on your services and products?',
        a: 'Yes, we offer warranties on our services and products. The duration of the warranty varies depending on the specific product or service. Please contact us for more details.'
    },
    {
        q: 'How quickly can you respond to emergency request?',
        a: 'We offer emergency services and aim to respond as quickly as possible, typically within a few hours. Please contact us immediately if you require urgent assistance.'
    },
    {
        q: 'Can I get a quote before you start the work?',
        a: 'Absolutely! We provide detailed quotes before starting any work so that you know exactly what to expect. There are no hidden fees, and we\'ll only proceed with your approval.'
    },
    {
        q: 'What payment methods do you accept?',
        a: 'We accept various payment methods, including cash, credit/debit cards, and online bank transfers. Payment is due upon completion of the service, and we can provide an invoice for your records.'
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div id='faqs' className={`max-w-screen-xl  mx-auto gap-12 mt-12 px-6`}>
            <section className="py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div
                        className="flex flex-col justify-center items-start gap-x-16 gap-y-5 xl:gap-28 lg:flex-row lg:justify-between max-lg:max-w-2xl mx-auto max-w-full"
                    >
                        <div className="w-full lg:w-1/2">
                            <Image
                                src="/images/faqs.png"
                                alt="PK Auto care"
                                placeholder="blur"
                                className={"w-full rounded-xl opacity-90"}
                                width={530}
                                height={672}
                                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..." // Base64-encoded LQIP image
                                priority
                            />
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="lg:max-w-xl">
                                <div className="mb-6 lg:mb-16">
                                    <h2 className={`text-3xl font-racing text-header mb-6 mt-6 lg:mt-0 lg:mb-0`}>Frequently Asked Questions</h2>
                                </div>
                                <div className="accordion-group">
                                    {FAQS.map((faq, index) => (
                                        <div
                                            key={index}
                                            className={`accordion py-8 border-b border-solid border-gray-200 ${activeIndex === index ? 'active' : ''}`}
                                        >
                                            <button
                                                className="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-600 w-full transition duration-500 hover:text-crimsonFlame"
                                                aria-controls={`faq-content-${index}`}
                                                onClick={() => toggleAccordion(index)}
                                            >
                                                <h5 className={`text-center md:text-left`}>{faq.q}</h5>
                                                <svg
                                                    className={`text-gray-900 transition duration-500 group-hover:text-oceanBlue ${activeIndex === index ? 'rotate-180' : ''}`}
                                                    width="22"
                                                    height="22"
                                                    viewBox="0 0 22 22"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                                                        stroke="currentColor"
                                                        strokeWidth="1.6"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    ></path>
                                                </svg>
                                            </button>
                                            <div
                                                id={`faq-content-${index}`}
                                                className={`accordion-content w-full px-0 overflow-hidden pr-4 transition-max-height duration-500 ease-in-out ${activeIndex === index ? 'max-h-screen' : 'max-h-0'}`}
                                                aria-labelledby={`faq-heading-${index}`}
                                            >
                                                <p className="text-base text-gray-500 text-center mt-3 md:text-left font-normal">
                                                    {faq.a}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQ;
