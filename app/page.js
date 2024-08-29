import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import AboutUs from "./components/AboutUs";
import FAQ from "./components/FAQ";

export const metadata = {
    title: "PK Auto Care - Mechanical, Electrical and Air Conditioning Services in Adelaide"
};

const Home = () => {
    return (
        <>
            <Hero/>
            <AboutUs/>
            <Testimonials/>
            <FAQ/>
        </>
    );
}

export default Home;