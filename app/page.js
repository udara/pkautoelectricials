import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import AboutUs from "./components/AboutUs";
import FAQ from "./components/FAQ";

export const metadata = {
    title: "PK Auto Care - Auto Electrical, Mechanical and Air Conditioning Services in Adelaide"
};

const Home = () => {
    return (
        <>
            <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
                <h1 className="text-5xl text-white font-bold mb-8 animate-pulse">
                    Coming Soon
                </h1>
                <p className="text-white text-lg mb-8">
                    We are working hard to bring you something amazing. Stay tuned!
                </p>
            </div>
            {/*<Hero/>*/}
            {/*<AboutUs/>*/}
            {/*<Testimonials/>*/}
            {/*<FAQ/>*/}
        </>
    );
}

export default Home;
