import Blog from "../components/Blog"
import Foot from "../components/Foot"
import Highlights from "../components/Highlights"
import Join from "../components/Join"
import Navbar02 from "../components/Navbar02"
import HeroSection from "./HeroSection"
import Navbar from "./Navbar"


const Home = () => {
    const token = localStorage.getItem("token")
    return (
        <div>
           {token?  <Navbar02/>: <Navbar/>}
            <HeroSection />
            <Highlights />
            <Blog />
            <Join />
            <Foot />
        </div>
    )
}
export default Home