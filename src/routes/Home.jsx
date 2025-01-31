import Feature from "../components/Feature"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import About from "../components/About"
import WhyUs from "../components/WhyUs"
import Services from "../components/Services"
import Blog from "../components/Blog"
import Footer from "../components/Footer"
import Videos from "../components/Videos"

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            {/* <Feature /> */}
            <About />
            {/* <WhyUs /> */}
            <Services />
            <Videos />
            <Footer />
        </>
    )
}

export default Home