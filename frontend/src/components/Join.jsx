import { ArrowRight } from "lucide-react"
import { useNavigate } from "react-router-dom"


const Join = () => {
    const Navigate = useNavigate()
    return (
        <div className="py-6 bg-gray-600 ">
            <h1 className="text-3xl text-center text-white m-6 ">Join us</h1>
            <div className="grid my-2  sm:grid-cols-3 grid-cols-1 text-white text-xl">

                <div className=" hover:scale-105 transition-transform duration-300  border-2 border-white rounded-lg p-6 mx-auto mt-2 text-center ">
                    <img src="https://i.pinimg.com/1200x/fe/25/96/fe259638b2d87954fee40066aef31069.jpg"
                        className="w-[180px] rounded-full"
                        alt="Avatar" />
                    <h1 className="pt-3">gregg</h1>
                </div>

                <div className=" hover:scale-105 transition-transform duration-300  border-2 border-white rounded-lg p-6 mx-auto mt-2 text-center ">
                    <img src="https://i.pinimg.com/736x/79/1e/e1/791ee1429e8899bc9a5ffa0583dfc8f8.jpg"
                        className="w-[180px] rounded-full"
                        alt="Avatar" />
                    <h1 className="pt-3">mashmellow</h1>
                </div>

                <div className=" hover:scale-105 transition-transform duration-300  border-2 border-white rounded-lg p-6 mx-auto mt-2 text-center ">
                    <img src="https://i.pinimg.com/1200x/c9/31/41/c93141d575b34e151811bea0f3a1f643.jpg"
                        className="w-[180px] rounded-full"
                        alt="Avatar" />
                    <h1 className="pt-3">bob</h1>
                </div>
            </div>
            <button onClick={() => Navigate("/connect")} className="flex items-center hover:scale-105 transition-transform duration-300 mx-auto my-6 gap-2 border-2 border-white bg-gray-700 text-white text-xl px-5 py-2  rounded-lg font-medium w-fit hover:bg-gray-800">
                Connect others <ArrowRight className="w-3 h-4" />
            </button>
        </div>
    )
}
export default Join