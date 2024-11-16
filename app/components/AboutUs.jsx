
const AboutUs = () => {
    return (
        <div id='about' className={`lg:flex  items-start max-w-screen-xl mx-auto mt-12 gap-12 p-6`}>
            <div className={`w-full lg:w-1/2`}>
                <img
                    src="/images/services/about-pk-auto-care.webp"
                    alt="PK Auto care"
                    className={"w-full opacity-80 rounded-xl"}
                    width={400}
                    height={400}
                />
            </div>
            <div className={`lg:w-1/2 my-8 lg:my-0`}>
                <h2 className={`text-3xl max-w-[600px] font-racing text-header mb-6`}>Serving Adelaide Since
                    2000</h2>
                <p className={`text-para text-xl lg:text-lg `}>
                    For over two decades, PK Auto Care has been Adelaide&apos;s trusted choice for automotive services.
                    Our expert team is committed to delivering high-quality care and ensuring every customer leaves
                    satisfied. Here’s why our customers choose us:
                </p>

                <ol className={`text-para mt-6 text-lg`}>
                    <li className={`my-3`}><span
                        className={`font-racing text-xl lg:text-lg`}>Expert Technicians</span>: Our team of skilled
                        professionals is trained to handle all your auto
                        care needs with precision and expertise
                    </li>
                    <li className={`my-3`}><span className={`font-racing text-xl lg:text-lg`}>Quality Service</span>:
                        We use only
                        high-quality
                        parts and the latest technology to ensure your vehicle gets the best care possible
                    </li>
                    <li className={`my-3`}><span
                        className={`font-racing text-xl lg:text-lg`}>Competitive Pricing</span>: Enjoy
                        top-notch services at affordable prices, ensuring great value for your money.
                    </li>
                    <li className={`my-3`}><span
                        className={`font-racing text-xl lg:text-lg`}>Convenient Location</span>: Located in
                        the heart of Adelaide, our shop is easily accessible for all your auto care needs.
                    </li>
                    <li className={`my-3`}><span
                        className={`font-racing text-xl lg:text-lg`}>Comprehensive Care</span>: From engine
                        repairs to routine maintenance, we offer a full range of services to keep your vehicle
                        running smoothly.
                    </li>
                    <li className={`my-3`}><span
                        className={`font-racing text-xl lg:text-lg`}>Customer Satisfaction</span>: Your satisfaction
                        is our priority. We go the extra mile to provide exceptional service tailored to your needs.
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default AboutUs